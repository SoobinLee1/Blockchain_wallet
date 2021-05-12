var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); 


// 1. 계정 조회
var accountAddr = eth.accounts[0];
console.log(accountAddr);
var password = '';
function unlockAccount(){
    personal.unlockAccount(accountAddr,password,600000,function(error, result){
        if (error){
            console.log(error);
        }
        console.log(result);
    });
}
unlockAccount();


//2. 마이닝하기
// miner.start(1);
// miner.stop();


// 3. 계정으로 컨트랙트 배포
var bytecode = "컨트랙트 바이트코드"
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
var bankContract = web3.eth.contract(interface)
var contractAddr = bankContract.new({
    from: accountAddr, 
    data: bytecode, 
    gas:200000
});
console.log(contractAddr);


// 4. 앞서 생성된 트랜잭션 마이닝  geth console에서 진행
// miner.start(1);
// miner.stop();
