import { RowDataPacket } from "mysql2";


export default interface User extends RowDataPacket {
    username: string;
    password: string;
    
  }