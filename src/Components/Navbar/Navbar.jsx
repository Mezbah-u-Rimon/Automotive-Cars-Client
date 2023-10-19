import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
    }

    const navbar = <>
        <li> <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white bg-red-600 " : "text-red-600 bg-white"}> Home </NavLink>
        </li>
        {
            user?.email && <>
                <li> <NavLink to="/addProduct" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-white bg-red-600 " : "text-red-600 bg-white"
                }> Add Product </NavLink></li>

                <li> <NavLink to="/myCart" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-white bg-red-600 " : "text-red-600 bg-white"
                }>My Cart  </NavLink></li>

            </>
        }

        <li> <NavLink to="/login" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white bg-red-600 " : "text-red-600 bg-white"
        }> Login </NavLink></li>

        <li> <NavLink to="/register" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white bg-red-600 " : "text-red-600 bg-white"
        }> Register </NavLink></li>

    </>


    return (

        <div className="navbar max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <img className="h-[80px]" src="https://i.ibb.co/fvrGv40/360-F-502880411-Sq4ue-CVz1-PHi-Bw-FDxh-Qcn-BB4-IWg-Vayl-K-removebg-preview.png" alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>

            <div className="navbar-end">

                {
                    user?.email ? <div className="dropdown dropdown-end flex items-center">
                        <button onClick={handleLogOut} className="btn btn-sm btn-ghost bg-red-600 text-white">Logout</button>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt={user.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                            </li>
                            <li>
                                <button onClick={handleLogOut} className="btn btn-sm  btn-ghost bg-red-600 text-white">Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm  btn-ghost bg-red-600 text-white">Login</button>
                        </Link>
                }
            </div>
        </div >
    );
};

export default Navbar;