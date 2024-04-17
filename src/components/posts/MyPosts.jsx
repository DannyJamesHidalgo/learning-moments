
import { deletePost, getAllPosts } from "../../services/postsServices.js"
import { useEffect, useState } from "react"






export const MyPosts = ({ currentUser }) => {
    const [allPosts, setAllPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])


    useEffect(() => {
        getAllPosts().then(postsArray => {
            setAllPosts(postsArray)
        })
        console.log("posts are set!")

    }, [])

    useEffect(() => {
        const foundPosts = allPosts.filter((post) => post.userId === currentUser.id)
        setFilteredPosts(foundPosts)
        console.log("my Posts are set")
    }, [allPosts])



    const handleDelete = (event) => {

        const postId = event.target.value
        deletePost(postId)

    }

    return (<div>
        <div>
            <ul>
                {filteredPosts.map((post) => {
                    if (post.userId === currentUser.id) {
                        return (
                            <div>
                                <li>{post.title}</li>
                                <button onClick={handleDelete} value={post.id}>delete</button>

                            </div>

                        )

                    }


                })}

            </ul>

        </div>





    </div>









    )







}