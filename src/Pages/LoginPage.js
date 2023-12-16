import '../Styles/LoginPage.css'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Axios from 'axios'
import FormCredential from '../Components/FormCredential'


import CryptoJS from 'crypto-js'



function LoginPage() {

  const navigate=useNavigate()

  //def add(a,b){return a+b}
  //add(1,2)
  //v=add(1,2)

  var uname=''
  var pwd=''
  let getState=()=>{
    uname=document.getElementById("uname").value
    pwd=document.getElementById("pwd").value

    // console.log("Login page: ",username,password)

    /*  

    const { AES, enc } = require('crypto-js')
    const { decrypt, encrypt } = AES


    const message = "Hi my friend"
    const messageEncrypt = "oPVu8Dd8ERPIAWr+7rQzIQ=="
    const key= "key123456"
    const aesDecrypt = decrypt(messageEncrypt,key).toString(enc.Utf8)
    console.log(aesDecrypt) // Hi my friend


     
    const iv = { words: [ 0, 0, 0, 0 ], sigBytes: 16 }
let code = CryptoJS.AES.encrypt('message', CryptoJS.enc.Utf8.parse('your secret key'), { iv }).toString()
CryptoJS.AES.decrypt(code, CryptoJS.enc.Utf8.parse('your secret key'), { iv }).toString(CryptoJS.enc.Utf8)
    */

   const iv = { words: [ 0, 0, 0, 0 ], sigBytes: 16 }
   let ciphertext = CryptoJS.DES.encrypt(pwd, CryptoJS.enc.Utf8.parse('9uvjiowejiasdvd'), { iv }).toString()
   let decryptedtext=CryptoJS.DES.decrypt(ciphertext, CryptoJS.enc.Utf8.parse('9uvjiowejiasdvd'), { iv }).toString(CryptoJS.enc.Utf8) 
   

    /*console.log("cipher text: ",ciphertext)
    console.log("decrypted text: ",decryptedtext)

    console.log(" handlesubmit" ,uname, pwd)*/
    const obj={username:uname,password:ciphertext}
    
    const url="https://orange-ring-cello.glitch.me/user/login"
    Axios.post(url, obj)
            .then((res) => {
                if (res.status === 200) {
                    const resArr=res.data
                    //console.log("Login data",resArr)
                    if(res.data["user_type"]==="admin")
                    {
                      navigate('/admin',{state:{_id:resArr["_id"],username:resArr["username"]}})
                    }
                    else if(res.data["user_type"]==="student"){
                      navigate('/student',{
                        state:{_id:resArr["_id"],username:resArr["username"],student_id:resArr["student_id"]
                      
                      
                      }})
                    }
                    else if(res.data["user_type"]==="teacher"){
                      navigate('/teacher',{
                        state:{
                          _id:resArr["_id"],
                          username:resArr["username"],
                          teacher_id:resArr["teacher_id"],
                          class_id:resArr["class_id"]
                        }
                        
                        })
                    }
                    else if(res.data["user_type"]==="parent"){
                      navigate('/parent',{state:{_id:resArr["_id"],username:resArr["username"],student_ids:resArr["student_ids"]
                    
                    
                    }
                    })
                    }
                    
                }
                else if(res.status===209 || res.status===210){
                  document.getElementById("error_display").innerHTML="invalid username or password!"
                }
                else if(res.status===204){
                  alert("Error"+res.data[1])
                }
                else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err))
  }

 
  return (
    <div className='row vertical-center text-center m-0'>
      <div className='col-sm'></div>
      <div className='col-sm-4 card m-0 p-4'>
      <div className='mb-2'><h4>Login</h4></div>
      
        <input id="uname" name='username' className="form-control" type="text" placeholder="Username" required></input><br/>
        <input id="pwd" name='password' className="form-control" type="password" placeholder="Password" required></input><br/>
        <p id="error_display" style={{color:"red"}}></p>
        <input className='btn btn-success w-100' type="submit" value="Log in" onClick={getState} />
        
      </div>
      <div className='col-sm'></div>
    </div>
  )
}
 
export default LoginPage