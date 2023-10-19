import { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import './navbar';
import { FiSun } from 'react-icons/fi';
import { BsMoon } from 'react-icons/bs';
import { ContextProvider } from './AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../fireBase/firebase.config';

const Navbar = () => {
const [isTrue,setIsTrue] = useState(true)
const {user} = useContext(ContextProvider);


const handleLogOut =()=>{
    signOut(auth)
    .then(()=>{
        alert('sing  out user')
    })
    .catch(error=>{
        alert(error?.message)
    })
}



const handleLight = () =>{
    document.querySelector('html').setAttribute('data-theme',"dark")
    setIsTrue(false)
}
const handleDark = () =>{
    document.querySelector('html').setAttribute('data-theme',"light")
    setIsTrue(true)
}

    return (
        <div className='border-b-2 border-blue-400'>
            <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} id="navbar" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/addProduct'>Add Product</NavLink></li>
                            <li><NavLink to='/myCart'>My Cart</NavLink></li>

                        </ul>
                    </div>
                    <div className="h-14 flex items-center gap-2">
                        <img className="w-10" src="https://i.ibb.co/3fP9mBm/sm-5ad1c8addfe79-removebg-preview-1-removebg-preview.png" alt="" />
                        <h1 className="font-semibold text-3xl uppercase">Road<span className="font-bold text-blue-700">Wiz</span></h1>
                    </div>
                    <div className='ml-10 border-2 border-blue-500 rounded-full px-2 pt-1 pb-[2px]'>
                        {
                            isTrue?
                            <button onClick={handleLight}><BsMoon></BsMoon></button>:
                            <button onClick={handleDark}><FiSun></FiSun></button>
                        }
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul id='navbar' className="menu menu-horizontal gap-x-5 px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/addProduct'>Add Product</NavLink></li>
                        <li><NavLink to='/myCart'>My Cart</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user&&
                        <div className='flex items-center gap-2 mr-6'>
                        <p className='font-semibold'>{user.displayName}</p>
                        <img className='w-9 h-9 rounded-full border-2 border-blue-500' src={user.photoURL} alt="" />
                       </div>
                    }
                    <div>
                        {
                            user?
                            <button onClick={handleLogOut} className='bg-blue-600 text-white py-2 px-5 rounded font-semibold'>LogOut</button>:
                            <Link to='/login'><button className='bg-blue-600 text-white py-2 px-5 rounded font-semibold'>Login</button></Link>
                        }
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Navbar;