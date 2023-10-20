import { useContext, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import './navbar';
import { FiSun } from 'react-icons/fi';
import { BsMoon } from 'react-icons/bs';
import { ContextProvider } from './AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../fireBase/firebase.config';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
    // const [isTrue, setIsTrue] = useState(true)
    const [darkMode, setDarkMode] = useState(false);
    const { user } = useContext(ContextProvider);
    const id = user?.uid


      

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                toast.success('Sing out Successfully!')
            })
            .catch(error => {
                toast.error(error?.message)
            })
    }


    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);


    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    document.querySelector('html').setAttribute('data-theme', darkMode? 'dark':'light') 


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
                                <li><NavLink to={`/myCart/${id}`}>My Cart</NavLink></li>

                            </ul>
                        </div>
                        <div className="h-14 lg:flex items-center lg:gap-2">
                            <img className="lg:w-10 mx-auto lg:mx-0 w-5" src="https://i.ibb.co/3fP9mBm/sm-5ad1c8addfe79-removebg-preview-1-removebg-preview.png" alt="" />
                            <h1 className="lg:font-semibold lg:text-3xl uppercase">Road<span className="lg:font-bold text-blue-700">Wiz</span></h1>
                        </div>
                        <div className='lg:ml-10 ml-3 lg:border-2 border-blue-500 rounded-full lg:px-2 lg:pt-1 pb-[2px]'>
                            <button
                                onClick={toggleDarkMode}
                                
                            >
                                {darkMode ? <FiSun></FiSun> : <BsMoon></BsMoon>}
                            </button>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul id='navbar' className="menu menu-horizontal gap-x-5 px-1">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/addProduct'>Add Product</NavLink></li>
                            <li><NavLink to={`/myCart/${id}`}>My Cart</NavLink></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user &&
                            <div className='flex items-center lg:gap-2 lg:mr-6'>
                                <p className='lg:font-semibold text-center lg:text-right text-sm lg:text-base'>{user.displayName}</p>
                                <img className={user.photoURL && 'lg:w-9 lg:h-9 h-5 w-5 rounded-full border-2 border-blue-500'} src={user.photoURL} alt="" />
                            </div>
                        }
                        <div>
                            {
                                user ?
                                    <button onClick={handleLogOut} className='bg-blue-600 text-white lg:py-2 lg:px-5 rounded lg:font-semibold'>LogOut</button> :
                                    <Link to='/login'><button className='bg-blue-600 text-white lg:py-2 lg:px-5 rounded lg:font-semibold'>Login</button></Link>
                            }
                        </div>
                    </div>
                </div>
                <Toaster></Toaster>

            </div>
        </div>
    );
};

export default Navbar;