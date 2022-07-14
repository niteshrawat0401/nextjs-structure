// import {Usermodel} from "../../Models/User"

export default function handler(req, res){
    //const user= Usermodel.find().sort().filter()
    if(req.method === "POST"){
        //create user
    } else if(req.method === "GET"){
        // return list of user
    }
    return res.send("hello world");
}



//app get ("/", handler)