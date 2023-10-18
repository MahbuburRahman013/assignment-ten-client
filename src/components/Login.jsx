import {Link} from 'react-router-dom'

const Login = () => {

const handleLogin = e =>{
    e.preventDefault();
}



    return (
        <div className="container mx-auto flex justify-center ">
            <div className="w-[50%] my-16 shadow-xl px-7 py-9">
                <h1 className="text-center text-3xl font-semibold">Login Now</h1>
            <form onSubmit={handleLogin} className="w-full">
                <input placeholder="Type" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="text" name="type" id="" />
                <input placeholder="Description" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="text" name="description" id="" />
                <input placeholder="Price" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="number" name="price" id="" />
                <input placeholder="Rating" className="block w-full outline-none bg-gray-100  py-2 text-base font-semibold px-3 my-3" type="number" name="rating" max='5' min='1' id="" />
                <input className="block w-full outline-none bg-blue-500  py-2 text-base font-semibold px-3 my-3" type="submit" value="Login" />
            </form>
            <div className="text-center">
                <h1>Or</h1>
                <h1 className="bg-blue-300 py-2 px-4 font-bold cursor-pointer">Login With Google</h1>
                <div className="flex justify-end">
                <Link>
                <p className="font-semibold py-2 hover:text-blue-500 cursor-pointer">Create An Account</p>
                </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;