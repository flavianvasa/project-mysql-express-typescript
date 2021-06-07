import express, { Request, Response } from 'express';
import { authRouter } from './controllers/auth.controller';
//import { json } from 'body-parser';
const port =  3000;
const app = express();

//app.use(json());
app.get('/', (req:Request,res:Response) => {
res.send("hello");
});

app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`listening to port ${port}`);
  });