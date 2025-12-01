
import { ConnectionOptions } from "typeorm";

const config:ConnectionOptions={
     type:'postgres',
     host:'localhost',
     port:5432,
     username:'mediumclone',
     password:'1234',
     database:'mediumclone'
};
export default config;