const express = require('express');
const router = express.Router();

router.post('/getCookie', (req, res) => {
    // ★ CORS 관련 => 밑에 option들을 사실상 우리가 썼던 cors 라이브러리가 다 만들어줌
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
    res.setHeader('Access-Control-Allow-Method', 'POST, OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Credertials', 'true'); // 쿠키값까지 허용하겠다는 의미
    res.setHeader('Access-Control-Allow-Header', 'Content-type');
});

module.exports = router;

/*
동기요청: url 클릭시 브라우저까지 바뀜
비동기요청: url 클릭해도 브라우저 바뀌지 않고 따로 요청만 보냄

urlencoded : true => queryString 형태로 받겠다 (ex. name=whkwon)
bodyParser.json() => json 형태로 받겠다 (ex. { name : whkwon } )
=> axios 등 비동기 통신에서 header를 요청할 때 Content-type을 넣게 된다면 넣는 이유
- 'Content-type' : application/x-www-form-urlencoded : qeuryString
- 'Content-type' : application/json : json
 단, express server 에서 app.use(epxress.json()) 또는 app.use(express.urlencoded({ extended : true })) 로 원하는 데이터 타입으로 parsing 해줘야 제대로 받을 수 있다

 * cors
 - 브라우저에 연결 된 port가 다른 port 넘버로 요청/응답이 들어올 때 이를 브라우저에서 기본적으로 차단함
 - 따라서 request method에다가 요청을 해야함
    cors를 풀어 달라는 options 요청 => withCredentials: 'true'
    html에서 Access-Control-Allow-Origin 등이 생기는 것을 볼 수 있다

  ★ 정답 참고 : https://github.com/ingoo-blockchain/level/blob/master/front/views/index.html
*/