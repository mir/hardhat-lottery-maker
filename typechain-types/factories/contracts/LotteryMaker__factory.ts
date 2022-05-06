/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
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
    name: "lotteryIDDurationMapping",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ownerLotteryIDMapping",
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
  "0x60a0604052610a6f600a60146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550736168499c0cffcacd319c818142124b7a15e857ab600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc60001b600c55620186a0600d60006101000a81548163ffffffff021916908363ffffffff1602179055506003600d60046101000a81548161ffff021916908361ffff1602179055506001600d60066101000a81548163ffffffff021916908363ffffffff1602179055503480156200011c57600080fd5b5060405162002ac938038062002ac9833981810160405281019062000142919062000410565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1662000185620001796200025e60201b60201c565b6200026660201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620002506040518060600160405280602b815260200162002a9e602b9139826200032a60201b620011f31760201c565b806001819055505062000549565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620003cc8282604051602401620003439291906200048e565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620003d060201b60201c565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000815190506200040a816200052f565b92915050565b6000602082840312156200042357600080fd5b60006200043384828501620003f9565b91505092915050565b60006200044982620004c2565b620004558185620004cd565b935062000467818560208601620004e8565b62000472816200051e565b840191505092915050565b6200048881620004de565b82525050565b60006040820190508181036000830152620004aa81856200043c565b9050620004bb60208301846200047d565b9392505050565b600081519050919050565b600082825260208201905092915050565b6000819050919050565b60005b8381101562000508578082015181840152602081019050620004eb565b8381111562000518576000848401525b50505050565b6000601f19601f8301169050919050565b6200053a81620004de565b81146200054657600080fd5b50565b60805160601c61252f6200056f600039600081816104220152610476015261252f6000f3fe6080604052600436106100fe5760003560e01c80639ad2acf511610095578063deca81f211610064578063deca81f214610329578063e3c55e4014610366578063e88958dc1461038f578063e8b161ad146103ba578063f2fde38b146103f7576100fe565b80639ad2acf51461025d578063c154962914610286578063cbc38867146102c3578063da1086a014610300576100fe565b8063715018a6116100d1578063715018a6146101c25780638da5cb5b146101d95780638dd8c56d146102045780638e4acab514610220576100fe565b80631fe543e3146101035780631fec39381461012c5780633fd430981461016957806359c5f8f214610185575b600080fd5b34801561010f57600080fd5b5061012a600480360381019061012591906119f9565b610420565b005b34801561013857600080fd5b50610153600480360381019061014e91906119a7565b6104e0565b6040516101609190611d27565b60405180910390f35b610183600480360381019061017e91906119a7565b610500565b005b34801561019157600080fd5b506101ac60048036038101906101a7919061197e565b61071a565b6040516101b99190611ec2565b60405180910390f35b3480156101ce57600080fd5b506101d7610732565b005b3480156101e557600080fd5b506101ee6107ba565b6040516101fb9190611c75565b60405180910390f35b61021e600480360381019061021991906119a7565b6107e3565b005b34801561022c57600080fd5b50610247600480360381019061024291906119a7565b610999565b6040516102549190611ec2565b60405180910390f35b34801561026957600080fd5b50610284600480360381019061027f91906119a7565b6109b1565b005b34801561029257600080fd5b506102ad60048036038101906102a891906119a7565b610c88565b6040516102ba9190611ec2565b60405180910390f35b3480156102cf57600080fd5b506102ea60048036038101906102e59190611a4d565b610ca0565b6040516102f79190611c90565b60405180910390f35b34801561030c57600080fd5b50610327600480360381019061032291906119a7565b610cee565b005b34801561033557600080fd5b50610350600480360381019061034b91906119a7565b611000565b60405161035d9190611ec2565b60405180910390f35b34801561037257600080fd5b5061038d600480360381019061038891906119a7565b611018565b005b34801561039b57600080fd5b506103a46110dd565b6040516103b19190611ec2565b60405180910390f35b3480156103c657600080fd5b506103e160048036038101906103dc91906119a7565b6110e3565b6040516103ee9190611ec2565b60405180910390f35b34801561040357600080fd5b5061041e6004803603810190610419919061197e565b6110fb565b005b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104d257337f00000000000000000000000000000000000000000000000000000000000000006040517f1cf993f40000000000000000000000000000000000000000000000000000000081526004016104c9929190611cab565b60405180910390fd5b6104dc828261128f565b5050565b60056020528060005260406000206000915054906101000a900460ff1681565b61052260405180606001604052806025815260200161248b60259139826111f3565b6000600281111561055c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6005600083815260200190815260200160002060009054906101000a900460ff1660028111156105b5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b146105f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ec90611de2565b60405180910390fd5b600360008281526020019081526020016000205434101561064b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064290611e82565b60405180910390fd5b61066d6040518060600160405280602781526020016124b060279139346111f3565b34600660008381526020019081526020016000205461068c9190611f4a565b600660008381526020019081526020016000208190555060086000828152602001908152602001600020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60026020528060005260406000206000915090505481565b61073a611486565b73ffffffffffffffffffffffffffffffffffffffff166107586107ba565b73ffffffffffffffffffffffffffffffffffffffff16146107ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a590611e62565b60405180910390fd5b6107b8600061148e565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600154341015610828576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081f90611ea2565b60405180910390fd5b6108676040518060400160405280601b81526020017f4372656174652061206c6f74746572792077697468206665653a200000000000815250826111f3565b6108716009611552565b600061087d6009611568565b90506108be6040518060400160405280600b81526020017f4c6f747465727949443a20000000000000000000000000000000000000000000815250826111f3565b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600360008381526020019081526020016000208190555060006005600083815260200190815260200160002060006101000a81548160ff02191690836002811115610977577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550600060066000838152602001908152602001600020819055505050565b60066020528060005260406000206000915090505481565b6109f06040518060400160405280601e81526020017f53746f7070696e6720656e7472616e63652e204c6f74746572794944203a0000815250826111f3565b610a2f6040518060400160405280600b81526020017f6d73672e73656e6465723a00000000000000000000000000000000000000000081525033611576565b610a9060405180606001604052806022815260200161242360229139600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546111f3565b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610b11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0890611e02565b60405180910390fd5b60006002811115610b4b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6005600083815260200190815260200160002060009054906101000a900460ff166002811115610ba4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610be4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdb90611de2565b60405180910390fd5b60016005600083815260200190815260200160002060006101000a81548160ff02191690836002811115610c41577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550610c856040518060400160405280601081526020017f4c6f74746572792073746f707065642000000000000000000000000000000000815250826111f3565b50565b60076020528060005260406000206000915090505481565b60086020528160005260406000208181548110610cbc57600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610d6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6690611dc2565b60405180910390fd5b60016002811115610da9577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6005600083815260200190815260200160002060009054906101000a900460ff166002811115610e02577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610e42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3990611e42565b60405180910390fd5b6000600860008381526020019081526020016000208054905011610e9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9290611e22565b60405180910390fd5b610ebd6040518060600160405280602381526020016124d760239139826111f3565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635d3b1d30600c54600a60149054906101000a900467ffffffffffffffff16600d60049054906101000a900461ffff16600d60009054906101000a900463ffffffff16600d60069054906101000a900463ffffffff166040518663ffffffff1660e01b8152600401610f6e959493929190611cd4565b602060405180830381600087803b158015610f8857600080fd5b505af1158015610f9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc091906119d0565b9050816007600083815260200190815260200160002081905550610ffc60405180606001604052806024815260200161246760249139826111f3565b5050565b60046020528060005260406000206000915090505481565b611020611486565b73ffffffffffffffffffffffffffffffffffffffff1661103e6107ba565b73ffffffffffffffffffffffffffffffffffffffff1614611094576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108b90611e62565b60405180910390fd5b6110d36040518060400160405280601881526020017f4368616e67652066656520746f206e65772076616c75653a0000000000000000815250826111f3565b8060018190555050565b60015481565b60036020528060005260406000206000915090505481565b611103611486565b73ffffffffffffffffffffffffffffffffffffffff166111216107ba565b73ffffffffffffffffffffffffffffffffffffffff1614611177576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161116e90611e62565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156111e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111de90611da2565b60405180910390fd5b6111f08161148e565b50565b61128b8282604051602401611209929190611d72565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611612565b5050565b6112ce6040518060400160405280601581526020017f476f7420612072616e646f6d206e756d6265723a200000000000000000000000815250836111f3565b60006007600084815260200190815260200160002054905061130860405180606001604052806022815260200161244560229139826111f3565b60006008600083815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561139d57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611353575b5050505050905060008151846000815181106113e2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516113f491906120b3565b90506114356040518060400160405280601a81526020017f43616c63756c617465642077696e6e6572206e756d6265723a20000000000000815250826111f3565b61147f83838381518110611472577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015161163b565b5050505050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6001816000016000828254019250508190555050565b600081600001549050919050565b61160e828260405160240161158c929190611d42565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611612565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b61167a6040518060400160405280601b81526020017f43616c63756c617465642077696e6e657220616464726573733a20000000000081525082611576565b600160028111156116b4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6005600084815260200190815260200160002060009054906101000a900460ff16600281111561170d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b1461174d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161174490611e42565b60405180910390fd5b60026005600084815260200190815260200160002060006101000a81548160ff021916908360028111156117aa577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055508073ffffffffffffffffffffffffffffffffffffffff166108fc60066000858152602001908152602001600020549081150290604051600060405180830381858888f19350505050158015611808573d6000803e3d6000fd5b506118486040518060400160405280601281526020017f4d6f6e6579207472616e7366657265643a20000000000000000000000000000081525082611576565b600860008381526020019081526020016000206000611867919061186b565b5050565b5080546000825590600052602060002090810190611889919061188c565b50565b5b808211156118a557600081600090555060010161188d565b5090565b60006118bc6118b784611f02565b611edd565b905080838252602082019050828560208602820111156118db57600080fd5b60005b8581101561190b57816118f18882611954565b8452602084019350602083019250506001810190506118de565b5050509392505050565b600081359050611924816123f4565b92915050565b600082601f83011261193b57600080fd5b813561194b8482602086016118a9565b91505092915050565b6000813590506119638161240b565b92915050565b6000815190506119788161240b565b92915050565b60006020828403121561199057600080fd5b600061199e84828501611915565b91505092915050565b6000602082840312156119b957600080fd5b60006119c784828501611954565b91505092915050565b6000602082840312156119e257600080fd5b60006119f084828501611969565b91505092915050565b60008060408385031215611a0c57600080fd5b6000611a1a85828601611954565b925050602083013567ffffffffffffffff811115611a3757600080fd5b611a438582860161192a565b9150509250929050565b60008060408385031215611a6057600080fd5b6000611a6e85828601611954565b9250506020611a7f85828601611954565b9150509250929050565b611a9281611fb2565b82525050565b611aa181611fa0565b82525050565b611ab081611fc4565b82525050565b611abf8161203d565b82525050565b6000611ad082611f2e565b611ada8185611f39565b9350611aea81856020860161204f565b611af3816121a0565b840191505092915050565b6000611b0b602683611f39565b9150611b16826121b1565b604082019050919050565b6000611b2e603183611f39565b9150611b3982612200565b604082019050919050565b6000611b51601a83611f39565b9150611b5c8261224f565b602082019050919050565b6000611b74602d83611f39565b9150611b7f82612278565b604082019050919050565b6000611b97600c83611f39565b9150611ba2826122c7565b602082019050919050565b6000611bba601d83611f39565b9150611bc5826122f0565b602082019050919050565b6000611bdd602083611f39565b9150611be882612319565b602082019050919050565b6000611c00602383611f39565b9150611c0b82612342565b604082019050919050565b6000611c23602283611f39565b9150611c2e82612391565b604082019050919050565b611c4281611fe1565b82525050565b611c518161200f565b82525050565b611c6081612019565b82525050565b611c6f81612029565b82525050565b6000602082019050611c8a6000830184611a98565b92915050565b6000602082019050611ca56000830184611a89565b92915050565b6000604082019050611cc06000830185611a98565b611ccd6020830184611a98565b9392505050565b600060a082019050611ce96000830188611aa7565b611cf66020830187611c66565b611d036040830186611c39565b611d106060830185611c57565b611d1d6080830184611c57565b9695505050505050565b6000602082019050611d3c6000830184611ab6565b92915050565b60006040820190508181036000830152611d5c8185611ac5565b9050611d6b6020830184611a98565b9392505050565b60006040820190508181036000830152611d8c8185611ac5565b9050611d9b6020830184611c48565b9392505050565b60006020820190508181036000830152611dbb81611afe565b9050919050565b60006020820190508181036000830152611ddb81611b21565b9050919050565b60006020820190508181036000830152611dfb81611b44565b9050919050565b60006020820190508181036000830152611e1b81611b67565b9050919050565b60006020820190508181036000830152611e3b81611b8a565b9050919050565b60006020820190508181036000830152611e5b81611bad565b9050919050565b60006020820190508181036000830152611e7b81611bd0565b9050919050565b60006020820190508181036000830152611e9b81611bf3565b9050919050565b60006020820190508181036000830152611ebb81611c16565b9050919050565b6000602082019050611ed76000830184611c48565b92915050565b6000611ee7611ef8565b9050611ef38282612082565b919050565b6000604051905090565b600067ffffffffffffffff821115611f1d57611f1c612171565b5b602082029050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000611f558261200f565b9150611f608361200f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611f9557611f946120e4565b5b828201905092915050565b6000611fab82611fef565b9050919050565b6000611fbd82611fef565b9050919050565b6000819050919050565b6000819050611fdc826123e0565b919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600067ffffffffffffffff82169050919050565b600061204882611fce565b9050919050565b60005b8381101561206d578082015181840152602081019050612052565b8381111561207c576000848401525b50505050565b61208b826121a0565b810181811067ffffffffffffffff821117156120aa576120a9612171565b5b80604052505050565b60006120be8261200f565b91506120c98361200f565b9250826120d9576120d8612113565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f6e6c792063726561746f72206f6620746865204c6f74746572792063616e2060008201527f63616c63756c6174652077696e6e657273000000000000000000000000000000602082015250565b7f536f7272792c206c6f7474657279206973206e6f74206f70656e000000000000600082015250565b7f4f6e6c792063726561746f72206f6620746865204c6f74746572792063616e2060008201527f73746f7020656e7472616e636500000000000000000000000000000000000000602082015250565b7f4e6f20656e7472616e6365730000000000000000000000000000000000000000600082015250565b7f536f7272792c206c6f7474657279206973206e6f742073746f70706564000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4e6f7420656e6f7567682045544820746f20656e74657220746865206c6f747460008201527f6572790000000000000000000000000000000000000000000000000000000000602082015250565b7f4e6f7420656e6f7567682045544820746f206372656174652061206c6f74746560008201527f7279000000000000000000000000000000000000000000000000000000000000602082015250565b600381106123f1576123f0612142565b5b50565b6123fd81611fa0565b811461240857600080fd5b50565b6124148161200f565b811461241f57600080fd5b5056fe6f776e65724c6f747465727949444d617070696e675b6d73672e73656e6465725d3a436f6e7665727465662072657175657374494420746f206c6f747465727949443a2052616e646f6d206e756d626572207265717565737465642c207265717565737449443a20536f6d65626f647920747279656420746f20656e74657220746865206c6f74746572793a20536f6d65626f647920656e746572656420746865206c6f747465727920616e642070617965642052616e646f6d206e756d626572207265717565737465642c206c6f747465727949443aa2646970667358221220ffa3cdd164c702edaff27cb42274b27285fe136516e7421118dd6a4e1122b6ea64736f6c634300080400334465706c6f79696e67206120436f6e74726163744d616b65722077697468206d696e696d756d206665653a";

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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LotteryMaker> {
    return super.deploy(_creatorFee, overrides || {}) as Promise<LotteryMaker>;
  }
  override getDeployTransaction(
    _creatorFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_creatorFee, overrides || {});
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
