//using 쓰는거라고 생각하면 편함 다른점은 명시적으로 할당을 해야 사용 가능하다는 점?
const server = require('./Server');
const rooter = require('./Router');
const handler = require('./requestHander');

//sever라는 변수의 SetData를 실행 - 생각해보니 순환참조같은 이슈가 생길 것 같긴함
//테스트 해보니 순환참조 시키면 함수를 정상적으로 인식 못하는것으로 보임
server.SetData(rooter.Route, handler.Handle, rooter.test);

