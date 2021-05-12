// api 서버로부터 데이터를 받아오는 코드

var express = require('express');
var app = express();
var server = require('http').createServer(app);
server.listen(8080);

app.use(express.static('public'));

var appKey = "{발급받은 APP KEY}"
app.get('/userAuth', function(req,res){
    var request = require('request');
    var jsonDataObj = {'dataBody_COMC_DIS':"1",
    "dataBody_HP_CRTF_AGR_YN":"Y",
    "dataBody_FNM":"우약자",
    "dataBody_RRNO_BFNB":"670122",
    "dataBody_HP_NO":"01012341234",
    "dataBody_ENCY_RRNO_LSNM":"670122"}
    request.post({
        headers: {'content-type':'application/json; charset=UTF-8',
                    'appKey':appKey},
        body: JSON.stringify(jsonDataObj).toString('base64'),
        url: '{API링크}'
    },function(error,response,body){
        console.log(JSON.parse(body).dataBody.CRTF_UNQ_NO);
    });
});
