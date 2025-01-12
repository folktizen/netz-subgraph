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

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewOwner extends ethereum.Event {
  get params(): NewOwner__Params {
    return new NewOwner__Params(this);
  }
}

export class NewOwner__Params {
  _event: NewOwner;

  constructor(event: NewOwner) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get label(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class NewResolver extends ethereum.Event {
  get params(): NewResolver__Params {
    return new NewResolver__Params(this);
  }
}

export class NewResolver__Params {
  _event: NewResolver;

  constructor(event: NewResolver) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get resolver(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewTTL extends ethereum.Event {
  get params(): NewTTL__Params {
    return new NewTTL__Params(this);
  }
}

export class NewTTL__Params {
  _event: NewTTL;

  constructor(event: NewTTL) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get ttl(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class EnsRegistry extends ethereum.SmartContract {
  static bind(address: Address): EnsRegistry {
    return new EnsRegistry("EnsRegistry", address);
  }

  resolver(node: Bytes): Address {
    let result = super.call("resolver", "resolver(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(node),
    ]);

    return result[0].toAddress();
  }

  try_resolver(node: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall("resolver", "resolver(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(node),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(node: Bytes): Address {
    let result = super.call("owner", "owner(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(node),
    ]);

    return result[0].toAddress();
  }

  try_owner(node: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(node),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ttl(node: Bytes): BigInt {
    let result = super.call("ttl", "ttl(bytes32):(uint64)", [
      ethereum.Value.fromFixedBytes(node),
    ]);

    return result[0].toBigInt();
  }

  try_ttl(node: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ttl", "ttl(bytes32):(uint64)", [
      ethereum.Value.fromFixedBytes(node),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class SetSubnodeOwnerCall extends ethereum.Call {
  get inputs(): SetSubnodeOwnerCall__Inputs {
    return new SetSubnodeOwnerCall__Inputs(this);
  }

  get outputs(): SetSubnodeOwnerCall__Outputs {
    return new SetSubnodeOwnerCall__Outputs(this);
  }
}

export class SetSubnodeOwnerCall__Inputs {
  _call: SetSubnodeOwnerCall;

  constructor(call: SetSubnodeOwnerCall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get label(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get owner(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class SetSubnodeOwnerCall__Outputs {
  _call: SetSubnodeOwnerCall;

  constructor(call: SetSubnodeOwnerCall) {
    this._call = call;
  }
}

export class SetTTLCall extends ethereum.Call {
  get inputs(): SetTTLCall__Inputs {
    return new SetTTLCall__Inputs(this);
  }

  get outputs(): SetTTLCall__Outputs {
    return new SetTTLCall__Outputs(this);
  }
}

export class SetTTLCall__Inputs {
  _call: SetTTLCall;

  constructor(call: SetTTLCall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get ttl(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetTTLCall__Outputs {
  _call: SetTTLCall;

  constructor(call: SetTTLCall) {
    this._call = call;
  }
}

export class SetResolverCall extends ethereum.Call {
  get inputs(): SetResolverCall__Inputs {
    return new SetResolverCall__Inputs(this);
  }

  get outputs(): SetResolverCall__Outputs {
    return new SetResolverCall__Outputs(this);
  }
}

export class SetResolverCall__Inputs {
  _call: SetResolverCall;

  constructor(call: SetResolverCall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get resolver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetResolverCall__Outputs {
  _call: SetResolverCall;

  constructor(call: SetResolverCall) {
    this._call = call;
  }
}

export class SetOwnerCall extends ethereum.Call {
  get inputs(): SetOwnerCall__Inputs {
    return new SetOwnerCall__Inputs(this);
  }

  get outputs(): SetOwnerCall__Outputs {
    return new SetOwnerCall__Outputs(this);
  }
}

export class SetOwnerCall__Inputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get owner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetOwnerCall__Outputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }
}
