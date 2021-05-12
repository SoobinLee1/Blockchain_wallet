//컨트랙트 거래 이용 코드

// 1. contract ABI
var interface=[{
    "constant": false,
    "inputs": [
        {
            "name": "_amount",
            "type": "uint256"
        }
    ],
    "name": "withdraw",
    "outputs": [],
    "payable": true,
    "type": "function",
    "stateMutability": "payable"
},
{
    "constant": false,
    "inputs": [],
    "name": "deposit",
    "outputs": [],
    "payable": true,
    "type": "function",
    "stateMutability": "payable"
},
{
    "constant": true,
    "inputs": [
        {
            "name": "_account",
            "type": "address"
        }
    ],
    "name": "getBalance",
    "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "type": "function",
    "stateMutability": "view"
}];


// 배포된 컨트랙트의 주소를 받아와서 해당 주소에 트랜잭션 발생
var contractAddr = "";
var bankContract = web3.eth.contract(interface);
var bank = bankContract.at(contractAddr);


// 시나리오1 - 기부하기
var accountAddr = eth.accounts[0];


// 시나리오1-1. 5000포인트 기부
tx_donate = {from: accountAddr, to: bank.address, data: bank.withdraw.getData(),value:5000,gas:90000};
eth.sendTransaction(tx_donate);


// 시나리오1-2. 배포된 컨트랙트 객체에 기부리워드 지급
tx_reward = {from: accountAddr, to: bank.address, data: bank.deposit.getData(),value:500,gas:90000};
eth.sendTransaction(tx_reward);


// 3. 마이닝  geth console에서 진행됨
// miner.start(1);
// miner.stop();


// 4. 컨트랙트 객체 포인트 입금 결과 조회
txCall = {from : accountAddr, to : contractAddr, data : bank.getBalance.getData(accountAddr)};
eth.call(txCall);
console.log(eth.getBalance(accountAddr));
