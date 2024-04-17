import { Route, Routes, Outlet } from 'react-router-dom'
import { NavBar } from '../components/nav/NavBar.jsx'
import { AllPosts } from '../components/posts/AllPosts.jsx'
import { useState, useEffect } from 'react'
import { PostDetails } from '../components/posts/PostDetails.jsx'
import { CreatePost } from '../components/form/CreatePost.jsx'
export const ApplicationViews = () => {

    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localLearningUser = localStorage.getItem("learning_user")
        const learningUserObject = JSON.parse(localLearningUser)
        setCurrentUser(learningUserObject)
    }, [])





    return (
        <Routes>
            <Route path="/" element={
                <>
                    <NavBar />
                    <Outlet />
                </>
            }>

                <Route path='posts'>
                    <Route index element={<AllPosts />} />
                    <Route path=":postId" element={<PostDetails currentUser={currentUser} />} />
                </Route>
                <Route path  = 'createPost' element  = {<CreatePost currentUser={currentUser} />} />
                
                <Route path='myPosts' element={<MyPosts/>}/>
            </Route>
        </Routes>
    )
}