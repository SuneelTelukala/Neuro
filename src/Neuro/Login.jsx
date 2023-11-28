
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import './login.css';
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import { useCookies } from "react-cookie";









export function Login(){

    let navigate = useNavigate();
    const [users, setUsers] = useState([{ UserName:'', Password:''}]);
    const [userError, setUserError] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies('userName');

    


    const formik = useFormik({
        initialValues : {
            UserName: '',
            Password:''
        },
        onSubmit: (values)=>{
            var user = users.find(item=> item.UserName===values.UserName);
            if(user.Password===values.Password){
                setCookie("UserName", user.UserName);
                navigate("/Main");
            } else {
                setUserError("Invalid Credentials");
            }
        }
    })
    useEffect(()=>{
        axios.get('https://vsm.qa-syd-8.netlinkz.dev/vsm/login')
        
        
        .then((response)=>{
            setUsers(response.data);
        })
    },[]);

    
    
    



    



    return(
        <div className="container-fluid  d-flex justify-content-center align-items-center p-5" >
            
             <Formik
                initialValues={{
                    UserName:'',
                    Password: ''
                }}

                validationSchema={
                    yup.object({
                        UserName: yup.string().required('username Required').min(4, "Name too short.."),
                        Password: yup.number().required("password Required"),
                        
                    })
                }

                
             >
                {
                    props =>
                    <div className="card p-4 w-25" id="card">
                    <Form  onSubmit={formik.handleSubmit} className="text-dark">
                       <dl>
                           <h2 className="d-flex text-white text-align-center justify-content-center mb-3">Login</h2>
                           <dt className="text-white">User Name</dt>
                           <dd className="form-control username-input">
                               <i className="bi bi-person"></i>
                               <input type="text" name="email"  onChange={formik.handleChange} placeholder="username"  />

                           </dd>
                           <dd className="text-danger">
                               <ErrorMessage name="UserName" />
                           </dd>
                           <dt className="text-white">Password</dt>
                           <dd className="form-control password-input">
                            <i className="bi bi-lock"></i>
                           
                           <input type="password" name="password" onChange={formik.handleChange} placeholder="password" />


                             </dd>
                           <dd className="text-danger">
                               <ErrorMessage name="Password" />
                           </dd>
                           
                       </dl>
   
                       <button type="submit"  className="btn btn-primary  w-50"  >Login</button><br/>
                    

                       <span className="text-white text-align-center">Neuro Orchestration Portal</span>
                       <p className="h4 text-danger">{ setUserError}</p>
                       
                    </Form>
                    </div>
                   
                }
             </Formik>
        </div>
    )
}