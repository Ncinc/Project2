import { EventConnect } from "./event";

export class User {
    email: string; // not null
    firstname: string; // not null
    lastname: string; // not null
    password: string; // not null
    username: string; // not null, unique
    connect_eventid: EventConnect;
    userlocation: string;
    userimage: string;


        constructor(id = 0,  email = '',
        firstname = '', lastname = '',
         password = '', username = '', connect_eventid:EventConnect, userlocation = '', userimage='' ) {// role){
            this.username = username;
            this.password = password;
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.connect_eventid = connect_eventid;
            this.userlocation = userlocation;
            this.userimage = userimage;

      }
  }