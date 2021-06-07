import User from "./models/user.model";
import { pool } from "./dao";
//import { FieldPacket } from "mysql2";

  export async function getUser(username: string) :Promise <User | null> {
      
    const [results]   = await pool.query<User[]>(
        "SELECT * FROM `fine-system.admin` WHERE `username` = ?",[username] )
    if(!results){
        return null;
    }
  
    
    console.log(results);
    const user: User =JSON.parse(results[0].toString());
    return user;
    }
  