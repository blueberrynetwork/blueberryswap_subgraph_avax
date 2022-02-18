/* eslint-disable prefer-const */
import { BigDecimal, Address } from '@graphprotocol/graph-ts/index';
import { Pair, Token, Bundle } from '../generated/schema';
import { ZERO_BD, factoryContract, ADDRESS_ZERO, ONE_BD } from './utils';

let WAVAX_ADDRESS = '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7';
const AEB_USDT_WAVAX_PAIR = '0x9ee0a4e21bd333a6bb2ab298194320b8daa26516'; // created block 60,337
const AB_USDT_WAVAX_PAIR = '0xe28984e1ee8d431346d32bec9ec800efb643eef4'; // created block 2,781,997

export function getAvaxPriceInUSD(): BigDecimal {
  // fetch eth prices for each stablecoin
  let aebtPair = Pair.load(AEB_USDT_WAVAX_PAIR); // usdt is token0
  let abdPair = Pair.load(AB_USDT_WAVAX_PAIR); // busd is token1

  if (abdPair !== null && aebtPair !== null) {
    let totalLiquidityAVAX = abdPair.reserve0.plus(aebtPair.reserve1);
    if (totalLiquidityAVAX.notEqual(ZERO_BD)) {
      let busdWeight = abdPair.reserve0.div(totalLiquidityAVAX);
      let usdtWeight = aebtPair.reserve1.div(totalLiquidityAVAX);
      return abdPair.token1Price
        .times(busdWeight)
        .plus(aebtPair.token0Price.times(usdtWeight));
    } else {
      return ZERO_BD;
    }
  } else if (abdPair !== null) {
    return abdPair.token1Price;
  } else if (aebtPair !== null) {
    return aebtPair.token0Price;
  } else {
    return ZERO_BD;
  }
}

// token where amounts should contribute to tracked volume and liquidity
let WHITELIST: string[] = [
  '0xa60f291b5663310796cA3c0a3d7551a77A9ee1DB', // WAVAX
  '0x17d348eAA30F191eE34c3dE874Ba9989f259e44c', // Blueberry
  '0xde3a24028580884448a5397872046a019649b084', // USDT
  '0xc7198437980c041c805a1edcba50c1ce5db95118', // USDT.e
  '0xba7deebbfc5fa1100fb055a87773e1e99cd3507a', // DAI
  '0xd586e7f844cea2f87f50152665bcbc2c279d8d70', // DAI.e
  '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664', // USDC.e
  '0xf20d962a6c8f70c731bd838a3a388d7d48fa6e15', // ETH
  '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab', // WETH.e
  '0x408d4cd0adb7cebd1f1a1c33a0ba2098e1295bab', // WBTC
  '0x50b7545627a5162f82a992c33b87adc75187b218', // WBTC.e
  '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e', // USDC (native)
  '0x260bbf5698121eb85e7a74f2e45e16ce762ebe11', // UST (axelar)
];

// minimum liquidity for price to get tracked
let MINIMUM_LIQUIDITY_THRESHOLD_AVAX = BigDecimal.fromString('10');

/**
 * Search through graph to find derived AVAX per token.
 * @todo update to be derived AVAX (add stablecoin estimates)
 **/
export function findAvaxPerToken(token: Token): BigDecimal {
  if (token.id == WAVAX_ADDRESS) {
    return ONE_BD;
  }
  // loop through whitelist and check if paired with any
  for (let i = 0; i < WHITELIST.length; ++i) {
    let pairAddress = factoryContract.getPair(
      Address.fromString(token.id),
      Address.fromString(WHITELIST[i])
    );
    if (pairAddress.toHex() != ADDRESS_ZERO) {
      let pair = Pair.load(pairAddress.toHex());
      if (
        pair.token0 == token.id &&
        pair.reserveAVAX.gt(MINIMUM_LIQUIDITY_THRESHOLD_AVAX)
      ) {
        let token1 = Token.load(pair.token1);
        return pair.token1Price.times(token1.derivedAVAX as BigDecimal); // return token1 per our token * AVAX per token 1
      }
      if (
        pair.token1 == token.id &&
        pair.reserveAVAX.gt(MINIMUM_LIQUIDITY_THRESHOLD_AVAX)
      ) {
        let token0 = Token.load(pair.token0);
        return pair.token0Price.times(token0.derivedAVAX as BigDecimal); // return token0 per our token * AVAX per token 0
      }
    }
  }
  return ZERO_BD; // nothing was found return 0
}

/**
 * Accepts tokens and amounts, return tracked amount based on token whitelist
 * If one token on whitelist, return amount in that token converted to USD.
 * If both are, return average of two amounts
 * If neither is, return 0
 */
export function getTrackedVolumeUSD(
  bundle: Bundle,
  tokenAmount0: BigDecimal,
  token0: Token,
  tokenAmount1: BigDecimal,
  token1: Token
): BigDecimal {
  let price0 = token0.derivedAVAX.times(bundle.avaxPrice);
  let price1 = token1.derivedAVAX.times(bundle.avaxPrice);

  // both are whitelist tokens, take average of both amounts
  if (WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
    return tokenAmount0
      .times(price0)
      .plus(tokenAmount1.times(price1))
      .div(BigDecimal.fromString('2'));
  }

  // take full value of the whitelisted token amount
  if (WHITELIST.includes(token0.id) && !WHITELIST.includes(token1.id)) {
    return tokenAmount0.times(price0);
  }

  // take full value of the whitelisted token amount
  if (!WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
    return tokenAmount1.times(price1);
  }

  // neither token is on white list, tracked volume is 0
  return ZERO_BD;
}

/**
 * Accepts tokens and amounts, return tracked amount based on token whitelist
 * If one token on whitelist, return amount in that token converted to USD * 2.
 * If both are, return sum of two amounts
 * If neither is, return 0
 */
export function getTrackedLiquidityUSD(
  bundle: Bundle,
  tokenAmount0: BigDecimal,
  token0: Token,
  tokenAmount1: BigDecimal,
  token1: Token
): BigDecimal {
  let price0 = token0.derivedAVAX.times(bundle.avaxPrice);
  let price1 = token1.derivedAVAX.times(bundle.avaxPrice);

  // both are whitelist tokens, take average of both amounts
  if (WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
    return tokenAmount0.times(price0).plus(tokenAmount1.times(price1));
  }

  // take double value of the whitelisted token amount
  if (WHITELIST.includes(token0.id) && !WHITELIST.includes(token1.id)) {
    return tokenAmount0.times(price0).times(BigDecimal.fromString('2'));
  }

  // take double value of the whitelisted token amount
  if (!WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
    return tokenAmount1.times(price1).times(BigDecimal.fromString('2'));
  }

  // neither token is on white list, tracked volume is 0
  return ZERO_BD;
}
