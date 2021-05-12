// 계정생성 버튼 클릭시
// 휴대폰 본인인증 api

var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));  
var password = '';
personal.newAccount(password);    // 새로운 계정 생성
console.log("account created");
