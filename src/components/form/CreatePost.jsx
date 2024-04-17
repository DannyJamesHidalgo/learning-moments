
import { useState, useEffect } from "react";
import { submitPost } from "../../services/postsServices.js";
import { Link, useNavigate } from "react-router-dom";
import "./CreatePost.css"
import { getAllTopics } from "../../services/topicsService.js";
import { TopicSelction } from "./TopicSelection.jsx";

export const CreatePost = ({ currentUser }) => {



    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [topicId, setTopicId] = useState([])
    const [allTopics, setAllTopics] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        getAllTopics().then(topicsArray => {
            setAllTopics(topicsArray)
        })
        console.log("topics are set")

    }, [])


    const handleSave = async () => {
        const postData = {
            title: title,
            body: body,
            image: imageURL,
            topicId: topicId,
            userId: currentUser.id,
            date: new Date().toLocaleDateString('en-GB')
        };

        try {
            await submitPost(postData)
        } catch (error) {
            console.error('Error submitting post:', error);
            // Handle the error (e.g., display an error message to the user)
        }
    }
    return (
        <div className="create-post-container">
            <h1 className="create-post-h1">Create New Post</h1>
            <form className="create-post-form" >
                <div>
                    <label className="create-post-label">Title:</label>
                    <input className="create-post-input" type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                </div>
                <div>
                    <label className="create-post-label">Body:</label>

                    <div>
                        <textarea className="create-post-input" value={body} onChange={(event) => setBody(event.target.value)} />
                    </div>

                </div>

                <div className="create-post-label">
                    <TopicSelction setTopicId={setTopicId} allTopics={allTopics} />
                </div>


                <div>
                    <label className="create-post-label">Image URL:</label>
                    <div>
                        <input className="create-post-input" type="text" value={imageURL} onChange={(event) => setImageURL(event.target.value)} />
                    </div>
                </div>

                <Link to={`/posts`} >
                    <button onClick={handleSave} type="submit">Submit</button>
                </Link>
            </form>
        </div>
    )


}