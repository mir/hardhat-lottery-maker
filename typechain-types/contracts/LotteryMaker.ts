/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface LotteryMakerInterface extends utils.Interface {
  functions: {
    "calculateWinner(uint256)": FunctionFragment;
    "changeCreatorFee(uint256)": FunctionFragment;
    "createLottery(uint256)": FunctionFragment;
    "creatorFee()": FunctionFragment;
    "enterLottery(uint256)": FunctionFragment;
    "lotteryIDBalanceMapping(uint256)": FunctionFragment;
    "lotteryIDDurationMapping(uint256)": FunctionFragment;
    "lotteryIDEntrancesMapping(uint256,uint256)": FunctionFragment;
    "lotteryIDFeeMapping(uint256)": FunctionFragment;
    "lotteryIDStateMapping(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerLotteryIDMapping(address)": FunctionFragment;
    "rawFulfillRandomWords(uint256,uint256[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requestIDLotteryIDMapping(uint256)": FunctionFragment;
    "stopEntrance(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "calculateWinner"
      | "changeCreatorFee"
      | "createLottery"
      | "creatorFee"
      | "enterLottery"
      | "lotteryIDBalanceMapping"
      | "lotteryIDDurationMapping"
      | "lotteryIDEntrancesMapping"
      | "lotteryIDFeeMapping"
      | "lotteryIDStateMapping"
      | "owner"
      | "ownerLotteryIDMapping"
      | "rawFulfillRandomWords"
      | "renounceOwnership"
      | "requestIDLotteryIDMapping"
      | "stopEntrance"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "calculateWinner",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeCreatorFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createLottery",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "creatorFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enterLottery",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lotteryIDBalanceMapping",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lotteryIDDurationMapping",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lotteryIDEntrancesMapping",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lotteryIDFeeMapping",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lotteryIDStateMapping",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerLotteryIDMapping",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomWords",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestIDLotteryIDMapping",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stopEntrance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateWinner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeCreatorFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createLottery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "creatorFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "enterLottery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lotteryIDBalanceMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lotteryIDDurationMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lotteryIDEntrancesMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lotteryIDFeeMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lotteryIDStateMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownerLotteryIDMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestIDLotteryIDMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stopEntrance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface LotteryMaker extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LotteryMakerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    calculateWinner(
      lotteryID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeCreatorFee(
      _newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createLottery(
      entranceFee: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    creatorFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    enterLottery(
      lotteryID: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lotteryIDBalanceMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lotteryIDDurationMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lotteryIDEntrancesMapping(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    lotteryIDFeeMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lotteryIDStateMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerLotteryIDMapping(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestIDLotteryIDMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    stopEntrance(
      lotteryID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  calculateWinner(
    lotteryID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeCreatorFee(
    _newFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createLottery(
    entranceFee: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  creatorFee(overrides?: CallOverrides): Promise<BigNumber>;

  enterLottery(
    lotteryID: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lotteryIDBalanceMapping(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lotteryIDDurationMapping(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lotteryIDEntrancesMapping(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  lotteryIDFeeMapping(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lotteryIDStateMapping(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerLotteryIDMapping(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rawFulfillRandomWords(
    requestId: BigNumberish,
    randomWords: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestIDLotteryIDMapping(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  stopEntrance(
    lotteryID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    calculateWinner(
      lotteryID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changeCreatorFee(
      _newFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createLottery(
      entranceFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    creatorFee(overrides?: CallOverrides): Promise<BigNumber>;

    enterLottery(
      lotteryID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lotteryIDBalanceMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lotteryIDDurationMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lotteryIDEntrancesMapping(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    lotteryIDFeeMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lotteryIDStateMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerLotteryIDMapping(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    requestIDLotteryIDMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stopEntrance(
      lotteryID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    calculateWinner(
      lotteryID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeCreatorFee(
      _newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createLottery(
      entranceFee: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    creatorFee(overrides?: CallOverrides): Promise<BigNumber>;

    enterLottery(
      lotteryID: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lotteryIDBalanceMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lotteryIDDurationMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lotteryIDEntrancesMapping(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lotteryIDFeeMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lotteryIDStateMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerLotteryIDMapping(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestIDLotteryIDMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stopEntrance(
      lotteryID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateWinner(
      lotteryID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeCreatorFee(
      _newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createLottery(
      entranceFee: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    creatorFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    enterLottery(
      lotteryID: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lotteryIDBalanceMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lotteryIDDurationMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lotteryIDEntrancesMapping(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lotteryIDFeeMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lotteryIDStateMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerLotteryIDMapping(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestIDLotteryIDMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stopEntrance(
      lotteryID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
