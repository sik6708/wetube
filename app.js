import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express(); //Express.js는 Node.js의 핵심 모듈인 http와 Connect 컴포넌트를 기반으로 하는 웹 프레임워크다. 그러한 컴포넌트를 미들웨어(middleware)라고 하며
//nodemon 코드 수정시 서버재시작
app.use(cookieParser()); //요청된 쿠키를 쉽게 추출할 수 있도록 해주는 미들웨어
app.use(bodyParser.json());
app.use(bodyParser({ extended: true })); //클라이언트 POST request data의 body로부터 파라미터를 편리하게 추출합니다.
app.use(helmet()); //Express.js 사용시 Http 헤더 설정을 자동으로 바꾸어주어 잘 알려진 몇가지 앱의 취약성으로 부터 앱을 보호 할 수 있는 패키지이다.
app.use(morgan("dev")); // 요청에 대한 정보를 로그로

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); // get use 차이 use 사용시 유저가 user 에 들어오면 userRouter 다사용.
app.use(routes.videos, videoRouter);

/*
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
*/

export default app;

/*
Model : data
View : how does the data look
Control : function that looks for the data
*/
