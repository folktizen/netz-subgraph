// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class AuthorisationChanged extends ethereum.Event {
  get params(): AuthorisationChanged__Params {
    return new AuthorisationChanged__Params(this);
  }
}

export class AuthorisationChanged__Params {
  _event: AuthorisationChanged;

  constructor(event: AuthorisationChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get target(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get isAuthorised(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }
}

export class TextChanged extends ethereum.Event {
  get params(): TextChanged__Params {
    return new TextChanged__Params(this);
  }
}

export class TextChanged__Params {
  _event: TextChanged;

  constructor(event: TextChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get indexedKey(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get key(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class TextChanged1 extends ethereum.Event {
  get params(): TextChanged1__Params {
    return new TextChanged1__Params(this);
  }
}

export class TextChanged1__Params {
  _event: TextChanged1;

  constructor(event: TextChanged1) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get indexedKey(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get key(): string {
    return this._event.parameters[2].value.toString();
  }

  get value(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class PubkeyChanged extends ethereum.Event {
  get params(): PubkeyChanged__Params {
    return new PubkeyChanged__Params(this);
  }
}

export class PubkeyChanged__Params {
  _event: PubkeyChanged;

  constructor(event: PubkeyChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get x(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get y(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class NameChanged extends ethereum.Event {
  get params(): NameChanged__Params {
    return new NameChanged__Params(this);
  }
}

export class NameChanged__Params {
  _event: NameChanged;

  constructor(event: NameChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class InterfaceChanged extends ethereum.Event {
  get params(): InterfaceChanged__Params {
    return new InterfaceChanged__Params(this);
  }
}

export class InterfaceChanged__Params {
  _event: InterfaceChanged;

  constructor(event: InterfaceChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get interfaceID(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get implementer(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class ContenthashChanged extends ethereum.Event {
  get params(): ContenthashChanged__Params {
    return new ContenthashChanged__Params(this);
  }
}

export class ContenthashChanged__Params {
  _event: ContenthashChanged;

  constructor(event: ContenthashChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get hash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class AddrChanged extends ethereum.Event {
  get params(): AddrChanged__Params {
    return new AddrChanged__Params(this);
  }
}

export class AddrChanged__Params {
  _event: AddrChanged;

  constructor(event: AddrChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get a(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AddressChanged extends ethereum.Event {
  get params(): AddressChanged__Params {
    return new AddressChanged__Params(this);
  }
}

export class AddressChanged__Params {
  _event: AddressChanged;

  constructor(event: AddressChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get coinType(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newAddress(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class ABIChanged extends ethereum.Event {
  get params(): ABIChanged__Params {
    return new ABIChanged__Params(this);
  }
}

export class ABIChanged__Params {
  _event: ABIChanged;

  constructor(event: ABIChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get contentType(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class VersionChanged extends ethereum.Event {
  get params(): VersionChanged__Params {
    return new VersionChanged__Params(this);
  }
}

export class VersionChanged__Params {
  _event: VersionChanged;

  constructor(event: VersionChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get newVersion(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Resolver__ABIResult {
  value0: BigInt;
  value1: Bytes;

  constructor(value0: BigInt, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): Bytes {
    return this.value1;
  }
}

export class Resolver__pubkeyResult {
  value0: Bytes;
  value1: Bytes;

  constructor(value0: Bytes, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    return map;
  }

  getX(): Bytes {
    return this.value0;
  }

  getY(): Bytes {
    return this.value1;
  }
}

export class Resolver extends ethereum.SmartContract {
  static bind(address: Address): Resolver {
    return new Resolver("Resolver", address);
  }

  supportsInterface(interfaceID: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceID)],
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceID: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceID)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  interfaceImplementer(node: Bytes, interfaceID: Bytes): Address {
    let result = super.call(
      "interfaceImplementer",
      "interfaceImplementer(bytes32,bytes4):(address)",
      [
        ethereum.Value.fromFixedBytes(node),
        ethereum.Value.fromFixedBytes(interfaceID),
      ],
    );

    return result[0].toAddress();
  }

  try_interfaceImplementer(
    node: Bytes,
    interfaceID: Bytes,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "interfaceImplementer",
      "interfaceImplementer(bytes32,bytes4):(address)",
      [
        ethereum.Value.fromFixedBytes(node),
        ethereum.Value.fromFixedBytes(interfaceID),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ABI(node: Bytes, contentTypes: BigInt): Resolver__ABIResult {
    let result = super.call("ABI", "ABI(bytes32,uint256):(uint256,bytes)", [
      ethereum.Value.fromFixedBytes(node),
      ethereum.Value.fromUnsignedBigInt(contentTypes),
    ]);

    return new Resolver__ABIResult(result[0].toBigInt(), result[1].toBytes());
  }

  try_ABI(
    node: Bytes,
    contentTypes: BigInt,
  ): ethereum.CallResult<Resolver__ABIResult> {
    let result = super.tryCall("ABI", "ABI(bytes32,uint256):(uint256,bytes)", [
      ethereum.Value.fromFixedBytes(node),
      ethereum.Value.fromUnsignedBigInt(contentTypes),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Resolver__ABIResult(value[0].toBigInt(), value[1].toBytes()),
    );
  }

  addr(node: Bytes): Address {
    let result = super.call("addr", "addr(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(node),
    ]);

    return result[0].toAddress();
  }

  try_addr(node: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall("addr", "addr(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(node),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  text(node: Bytes, key: string): string {
    let result = super.call("text", "text(bytes32,string):(string)", [
      ethereum.Value.fromFixedBytes(node),
      ethereum.Value.fromString(key),
    ]);

    return result[0].toString();
  }

  try_text(node: Bytes, key: string): ethereum.CallResult<string> {
    let result = super.tryCall("text", "text(bytes32,string):(string)", [
      ethereum.Value.fromFixedBytes(node),
      ethereum.Value.fromString(key),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  name(node: Bytes): string {
    let result = super.call("name", "name(bytes32):(string)", [
      ethereum.Value.fromFixedBytes(node),
    ]);

    return result[0].toString();
  }

  try_name(node: Bytes): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name(bytes32):(string)", [
      ethereum.Value.fromFixedBytes(node),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  contenthash(node: Bytes): Bytes {
    let result = super.call("contenthash", "contenthash(bytes32):(bytes)", [
      ethereum.Value.fromFixedBytes(node),
    ]);

    return result[0].toBytes();
  }

  try_contenthash(node: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall("contenthash", "contenthash(bytes32):(bytes)", [
      ethereum.Value.fromFixedBytes(node),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  pubkey(node: Bytes): Resolver__pubkeyResult {
    let result = super.call("pubkey", "pubkey(bytes32):(bytes32,bytes32)", [
      ethereum.Value.fromFixedBytes(node),
    ]);

    return new Resolver__pubkeyResult(result[0].toBytes(), result[1].toBytes());
  }

  try_pubkey(node: Bytes): ethereum.CallResult<Resolver__pubkeyResult> {
    let result = super.tryCall("pubkey", "pubkey(bytes32):(bytes32,bytes32)", [
      ethereum.Value.fromFixedBytes(node),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Resolver__pubkeyResult(value[0].toBytes(), value[1].toBytes()),
    );
  }

  addr1(node: Bytes, coinType: BigInt): Bytes {
    let result = super.call("addr", "addr(bytes32,uint256):(bytes)", [
      ethereum.Value.fromFixedBytes(node),
      ethereum.Value.fromUnsignedBigInt(coinType),
    ]);

    return result[0].toBytes();
  }

  try_addr1(node: Bytes, coinType: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall("addr", "addr(bytes32,uint256):(bytes)", [
      ethereum.Value.fromFixedBytes(node),
      ethereum.Value.fromUnsignedBigInt(coinType),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  authorisations(param0: Bytes, param1: Address, param2: Address): boolean {
    let result = super.call(
      "authorisations",
      "authorisations(bytes32,address,address):(bool)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromAddress(param2),
      ],
    );

    return result[0].toBoolean();
  }

  try_authorisations(
    param0: Bytes,
    param1: Address,
    param2: Address,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "authorisations",
      "authorisations(bytes32,address,address):(bool)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromAddress(param2),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class SetTextCall extends ethereum.Call {
  get inputs(): SetTextCall__Inputs {
    return new SetTextCall__Inputs(this);
  }

  get outputs(): SetTextCall__Outputs {
    return new SetTextCall__Outputs(this);
  }
}

export class SetTextCall__Inputs {
  _call: SetTextCall;

  constructor(call: SetTextCall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get key(): string {
    return this._call.inputValues[1].value.toString();
  }

  get value(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class SetTextCall__Outputs {
  _call: SetTextCall;

  constructor(call: SetTextCall) {
    this._call = call;
  }
}

export class SetPubkeyCall extends ethereum.Call {
  get inputs(): SetPubkeyCall__Inputs {
    return new SetPubkeyCall__Inputs(this);
  }

  get outputs(): SetPubkeyCall__Outputs {
    return new SetPubkeyCall__Outputs(this);
  }
}

export class SetPubkeyCall__Inputs {
  _call: SetPubkeyCall;

  constructor(call: SetPubkeyCall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get x(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get y(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SetPubkeyCall__Outputs {
  _call: SetPubkeyCall;

  constructor(call: SetPubkeyCall) {
    this._call = call;
  }
}

export class SetContenthashCall extends ethereum.Call {
  get inputs(): SetContenthashCall__Inputs {
    return new SetContenthashCall__Inputs(this);
  }

  get outputs(): SetContenthashCall__Outputs {
    return new SetContenthashCall__Outputs(this);
  }
}

export class SetContenthashCall__Inputs {
  _call: SetContenthashCall;

  constructor(call: SetContenthashCall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get hash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class SetContenthashCall__Outputs {
  _call: SetContenthashCall;

  constructor(call: SetContenthashCall) {
    this._call = call;
  }
}

export class SetAuthorisationCall extends ethereum.Call {
  get inputs(): SetAuthorisationCall__Inputs {
    return new SetAuthorisationCall__Inputs(this);
  }

  get outputs(): SetAuthorisationCall__Outputs {
    return new SetAuthorisationCall__Outputs(this);
  }
}

export class SetAuthorisationCall__Inputs {
  _call: SetAuthorisationCall;

  constructor(call: SetAuthorisationCall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get target(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get isAuthorised(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class SetAuthorisationCall__Outputs {
  _call: SetAuthorisationCall;

  constructor(call: SetAuthorisationCall) {
    this._call = call;
  }
}

export class SetABICall extends ethereum.Call {
  get inputs(): SetABICall__Inputs {
    return new SetABICall__Inputs(this);
  }

  get outputs(): SetABICall__Outputs {
    return new SetABICall__Outputs(this);
  }
}

export class SetABICall__Inputs {
  _call: SetABICall;

  constructor(call: SetABICall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get contentType(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SetABICall__Outputs {
  _call: SetABICall;

  constructor(call: SetABICall) {
    this._call = call;
  }
}

export class SetNameCall extends ethereum.Call {
  get inputs(): SetNameCall__Inputs {
    return new SetNameCall__Inputs(this);
  }

  get outputs(): SetNameCall__Outputs {
    return new SetNameCall__Outputs(this);
  }
}

export class SetNameCall__Inputs {
  _call: SetNameCall;

  constructor(call: SetNameCall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get name(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SetNameCall__Outputs {
  _call: SetNameCall;

  constructor(call: SetNameCall) {
    this._call = call;
  }
}

export class SetAddrCall extends ethereum.Call {
  get inputs(): SetAddrCall__Inputs {
    return new SetAddrCall__Inputs(this);
  }

  get outputs(): SetAddrCall__Outputs {
    return new SetAddrCall__Outputs(this);
  }
}

export class SetAddrCall__Inputs {
  _call: SetAddrCall;

  constructor(call: SetAddrCall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get coinType(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get a(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SetAddrCall__Outputs {
  _call: SetAddrCall;

  constructor(call: SetAddrCall) {
    this._call = call;
  }
}

export class SetAddr1Call extends ethereum.Call {
  get inputs(): SetAddr1Call__Inputs {
    return new SetAddr1Call__Inputs(this);
  }

  get outputs(): SetAddr1Call__Outputs {
    return new SetAddr1Call__Outputs(this);
  }
}

export class SetAddr1Call__Inputs {
  _call: SetAddr1Call;

  constructor(call: SetAddr1Call) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get a(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetAddr1Call__Outputs {
  _call: SetAddr1Call;

  constructor(call: SetAddr1Call) {
    this._call = call;
  }
}

export class SetInterfaceCall extends ethereum.Call {
  get inputs(): SetInterfaceCall__Inputs {
    return new SetInterfaceCall__Inputs(this);
  }

  get outputs(): SetInterfaceCall__Outputs {
    return new SetInterfaceCall__Outputs(this);
  }
}

export class SetInterfaceCall__Inputs {
  _call: SetInterfaceCall;

  constructor(call: SetInterfaceCall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get interfaceID(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get implementer(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class SetInterfaceCall__Outputs {
  _call: SetInterfaceCall;

  constructor(call: SetInterfaceCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _ens(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
