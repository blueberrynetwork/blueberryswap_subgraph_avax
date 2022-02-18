// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class BlueberryFactory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BlueberryFactory entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BlueberryFactory entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BlueberryFactory", id.toString(), this);
  }

  static load(id: string): BlueberryFactory | null {
    return store.get("BlueberryFactory", id) as BlueberryFactory | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalPairs(): BigInt {
    let value = this.get("totalPairs");
    return value.toBigInt();
  }

  set totalPairs(value: BigInt) {
    this.set("totalPairs", Value.fromBigInt(value));
  }

  get totalTransactions(): BigInt {
    let value = this.get("totalTransactions");
    return value.toBigInt();
  }

  set totalTransactions(value: BigInt) {
    this.set("totalTransactions", Value.fromBigInt(value));
  }

  get totalVolumeUSD(): BigDecimal {
    let value = this.get("totalVolumeUSD");
    return value.toBigDecimal();
  }

  set totalVolumeUSD(value: BigDecimal) {
    this.set("totalVolumeUSD", Value.fromBigDecimal(value));
  }

  get totalVolumeAVAX(): BigDecimal {
    let value = this.get("totalVolumeAVAX");
    return value.toBigDecimal();
  }

  set totalVolumeAVAX(value: BigDecimal) {
    this.set("totalVolumeAVAX", Value.fromBigDecimal(value));
  }

  get untrackedVolumeUSD(): BigDecimal {
    let value = this.get("untrackedVolumeUSD");
    return value.toBigDecimal();
  }

  set untrackedVolumeUSD(value: BigDecimal) {
    this.set("untrackedVolumeUSD", Value.fromBigDecimal(value));
  }

  get totalLiquidityUSD(): BigDecimal {
    let value = this.get("totalLiquidityUSD");
    return value.toBigDecimal();
  }

  set totalLiquidityUSD(value: BigDecimal) {
    this.set("totalLiquidityUSD", Value.fromBigDecimal(value));
  }

  get totalLiquidityAVAX(): BigDecimal {
    let value = this.get("totalLiquidityAVAX");
    return value.toBigDecimal();
  }

  set totalLiquidityAVAX(value: BigDecimal) {
    this.set("totalLiquidityAVAX", Value.fromBigDecimal(value));
  }
}

export class Bundle extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Bundle entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Bundle entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Bundle", id.toString(), this);
  }

  static load(id: string): Bundle | null {
    return store.get("Bundle", id) as Bundle | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get avaxPrice(): BigDecimal {
    let value = this.get("avaxPrice");
    return value.toBigDecimal();
  }

  set avaxPrice(value: BigDecimal) {
    this.set("avaxPrice", Value.fromBigDecimal(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get decimals(): BigInt {
    let value = this.get("decimals");
    return value.toBigInt();
  }

  set decimals(value: BigInt) {
    this.set("decimals", Value.fromBigInt(value));
  }

  get tradeVolume(): BigDecimal {
    let value = this.get("tradeVolume");
    return value.toBigDecimal();
  }

  set tradeVolume(value: BigDecimal) {
    this.set("tradeVolume", Value.fromBigDecimal(value));
  }

  get tradeVolumeUSD(): BigDecimal {
    let value = this.get("tradeVolumeUSD");
    return value.toBigDecimal();
  }

  set tradeVolumeUSD(value: BigDecimal) {
    this.set("tradeVolumeUSD", Value.fromBigDecimal(value));
  }

  get untrackedVolumeUSD(): BigDecimal {
    let value = this.get("untrackedVolumeUSD");
    return value.toBigDecimal();
  }

  set untrackedVolumeUSD(value: BigDecimal) {
    this.set("untrackedVolumeUSD", Value.fromBigDecimal(value));
  }

  get totalTransactions(): BigInt {
    let value = this.get("totalTransactions");
    return value.toBigInt();
  }

  set totalTransactions(value: BigInt) {
    this.set("totalTransactions", Value.fromBigInt(value));
  }

  get totalLiquidity(): BigDecimal {
    let value = this.get("totalLiquidity");
    return value.toBigDecimal();
  }

  set totalLiquidity(value: BigDecimal) {
    this.set("totalLiquidity", Value.fromBigDecimal(value));
  }

  get derivedAVAX(): BigDecimal | null {
    let value = this.get("derivedAVAX");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set derivedAVAX(value: BigDecimal | null) {
    if (value === null) {
      this.unset("derivedAVAX");
    } else {
      this.set("derivedAVAX", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get derivedUSD(): BigDecimal | null {
    let value = this.get("derivedUSD");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set derivedUSD(value: BigDecimal | null) {
    if (value === null) {
      this.unset("derivedUSD");
    } else {
      this.set("derivedUSD", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get tokenDayData(): Array<string> {
    let value = this.get("tokenDayData");
    return value.toStringArray();
  }

  set tokenDayData(value: Array<string>) {
    this.set("tokenDayData", Value.fromStringArray(value));
  }

  get pairDayDataBase(): Array<string> {
    let value = this.get("pairDayDataBase");
    return value.toStringArray();
  }

  set pairDayDataBase(value: Array<string>) {
    this.set("pairDayDataBase", Value.fromStringArray(value));
  }

  get pairDayDataQuote(): Array<string> {
    let value = this.get("pairDayDataQuote");
    return value.toStringArray();
  }

  set pairDayDataQuote(value: Array<string>) {
    this.set("pairDayDataQuote", Value.fromStringArray(value));
  }

  get pairBase(): Array<string> {
    let value = this.get("pairBase");
    return value.toStringArray();
  }

  set pairBase(value: Array<string>) {
    this.set("pairBase", Value.fromStringArray(value));
  }

  get pairQuote(): Array<string> {
    let value = this.get("pairQuote");
    return value.toStringArray();
  }

  set pairQuote(value: Array<string>) {
    this.set("pairQuote", Value.fromStringArray(value));
  }
}

export class Pair extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Pair entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Pair entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Pair", id.toString(), this);
  }

  static load(id: string): Pair | null {
    return store.get("Pair", id) as Pair | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get token0(): string {
    let value = this.get("token0");
    return value.toString();
  }

  set token0(value: string) {
    this.set("token0", Value.fromString(value));
  }

  get token1(): string {
    let value = this.get("token1");
    return value.toString();
  }

  set token1(value: string) {
    this.set("token1", Value.fromString(value));
  }

  get reserve0(): BigDecimal {
    let value = this.get("reserve0");
    return value.toBigDecimal();
  }

  set reserve0(value: BigDecimal) {
    this.set("reserve0", Value.fromBigDecimal(value));
  }

  get reserve1(): BigDecimal {
    let value = this.get("reserve1");
    return value.toBigDecimal();
  }

  set reserve1(value: BigDecimal) {
    this.set("reserve1", Value.fromBigDecimal(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }

  get reserveAVAX(): BigDecimal {
    let value = this.get("reserveAVAX");
    return value.toBigDecimal();
  }

  set reserveAVAX(value: BigDecimal) {
    this.set("reserveAVAX", Value.fromBigDecimal(value));
  }

  get reserveUSD(): BigDecimal {
    let value = this.get("reserveUSD");
    return value.toBigDecimal();
  }

  set reserveUSD(value: BigDecimal) {
    this.set("reserveUSD", Value.fromBigDecimal(value));
  }

  get trackedReserveAVAX(): BigDecimal {
    let value = this.get("trackedReserveAVAX");
    return value.toBigDecimal();
  }

  set trackedReserveAVAX(value: BigDecimal) {
    this.set("trackedReserveAVAX", Value.fromBigDecimal(value));
  }

  get token0Price(): BigDecimal {
    let value = this.get("token0Price");
    return value.toBigDecimal();
  }

  set token0Price(value: BigDecimal) {
    this.set("token0Price", Value.fromBigDecimal(value));
  }

  get token1Price(): BigDecimal {
    let value = this.get("token1Price");
    return value.toBigDecimal();
  }

  set token1Price(value: BigDecimal) {
    this.set("token1Price", Value.fromBigDecimal(value));
  }

  get volumeToken0(): BigDecimal {
    let value = this.get("volumeToken0");
    return value.toBigDecimal();
  }

  set volumeToken0(value: BigDecimal) {
    this.set("volumeToken0", Value.fromBigDecimal(value));
  }

  get volumeToken1(): BigDecimal {
    let value = this.get("volumeToken1");
    return value.toBigDecimal();
  }

  set volumeToken1(value: BigDecimal) {
    this.set("volumeToken1", Value.fromBigDecimal(value));
  }

  get volumeUSD(): BigDecimal {
    let value = this.get("volumeUSD");
    return value.toBigDecimal();
  }

  set volumeUSD(value: BigDecimal) {
    this.set("volumeUSD", Value.fromBigDecimal(value));
  }

  get untrackedVolumeUSD(): BigDecimal {
    let value = this.get("untrackedVolumeUSD");
    return value.toBigDecimal();
  }

  set untrackedVolumeUSD(value: BigDecimal) {
    this.set("untrackedVolumeUSD", Value.fromBigDecimal(value));
  }

  get totalTransactions(): BigInt {
    let value = this.get("totalTransactions");
    return value.toBigInt();
  }

  set totalTransactions(value: BigInt) {
    this.set("totalTransactions", Value.fromBigInt(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get pairHourData(): Array<string> {
    let value = this.get("pairHourData");
    return value.toStringArray();
  }

  set pairHourData(value: Array<string>) {
    this.set("pairHourData", Value.fromStringArray(value));
  }

  get mints(): Array<string> {
    let value = this.get("mints");
    return value.toStringArray();
  }

  set mints(value: Array<string>) {
    this.set("mints", Value.fromStringArray(value));
  }

  get burns(): Array<string> {
    let value = this.get("burns");
    return value.toStringArray();
  }

  set burns(value: Array<string>) {
    this.set("burns", Value.fromStringArray(value));
  }

  get swaps(): Array<string> {
    let value = this.get("swaps");
    return value.toStringArray();
  }

  set swaps(value: Array<string>) {
    this.set("swaps", Value.fromStringArray(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transaction", id.toString(), this);
  }

  static load(id: string): Transaction | null {
    return store.get("Transaction", id) as Transaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get mints(): Array<string | null> {
    let value = this.get("mints");
    return value.toStringArray();
  }

  set mints(value: Array<string | null>) {
    this.set("mints", Value.fromStringArray(value));
  }

  get burns(): Array<string | null> {
    let value = this.get("burns");
    return value.toStringArray();
  }

  set burns(value: Array<string | null>) {
    this.set("burns", Value.fromStringArray(value));
  }

  get swaps(): Array<string | null> {
    let value = this.get("swaps");
    return value.toStringArray();
  }

  set swaps(value: Array<string | null>) {
    this.set("swaps", Value.fromStringArray(value));
  }
}

export class Mint extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Mint entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Mint entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Mint", id.toString(), this);
  }

  static load(id: string): Mint | null {
    return store.get("Mint", id) as Mint | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get pair(): string {
    let value = this.get("pair");
    return value.toString();
  }

  set pair(value: string) {
    this.set("pair", Value.fromString(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get liquidity(): BigDecimal {
    let value = this.get("liquidity");
    return value.toBigDecimal();
  }

  set liquidity(value: BigDecimal) {
    this.set("liquidity", Value.fromBigDecimal(value));
  }

  get sender(): Bytes | null {
    let value = this.get("sender");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set sender(value: Bytes | null) {
    if (value === null) {
      this.unset("sender");
    } else {
      this.set("sender", Value.fromBytes(value as Bytes));
    }
  }

  get amount0(): BigDecimal | null {
    let value = this.get("amount0");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set amount0(value: BigDecimal | null) {
    if (value === null) {
      this.unset("amount0");
    } else {
      this.set("amount0", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get amount1(): BigDecimal | null {
    let value = this.get("amount1");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set amount1(value: BigDecimal | null) {
    if (value === null) {
      this.unset("amount1");
    } else {
      this.set("amount1", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get logIndex(): BigInt | null {
    let value = this.get("logIndex");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set logIndex(value: BigInt | null) {
    if (value === null) {
      this.unset("logIndex");
    } else {
      this.set("logIndex", Value.fromBigInt(value as BigInt));
    }
  }

  get amountUSD(): BigDecimal | null {
    let value = this.get("amountUSD");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set amountUSD(value: BigDecimal | null) {
    if (value === null) {
      this.unset("amountUSD");
    } else {
      this.set("amountUSD", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get feeTo(): Bytes | null {
    let value = this.get("feeTo");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set feeTo(value: Bytes | null) {
    if (value === null) {
      this.unset("feeTo");
    } else {
      this.set("feeTo", Value.fromBytes(value as Bytes));
    }
  }

  get feeLiquidity(): BigDecimal | null {
    let value = this.get("feeLiquidity");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set feeLiquidity(value: BigDecimal | null) {
    if (value === null) {
      this.unset("feeLiquidity");
    } else {
      this.set("feeLiquidity", Value.fromBigDecimal(value as BigDecimal));
    }
  }
}

export class Burn extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Burn entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Burn entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Burn", id.toString(), this);
  }

  static load(id: string): Burn | null {
    return store.get("Burn", id) as Burn | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get pair(): string {
    let value = this.get("pair");
    return value.toString();
  }

  set pair(value: string) {
    this.set("pair", Value.fromString(value));
  }

  get liquidity(): BigDecimal {
    let value = this.get("liquidity");
    return value.toBigDecimal();
  }

  set liquidity(value: BigDecimal) {
    this.set("liquidity", Value.fromBigDecimal(value));
  }

  get sender(): Bytes | null {
    let value = this.get("sender");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set sender(value: Bytes | null) {
    if (value === null) {
      this.unset("sender");
    } else {
      this.set("sender", Value.fromBytes(value as Bytes));
    }
  }

  get amount0(): BigDecimal | null {
    let value = this.get("amount0");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set amount0(value: BigDecimal | null) {
    if (value === null) {
      this.unset("amount0");
    } else {
      this.set("amount0", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get amount1(): BigDecimal | null {
    let value = this.get("amount1");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set amount1(value: BigDecimal | null) {
    if (value === null) {
      this.unset("amount1");
    } else {
      this.set("amount1", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get to(): Bytes | null {
    let value = this.get("to");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set to(value: Bytes | null) {
    if (value === null) {
      this.unset("to");
    } else {
      this.set("to", Value.fromBytes(value as Bytes));
    }
  }

  get logIndex(): BigInt | null {
    let value = this.get("logIndex");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set logIndex(value: BigInt | null) {
    if (value === null) {
      this.unset("logIndex");
    } else {
      this.set("logIndex", Value.fromBigInt(value as BigInt));
    }
  }

  get amountUSD(): BigDecimal | null {
    let value = this.get("amountUSD");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set amountUSD(value: BigDecimal | null) {
    if (value === null) {
      this.unset("amountUSD");
    } else {
      this.set("amountUSD", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get needsComplete(): boolean {
    let value = this.get("needsComplete");
    return value.toBoolean();
  }

  set needsComplete(value: boolean) {
    this.set("needsComplete", Value.fromBoolean(value));
  }

  get feeTo(): Bytes | null {
    let value = this.get("feeTo");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set feeTo(value: Bytes | null) {
    if (value === null) {
      this.unset("feeTo");
    } else {
      this.set("feeTo", Value.fromBytes(value as Bytes));
    }
  }

  get feeLiquidity(): BigDecimal | null {
    let value = this.get("feeLiquidity");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set feeLiquidity(value: BigDecimal | null) {
    if (value === null) {
      this.unset("feeLiquidity");
    } else {
      this.set("feeLiquidity", Value.fromBigDecimal(value as BigDecimal));
    }
  }
}

export class Swap extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Swap entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Swap entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Swap", id.toString(), this);
  }

  static load(id: string): Swap | null {
    return store.get("Swap", id) as Swap | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get pair(): string {
    let value = this.get("pair");
    return value.toString();
  }

  set pair(value: string) {
    this.set("pair", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get amount0In(): BigDecimal {
    let value = this.get("amount0In");
    return value.toBigDecimal();
  }

  set amount0In(value: BigDecimal) {
    this.set("amount0In", Value.fromBigDecimal(value));
  }

  get amount1In(): BigDecimal {
    let value = this.get("amount1In");
    return value.toBigDecimal();
  }

  set amount1In(value: BigDecimal) {
    this.set("amount1In", Value.fromBigDecimal(value));
  }

  get amount0Out(): BigDecimal {
    let value = this.get("amount0Out");
    return value.toBigDecimal();
  }

  set amount0Out(value: BigDecimal) {
    this.set("amount0Out", Value.fromBigDecimal(value));
  }

  get amount1Out(): BigDecimal {
    let value = this.get("amount1Out");
    return value.toBigDecimal();
  }

  set amount1Out(value: BigDecimal) {
    this.set("amount1Out", Value.fromBigDecimal(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get logIndex(): BigInt | null {
    let value = this.get("logIndex");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set logIndex(value: BigInt | null) {
    if (value === null) {
      this.unset("logIndex");
    } else {
      this.set("logIndex", Value.fromBigInt(value as BigInt));
    }
  }

  get amountUSD(): BigDecimal {
    let value = this.get("amountUSD");
    return value.toBigDecimal();
  }

  set amountUSD(value: BigDecimal) {
    this.set("amountUSD", Value.fromBigDecimal(value));
  }
}

export class BlueberryDayData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BlueberryDayData entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BlueberryDayData entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BlueberryDayData", id.toString(), this);
  }

  static load(id: string): BlueberryDayData | null {
    return store.get("BlueberryDayData", id) as BlueberryDayData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get dailyVolumeAVAX(): BigDecimal {
    let value = this.get("dailyVolumeAVAX");
    return value.toBigDecimal();
  }

  set dailyVolumeAVAX(value: BigDecimal) {
    this.set("dailyVolumeAVAX", Value.fromBigDecimal(value));
  }

  get dailyVolumeUSD(): BigDecimal {
    let value = this.get("dailyVolumeUSD");
    return value.toBigDecimal();
  }

  set dailyVolumeUSD(value: BigDecimal) {
    this.set("dailyVolumeUSD", Value.fromBigDecimal(value));
  }

  get dailyVolumeUntracked(): BigDecimal {
    let value = this.get("dailyVolumeUntracked");
    return value.toBigDecimal();
  }

  set dailyVolumeUntracked(value: BigDecimal) {
    this.set("dailyVolumeUntracked", Value.fromBigDecimal(value));
  }

  get totalVolumeAVAX(): BigDecimal {
    let value = this.get("totalVolumeAVAX");
    return value.toBigDecimal();
  }

  set totalVolumeAVAX(value: BigDecimal) {
    this.set("totalVolumeAVAX", Value.fromBigDecimal(value));
  }

  get totalLiquidityAVAX(): BigDecimal {
    let value = this.get("totalLiquidityAVAX");
    return value.toBigDecimal();
  }

  set totalLiquidityAVAX(value: BigDecimal) {
    this.set("totalLiquidityAVAX", Value.fromBigDecimal(value));
  }

  get totalVolumeUSD(): BigDecimal {
    let value = this.get("totalVolumeUSD");
    return value.toBigDecimal();
  }

  set totalVolumeUSD(value: BigDecimal) {
    this.set("totalVolumeUSD", Value.fromBigDecimal(value));
  }

  get totalLiquidityUSD(): BigDecimal {
    let value = this.get("totalLiquidityUSD");
    return value.toBigDecimal();
  }

  set totalLiquidityUSD(value: BigDecimal) {
    this.set("totalLiquidityUSD", Value.fromBigDecimal(value));
  }

  get totalTransactions(): BigInt {
    let value = this.get("totalTransactions");
    return value.toBigInt();
  }

  set totalTransactions(value: BigInt) {
    this.set("totalTransactions", Value.fromBigInt(value));
  }
}

export class PairHourData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PairHourData entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PairHourData entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PairHourData", id.toString(), this);
  }

  static load(id: string): PairHourData | null {
    return store.get("PairHourData", id) as PairHourData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get hourStartUnix(): i32 {
    let value = this.get("hourStartUnix");
    return value.toI32();
  }

  set hourStartUnix(value: i32) {
    this.set("hourStartUnix", Value.fromI32(value));
  }

  get pair(): string {
    let value = this.get("pair");
    return value.toString();
  }

  set pair(value: string) {
    this.set("pair", Value.fromString(value));
  }

  get reserve0(): BigDecimal {
    let value = this.get("reserve0");
    return value.toBigDecimal();
  }

  set reserve0(value: BigDecimal) {
    this.set("reserve0", Value.fromBigDecimal(value));
  }

  get reserve1(): BigDecimal {
    let value = this.get("reserve1");
    return value.toBigDecimal();
  }

  set reserve1(value: BigDecimal) {
    this.set("reserve1", Value.fromBigDecimal(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }

  get reserveUSD(): BigDecimal {
    let value = this.get("reserveUSD");
    return value.toBigDecimal();
  }

  set reserveUSD(value: BigDecimal) {
    this.set("reserveUSD", Value.fromBigDecimal(value));
  }

  get hourlyVolumeToken0(): BigDecimal {
    let value = this.get("hourlyVolumeToken0");
    return value.toBigDecimal();
  }

  set hourlyVolumeToken0(value: BigDecimal) {
    this.set("hourlyVolumeToken0", Value.fromBigDecimal(value));
  }

  get hourlyVolumeToken1(): BigDecimal {
    let value = this.get("hourlyVolumeToken1");
    return value.toBigDecimal();
  }

  set hourlyVolumeToken1(value: BigDecimal) {
    this.set("hourlyVolumeToken1", Value.fromBigDecimal(value));
  }

  get hourlyVolumeUSD(): BigDecimal {
    let value = this.get("hourlyVolumeUSD");
    return value.toBigDecimal();
  }

  set hourlyVolumeUSD(value: BigDecimal) {
    this.set("hourlyVolumeUSD", Value.fromBigDecimal(value));
  }

  get hourlyTxns(): BigInt {
    let value = this.get("hourlyTxns");
    return value.toBigInt();
  }

  set hourlyTxns(value: BigInt) {
    this.set("hourlyTxns", Value.fromBigInt(value));
  }
}

export class PairDayData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PairDayData entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PairDayData entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PairDayData", id.toString(), this);
  }

  static load(id: string): PairDayData | null {
    return store.get("PairDayData", id) as PairDayData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get pairAddress(): Bytes {
    let value = this.get("pairAddress");
    return value.toBytes();
  }

  set pairAddress(value: Bytes) {
    this.set("pairAddress", Value.fromBytes(value));
  }

  get token0(): string {
    let value = this.get("token0");
    return value.toString();
  }

  set token0(value: string) {
    this.set("token0", Value.fromString(value));
  }

  get token1(): string {
    let value = this.get("token1");
    return value.toString();
  }

  set token1(value: string) {
    this.set("token1", Value.fromString(value));
  }

  get reserve0(): BigDecimal {
    let value = this.get("reserve0");
    return value.toBigDecimal();
  }

  set reserve0(value: BigDecimal) {
    this.set("reserve0", Value.fromBigDecimal(value));
  }

  get reserve1(): BigDecimal {
    let value = this.get("reserve1");
    return value.toBigDecimal();
  }

  set reserve1(value: BigDecimal) {
    this.set("reserve1", Value.fromBigDecimal(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }

  get reserveUSD(): BigDecimal {
    let value = this.get("reserveUSD");
    return value.toBigDecimal();
  }

  set reserveUSD(value: BigDecimal) {
    this.set("reserveUSD", Value.fromBigDecimal(value));
  }

  get dailyVolumeToken0(): BigDecimal {
    let value = this.get("dailyVolumeToken0");
    return value.toBigDecimal();
  }

  set dailyVolumeToken0(value: BigDecimal) {
    this.set("dailyVolumeToken0", Value.fromBigDecimal(value));
  }

  get dailyVolumeToken1(): BigDecimal {
    let value = this.get("dailyVolumeToken1");
    return value.toBigDecimal();
  }

  set dailyVolumeToken1(value: BigDecimal) {
    this.set("dailyVolumeToken1", Value.fromBigDecimal(value));
  }

  get dailyVolumeUSD(): BigDecimal {
    let value = this.get("dailyVolumeUSD");
    return value.toBigDecimal();
  }

  set dailyVolumeUSD(value: BigDecimal) {
    this.set("dailyVolumeUSD", Value.fromBigDecimal(value));
  }

  get dailyTxns(): BigInt {
    let value = this.get("dailyTxns");
    return value.toBigInt();
  }

  set dailyTxns(value: BigInt) {
    this.set("dailyTxns", Value.fromBigInt(value));
  }
}

export class TokenDayData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenDayData entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenDayData entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenDayData", id.toString(), this);
  }

  static load(id: string): TokenDayData | null {
    return store.get("TokenDayData", id) as TokenDayData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get dailyVolumeToken(): BigDecimal {
    let value = this.get("dailyVolumeToken");
    return value.toBigDecimal();
  }

  set dailyVolumeToken(value: BigDecimal) {
    this.set("dailyVolumeToken", Value.fromBigDecimal(value));
  }

  get dailyVolumeAVAX(): BigDecimal {
    let value = this.get("dailyVolumeAVAX");
    return value.toBigDecimal();
  }

  set dailyVolumeAVAX(value: BigDecimal) {
    this.set("dailyVolumeAVAX", Value.fromBigDecimal(value));
  }

  get dailyVolumeUSD(): BigDecimal {
    let value = this.get("dailyVolumeUSD");
    return value.toBigDecimal();
  }

  set dailyVolumeUSD(value: BigDecimal) {
    this.set("dailyVolumeUSD", Value.fromBigDecimal(value));
  }

  get dailyTxns(): BigInt {
    let value = this.get("dailyTxns");
    return value.toBigInt();
  }

  set dailyTxns(value: BigInt) {
    this.set("dailyTxns", Value.fromBigInt(value));
  }

  get totalLiquidityToken(): BigDecimal {
    let value = this.get("totalLiquidityToken");
    return value.toBigDecimal();
  }

  set totalLiquidityToken(value: BigDecimal) {
    this.set("totalLiquidityToken", Value.fromBigDecimal(value));
  }

  get totalLiquidityAVAX(): BigDecimal {
    let value = this.get("totalLiquidityAVAX");
    return value.toBigDecimal();
  }

  set totalLiquidityAVAX(value: BigDecimal) {
    this.set("totalLiquidityAVAX", Value.fromBigDecimal(value));
  }

  get totalLiquidityUSD(): BigDecimal {
    let value = this.get("totalLiquidityUSD");
    return value.toBigDecimal();
  }

  set totalLiquidityUSD(value: BigDecimal) {
    this.set("totalLiquidityUSD", Value.fromBigDecimal(value));
  }

  get priceUSD(): BigDecimal {
    let value = this.get("priceUSD");
    return value.toBigDecimal();
  }

  set priceUSD(value: BigDecimal) {
    this.set("priceUSD", Value.fromBigDecimal(value));
  }
}