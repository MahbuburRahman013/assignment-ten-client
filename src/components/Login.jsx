import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { ContextProvider } from './AuthProvider';

const Login = () => {
    const {singInUser,googleLogin} = useContext(ContextProvider);

const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    const email = form.email.value;
    singInUser(email,password)
    .then(result=>{
        console.log(result.user)
    })
    .catch(error=>{
        console.log(error.message)
    })

}

const handleGoogle =()=>{
    googleLogin()
    .then(result=>{
        console.log(result.user)
    })
    .catch(error=>{
        console.log(error.message)
    })
  }



    return (
        <div className="container mx-auto flex justify-center ">
            <div className="w-[50%] my-16 shadow-xl px-7 py-9">
                <h1 className="text-center text-3xl font-semibold">Login Now</h1>
            <form onSubmit={handleLogin} className="w-full">
                <input placeholder="Your Email" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="email" name="email"  />
                <input placeholder="Password" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="password" name="password"  />
               
                <input className="block w-full outline-none bg-blue-500  py-2 text-base font-semibold px-3 my-3" type="submit" value="Login" />
            </form>
            <div className="text-center">
                <h1>Or</h1>
                <h1 onClick={handleGoogle} className="bg-blue-300 py-2 px-4 font-bold cursor-pointer">Login With Google</h1>
                <div className="flex justify-end">
                <Link to='/registration'>
                <p className="font-semibold py-2 hover:text-blue-500 cursor-pointer">Create An Account</p>
                </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;