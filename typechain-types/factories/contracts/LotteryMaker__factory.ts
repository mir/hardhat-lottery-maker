/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LotteryMaker,
  LotteryMakerInterface,
} from "../../contracts/LotteryMaker";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_creatorFee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_vrfCoordinator",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "_subscriptionId",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "_keyHash",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "lotteryID",
        type: "uint256",
      },
    ],
    name: "LotteryCreatedEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "lotteryID",
        type: "uint256",
      },
    ],
    name: "WinnerCalculatedEvent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lotteryID",
        type: "uint256",
      },
    ],
    name: "calculateWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newFee",
        type: "uint256",
      },
    ],
    name: "changeCreatorFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entranceFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "createLimitedLottery",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entranceFee",
        type: "uint256",
      },
    ],
    name: "createLottery",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "creatorFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lotteryID",
        type: "uint256",
      },
    ],
    name: "enterLottery",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lotteryID",
        type: "uint256",
      },
    ],
    name: "getAllEntrances",
    outputs: [
      {
        internalType: "address payable[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "lotteryIDBalanceMapping",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "lotteryIDEndtimeMapping",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "lotteryIDEntrancesMapping",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "lotteryIDFeeMapping",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "lotteryIDOwnerMapping",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "lotteryIDStateMapping",
    outputs: [
      {
        internalType: "enum LotteryMaker.LotteryState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "lotteryIDToCheckDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "requestIDLotteryIDMapping",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lotteryID",
        type: "uint256",
      },
    ],
    name: "stopEntrance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052620186a0600d60006101000a81548163ffffffff021916908363ffffffff1602179055506003600d60046101000a81548161ffff021916908361ffff1602179055506001600d60066101000a81548163ffffffff021916908363ffffffff1602179055503480156200007557600080fd5b5060405162002a5738038062002a5783398181016040528101906200009b919062000364565b82620000bc620000b06200017360201b60201c565b6200017b60201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505082600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508360018190555081600b60146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555080600c8190555050505050620003d6565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b6000819050919050565b620002598162000244565b81146200026557600080fd5b50565b60008151905062000279816200024e565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002ac826200027f565b9050919050565b620002be816200029f565b8114620002ca57600080fd5b50565b600081519050620002de81620002b3565b92915050565b600067ffffffffffffffff82169050919050565b6200030381620002e4565b81146200030f57600080fd5b50565b6000815190506200032381620002f8565b92915050565b6000819050919050565b6200033e8162000329565b81146200034a57600080fd5b50565b6000815190506200035e8162000333565b92915050565b600080600080608085870312156200038157620003806200023f565b5b6000620003918782880162000268565b9450506020620003a487828801620002cd565b9350506040620003b78782880162000312565b9250506060620003ca878288016200034d565b91505092959194509250565b60805161265e620003f9600039600081816105f7015261064b015261265e6000f3fe6080604052600436106101355760003560e01c80638e4acab5116100ab578063da1086a01161006f578063da1086a014610455578063e1d1033d1461047e578063e3c55e401461049a578063e88958dc146104c3578063e8b161ad146104ee578063f2fde38b1461052b57610135565b80638e4acab5146103385780639ad2acf5146103755780639bb1e5b61461039e578063c1549629146103db578063cbc388671461041857610135565b80634585e33b116100fd5780634585e33b1461023657806361dad1211461025f5780636e04ff0d1461029c578063715018a6146102da5780638da5cb5b146102f15780638dd8c56d1461031c57610135565b80631ecbcbf51461013a5780631fe543e3146101775780631fec3938146101a05780632bc5f392146101dd5780633fd430981461021a575b600080fd5b34801561014657600080fd5b50610161600480360381019061015c919061183f565b610554565b60405161016e919061195c565b60405180910390f35b34801561018357600080fd5b5061019e60048036038101906101999190611ad7565b6105f5565b005b3480156101ac57600080fd5b506101c760048036038101906101c2919061183f565b6106b5565b6040516101d49190611baa565b60405180910390f35b3480156101e957600080fd5b5061020460048036038101906101ff919061183f565b6106d5565b6040516102119190611bd4565b60405180910390f35b610234600480360381019061022f919061183f565b6106f9565b005b34801561024257600080fd5b5061025d60048036038101906102589190611c4a565b610883565b005b34801561026b57600080fd5b506102866004803603810190610281919061183f565b61099f565b6040516102939190611cb8565b60405180910390f35b3480156102a857600080fd5b506102c360048036038101906102be9190611c4a565b6109d2565b6040516102d1929190611d76565b60405180910390f35b3480156102e657600080fd5b506102ef610ae6565b005b3480156102fd57600080fd5b50610306610b6e565b6040516103139190611cb8565b60405180910390f35b6103366004803603810190610331919061183f565b610b97565b005b34801561034457600080fd5b5061035f600480360381019061035a919061183f565b610be9565b60405161036c9190611bd4565b60405180910390f35b34801561038157600080fd5b5061039c6004803603810190610397919061183f565b610c01565b005b3480156103aa57600080fd5b506103c560048036038101906103c0919061183f565b610d68565b6040516103d29190611bd4565b60405180910390f35b3480156103e757600080fd5b5061040260048036038101906103fd919061183f565b610d80565b60405161040f9190611bd4565b60405180910390f35b34801561042457600080fd5b5061043f600480360381019061043a9190611da6565b610d98565b60405161044c9190611df5565b60405180910390f35b34801561046157600080fd5b5061047c6004803603810190610477919061183f565b610de6565b005b61049860048036038101906104939190611da6565b6110b5565b005b3480156104a657600080fd5b506104c160048036038101906104bc919061183f565b611158565b005b3480156104cf57600080fd5b506104d86111de565b6040516104e59190611bd4565b60405180910390f35b3480156104fa57600080fd5b506105156004803603810190610510919061183f565b6111e4565b6040516105229190611bd4565b60405180910390f35b34801561053757600080fd5b50610552600480360381019061054d9190611e3c565b6111fc565b005b6060600960008381526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156105e957602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161059f575b50505050509050919050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106a757337f00000000000000000000000000000000000000000000000000000000000000006040517f1cf993f400000000000000000000000000000000000000000000000000000000815260040161069e929190611e69565b60405180910390fd5b6106b182826112f3565b5050565b60066020528060005260406000206000915054906101000a900460ff1681565b600581815481106106e557600080fd5b906000526020600020016000915090505481565b6000600381111561070d5761070c611b33565b5b6006600083815260200190815260200160002060009054906101000a900460ff1660038111156107405761073f611b33565b5b14610780576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077790611eef565b60405180910390fd5b60036000828152602001908152602001600020543410156107d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107cd90611f81565b60405180910390fd5b3460076000838152602001908152602001600020546107f59190611fd0565b600760008381526020019081526020016000208190555060096000828152602001908152602001600020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600580549050905060005b81811015610999576000600582815481106108ae576108ad612026565b5b90600052602060002001549050600060096000838152602001908152602001600020805490501180156108f35750426004600083815260200190815260200160002054105b801561094357506000600381111561090e5761090d611b33565b5b6006600083815260200190815260200160002060009054906101000a900460ff16600381111561094157610940611b33565b5b145b156109855760016006600083815260200190815260200160002060006101000a81548160ff0219169083600381111561097f5761097e611b33565b5b02179055505b50808061099190612055565b915050610890565b50505050565b60026020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006060600091506000600580549050905060005b81811015610adc57600060058281548110610a0557610a04612026565b5b906000526020600020015490508480610aa2575060006009600083815260200190815260200160002080549050118015610a515750426004600083815260200190815260200160002054105b8015610aa1575060006003811115610a6c57610a6b611b33565b5b6006600083815260200190815260200160002060009054906101000a900460ff166003811115610a9f57610a9e611b33565b5b145b5b94508415610ac85760016040518060200160405280600081525094509450505050610adf565b508080610ad490612055565b9150506109e7565b50505b9250929050565b610aee6113fe565b73ffffffffffffffffffffffffffffffffffffffff16610b0c610b6e565b73ffffffffffffffffffffffffffffffffffffffff1614610b62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b59906120e9565b60405180910390fd5b610b6c6000611406565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600154341015610bdc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd39061217b565b60405180910390fd5b610be5816114ca565b5050565b60076020528060005260406000206000915090505481565b6002600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ca2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c999061220d565b60405180910390fd5b60006003811115610cb657610cb5611b33565b5b6006600083815260200190815260200160002060009054906101000a900460ff166003811115610ce957610ce8611b33565b5b14610d29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2090611eef565b60405180910390fd5b60016006600083815260200190815260200160002060006101000a81548160ff02191690836003811115610d6057610d5f611b33565b5b021790555050565b60046020528060005260406000206000915090505481565b60086020528060005260406000206000915090505481565b60096020528160005260406000208181548110610db457600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e87576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7e9061229f565b60405180910390fd5b60016003811115610e9b57610e9a611b33565b5b6006600083815260200190815260200160002060009054906101000a900460ff166003811115610ece57610ecd611b33565b5b14610f0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f059061230b565b60405180910390fd5b6000600960008381526020019081526020016000208054905011610f67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5e90612377565b60405180910390fd5b60026006600083815260200190815260200160002060006101000a81548160ff02191690836003811115610f9e57610f9d611b33565b5b02179055506000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635d3b1d30600c54600b60149054906101000a900467ffffffffffffffff16600d60049054906101000a900461ffff16600d60009054906101000a900463ffffffff16600d60069054906101000a900463ffffffff166040518663ffffffff1660e01b815260040161105495949392919061240f565b6020604051808303816000875af1158015611073573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110979190612477565b90508160086000838152602001908152602001600020819055505050565b6001543410156110fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110f19061217b565b60405180910390fd5b6000611105836114ca565b905081426111139190611fd0565b60046000838152602001908152602001600020819055506005819080600181540180825580915050600190039060005260206000200160009091909190915055505050565b6111606113fe565b73ffffffffffffffffffffffffffffffffffffffff1661117e610b6e565b73ffffffffffffffffffffffffffffffffffffffff16146111d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111cb906120e9565b60405180910390fd5b8060018190555050565b60015481565b60036020528060005260406000206000915090505481565b6112046113fe565b73ffffffffffffffffffffffffffffffffffffffff16611222610b6e565b73ffffffffffffffffffffffffffffffffffffffff1614611278576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126f906120e9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036112e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112de90612516565b60405180910390fd5b6112f081611406565b50565b6000600860008481526020019081526020016000205490506000600960008381526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156113a057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611356575b5050505050905060008151846000815181106113bf576113be612026565b5b60200260200101516113d19190612565565b90506113f7838383815181106113ea576113e9612026565b5b60200260200101516115f0565b5050505050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006114d6600a611793565b60006114e2600a6117a9565b905082600360008381526020019081526020016000208190555060006006600083815260200190815260200160002060006101000a81548160ff0219169083600381111561153357611532611b33565b5b021790555060006007600083815260200190815260200160002081905550336002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550803373ffffffffffffffffffffffffffffffffffffffff167fe03d61f742c11525b3c0d7993f45fbf687ef314840bc5afa547d6d74f40cabb660405160405180910390a380915050919050565b6002600381111561160457611603611b33565b5b6006600084815260200190815260200160002060009054906101000a900460ff16600381111561163757611636611b33565b5b14611677576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161166e90612608565b60405180910390fd5b60036006600084815260200190815260200160002060006101000a81548160ff021916908360038111156116ae576116ad611b33565b5b0217905550600060076000848152602001908152602001600020549050600060076000858152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561172a573d6000803e3d6000fd5b5060096000848152602001908152602001600020600061174a91906117b7565b828273ffffffffffffffffffffffffffffffffffffffff167f86c3a6c2352953d57d108043736969ee0d4faa042ee18d6251fd5b580ed0cdbe60405160405180910390a3505050565b6001816000016000828254019250508190555050565b600081600001549050919050565b50805460008255906000526020600020908101906117d591906117d8565b50565b5b808211156117f15760008160009055506001016117d9565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61181c81611809565b811461182757600080fd5b50565b60008135905061183981611813565b92915050565b600060208284031215611855576118546117ff565b5b60006118638482850161182a565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006118c382611898565b9050919050565b6118d3816118b8565b82525050565b60006118e583836118ca565b60208301905092915050565b6000602082019050919050565b60006119098261186c565b6119138185611877565b935061191e83611888565b8060005b8381101561194f57815161193688826118d9565b9750611941836118f1565b925050600181019050611922565b5085935050505092915050565b6000602082019050818103600083015261197681846118fe565b905092915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6119cc82611983565b810181811067ffffffffffffffff821117156119eb576119ea611994565b5b80604052505050565b60006119fe6117f5565b9050611a0a82826119c3565b919050565b600067ffffffffffffffff821115611a2a57611a29611994565b5b602082029050602081019050919050565b600080fd5b6000611a53611a4e84611a0f565b6119f4565b90508083825260208201905060208402830185811115611a7657611a75611a3b565b5b835b81811015611a9f5780611a8b888261182a565b845260208401935050602081019050611a78565b5050509392505050565b600082601f830112611abe57611abd61197e565b5b8135611ace848260208601611a40565b91505092915050565b60008060408385031215611aee57611aed6117ff565b5b6000611afc8582860161182a565b925050602083013567ffffffffffffffff811115611b1d57611b1c611804565b5b611b2985828601611aa9565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60048110611b7357611b72611b33565b5b50565b6000819050611b8482611b62565b919050565b6000611b9482611b76565b9050919050565b611ba481611b89565b82525050565b6000602082019050611bbf6000830184611b9b565b92915050565b611bce81611809565b82525050565b6000602082019050611be96000830184611bc5565b92915050565b600080fd5b60008083601f840112611c0a57611c0961197e565b5b8235905067ffffffffffffffff811115611c2757611c26611bef565b5b602083019150836001820283011115611c4357611c42611a3b565b5b9250929050565b60008060208385031215611c6157611c606117ff565b5b600083013567ffffffffffffffff811115611c7f57611c7e611804565b5b611c8b85828601611bf4565b92509250509250929050565b6000611ca282611898565b9050919050565b611cb281611c97565b82525050565b6000602082019050611ccd6000830184611ca9565b92915050565b60008115159050919050565b611ce881611cd3565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611d28578082015181840152602081019050611d0d565b83811115611d37576000848401525b50505050565b6000611d4882611cee565b611d528185611cf9565b9350611d62818560208601611d0a565b611d6b81611983565b840191505092915050565b6000604082019050611d8b6000830185611cdf565b8181036020830152611d9d8184611d3d565b90509392505050565b60008060408385031215611dbd57611dbc6117ff565b5b6000611dcb8582860161182a565b9250506020611ddc8582860161182a565b9150509250929050565b611def816118b8565b82525050565b6000602082019050611e0a6000830184611de6565b92915050565b611e1981611c97565b8114611e2457600080fd5b50565b600081359050611e3681611e10565b92915050565b600060208284031215611e5257611e516117ff565b5b6000611e6084828501611e27565b91505092915050565b6000604082019050611e7e6000830185611ca9565b611e8b6020830184611ca9565b9392505050565b600082825260208201905092915050565b7f536f7272792c206c6f7474657279206973206e6f74206f70656e000000000000600082015250565b6000611ed9601a83611e92565b9150611ee482611ea3565b602082019050919050565b60006020820190508181036000830152611f0881611ecc565b9050919050565b7f4e6f7420656e6f7567682045544820746f20656e74657220746865206c6f747460008201527f6572790000000000000000000000000000000000000000000000000000000000602082015250565b6000611f6b602383611e92565b9150611f7682611f0f565b604082019050919050565b60006020820190508181036000830152611f9a81611f5e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611fdb82611809565b9150611fe683611809565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561201b5761201a611fa1565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061206082611809565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361209257612091611fa1565b5b600182019050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006120d3602083611e92565b91506120de8261209d565b602082019050919050565b60006020820190508181036000830152612102816120c6565b9050919050565b7f4e6f7420656e6f7567682045544820746f206372656174652061206c6f74746560008201527f7279000000000000000000000000000000000000000000000000000000000000602082015250565b6000612165602283611e92565b915061217082612109565b604082019050919050565b6000602082019050818103600083015261219481612158565b9050919050565b7f4f6e6c792063726561746f72206f6620746865206c6f74746572792063616e2060008201527f73746f702074686520656e7472616e6365730000000000000000000000000000602082015250565b60006121f7603283611e92565b91506122028261219b565b604082019050919050565b60006020820190508181036000830152612226816121ea565b9050919050565b7f4f6e6c792063726561746f72206f6620746865204c6f74746572792063616e2060008201527f63616c63756c6174652077696e6e657273000000000000000000000000000000602082015250565b6000612289603183611e92565b91506122948261222d565b604082019050919050565b600060208201905081810360008301526122b88161227c565b9050919050565b7f536f7272792c206c6f7474657279206973206e6f742073746f70706564000000600082015250565b60006122f5601d83611e92565b9150612300826122bf565b602082019050919050565b60006020820190508181036000830152612324816122e8565b9050919050565b7f4e6f20656e7472616e6365730000000000000000000000000000000000000000600082015250565b6000612361600c83611e92565b915061236c8261232b565b602082019050919050565b6000602082019050818103600083015261239081612354565b9050919050565b6000819050919050565b6123aa81612397565b82525050565b600067ffffffffffffffff82169050919050565b6123cd816123b0565b82525050565b600061ffff82169050919050565b6123ea816123d3565b82525050565b600063ffffffff82169050919050565b612409816123f0565b82525050565b600060a08201905061242460008301886123a1565b61243160208301876123c4565b61243e60408301866123e1565b61244b6060830185612400565b6124586080830184612400565b9695505050505050565b60008151905061247181611813565b92915050565b60006020828403121561248d5761248c6117ff565b5b600061249b84828501612462565b91505092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612500602683611e92565b915061250b826124a4565b604082019050919050565b6000602082019050818103600083015261252f816124f3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061257082611809565b915061257b83611809565b92508261258b5761258a612536565b5b828206905092915050565b7f536f7272792c206c6f7474657279206973206e6f7420696e2043616c63756c6160008201527f74696e6720737461746500000000000000000000000000000000000000000000602082015250565b60006125f2602a83611e92565b91506125fd82612596565b604082019050919050565b60006020820190508181036000830152612621816125e5565b905091905056fea26469706673582212208ed46cb09be27763750cb4f534e37f90bb3c177228e18fa66855c28989a5120864736f6c634300080d0033";

type LotteryMakerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LotteryMakerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LotteryMaker__factory extends ContractFactory {
  constructor(...args: LotteryMakerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _creatorFee: BigNumberish,
    _vrfCoordinator: string,
    _subscriptionId: BigNumberish,
    _keyHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LotteryMaker> {
    return super.deploy(
      _creatorFee,
      _vrfCoordinator,
      _subscriptionId,
      _keyHash,
      overrides || {}
    ) as Promise<LotteryMaker>;
  }
  override getDeployTransaction(
    _creatorFee: BigNumberish,
    _vrfCoordinator: string,
    _subscriptionId: BigNumberish,
    _keyHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _creatorFee,
      _vrfCoordinator,
      _subscriptionId,
      _keyHash,
      overrides || {}
    );
  }
  override attach(address: string): LotteryMaker {
    return super.attach(address) as LotteryMaker;
  }
  override connect(signer: Signer): LotteryMaker__factory {
    return super.connect(signer) as LotteryMaker__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LotteryMakerInterface {
    return new utils.Interface(_abi) as LotteryMakerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LotteryMaker {
    return new Contract(address, _abi, signerOrProvider) as LotteryMaker;
  }
}
