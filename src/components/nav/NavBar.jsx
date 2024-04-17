import { useState, useEffect } from 'react'
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom'







export const NavBar = () => {

    const [currentUser, setCurrentUser] = useState({})






    const navigate = useNavigate()

    return <ul className='navbar'>
        <li className='navbar-item'>
            <Link to='/posts'>Main Feed</Link>

        </li>
        <li className='navbar-item'>
            <Link to='/createPost'>Create New Post</Link>

        </li>
        <li className='navbar-item'>
            <Link to='/myPosts'>My Posts</Link>

        </li>

        {localStorage.getItem("learning_user") ? (
            <li className="navbar-item navbar-logout">
                <Link
                    className="navbar-link"
                    to=""
                    onClick={() => {
                        localStorage.removeItem("learning_user")
                        navigate("/login", { replace: true })
                    }}
                >
                    Logout
                </Link>
            </li>
        ) : (
            ""
        )}


    </ul>






}