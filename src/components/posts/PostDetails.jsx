import './AllPosts.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { deleteLike, getPostById, submitLike } from '../../services/postsServices.js'

export const PostDetails = ({ currentUser }) => {
    const { postId } = useParams()

    const [post, setPost] = useState({})
    const [userIsAuthor, setUserIsAuthor] = useState(false);
    const [isliked, setIsliked] = useState(false)
    const [likes, setLikes] = useState([])


    useEffect(() => {
        getAndSetPost();
    }, [postId]);

    useEffect(() => {
        setIsliked(likes?.some((like) => like.userId === currentUser.id));
    }, [likes, currentUser]);

    useEffect(() => {
        setUserIsAuthor(post.userId === currentUser.id);
        setLikes(post.likes);
    }, [post, currentUser]);

    const getAndSetPost = () => {
        getPostById(postId)
            .then((data) => {
                const postObj = data[0];
                setPost(postObj);
            })
            .catch((error) => {
                console.error('Error fetching post:', error);
            });
    };





    const handleLike = () => {
        const newLike = {
            postId: post.id,
            userId: currentUser.id
        };
        submitLike(newLike)
            .then(() => getAndSetPost())
            .catch((error) => {
                console.error('Error submitting like:', error);
            });
    };
    
    
    
    
    const handleUnlike = () => {
        const likeObject  = likes?.find((like) => like.userId === currentUser.id);
        const likeId      = likeObject?.id;

        console.log(likeId)
        deleteLike(likeId).then(() => getAndSetPost())
            .catch((error) => {
                console.error('Error deleting like:', error);
            });
    };








    return (<section className='details-container'>

        <div className='deatils-post'>

            <h5>Author:{post.user?.name}</h5>
            <h5>Date Posted:{post.date}</h5>
            <div className='blog-header'>
                <h2>{post?.title}</h2>
            </div>
            <div className='img-container'>
                <img className='blog-post-img' src={post?.image} />
            </div>
            <div className='blog-post-p'>
                <p>{post?.body}</p>
            </div>
            <div>
                <h2>Topic:{post.topic?.name}</h2> <h2>Likes:{post.likes?.length}</h2>
            </div>



            {/* this is a conditainal statment below to either display the edit or like button on a certin post  may need to modulize this code -well see*/}
            {!userIsAuthor && !isliked && (


                <div className="post-likes">
                    <button onClick={handleLike} className='like-btn'>Like</button>
                </div>
            )}

            {!userIsAuthor && isliked && (

                <div className="post-likes">
                    <button onClick={handleUnlike} className='like-btn'>unlike</button>
                </div>

            )}







            {userIsAuthor && (
                <div>
                    <button className='like-btn'>Edit</button>
                </div>
            )}

        </div>



    </section>

    )


}