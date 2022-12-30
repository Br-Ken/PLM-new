import db from "../models/index";
import bcrypt from 'bcryptjs';
import Admin from "../models/Admin";

let handleUserLogin = (email, password) =>{
    return new Promise (async(resolve, reject) =>{
        try{
            let userData = {}
            let isExist = await checkUserEmail(email);
            if (isExist){
                let user = await db.Admin.findOne({
                    attributes: ['email', 'password'],
                    where: { email: email},
                    raw: true
                });
                if(user){
                    // let check = await bcrypt.compareSync(password, user.password);
                    let check = user.password === password;
                    if(check){
                        userData.errCode =0;
                        userData.errMessage='ok';
                        userData.user = user;
                    }else{
                        userData.errCode =3;
                        userData.errMessage='wrong pass';
                    }
                }else{
                    userData.errCode = 2;
                    userData.errMessage = 'User isnt exist'
                }
            }else{
                userData.errCode = 1;
                userData.errMessage = 'Your email is not exist in our system.'
                
            }
            resolve(userData);
        }catch(e){
            reject(e)
        }
    })
}

let checkUserEmail = (userEmail) =>{
    return new Promise(async(resolve, reject)=>{
        try{
            let user = await db.Admin.findOne({
                where: {email: userEmail}
            })
            if(user){
                resolve (true)
            }else{
                resolve(false)
            }
        }catch(e){
            reject(e);
        }
    })
}
module.exports={
    handleUserLogin: handleUserLogin,
}