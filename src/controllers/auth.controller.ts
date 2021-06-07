import { Request, Response, Router } from 'express';
import { getUser } from 'src/data/user.dao';

const router = Router();

router.post('/login', async (req:Request , res:Response ) => {
  const { username, password } = req.body;
  const user = await getUser(username);

  if (!user || !(password === user.password)) {
    
     res.status(401).send(
      "username or password is incorrect"
    );
  }
   res.json(true );

});

export {
  router as authRouter
};