import { LikeBtn } from "../likes/ LikeBtn.jsx"
import './AllPosts.css'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"




export const Post = ({ Post }) => {

    return (<div key={Post.id} className="post-card">
        <div className="img-container">
            <img className="post-img" src={Post.image} />
        </div>
        <Link key={Post.id} to={`/posts/${Post.id}`}>
            <article>
                <h1 className="post-title" value={Post.id}>{Post.title}</h1>
            </article>
        </Link>

        <div className="post-info">
            {/* will need to do an onclick to invoke the the function to go to that post details page */}<div>
                <li className="post-topic">Topic: {Post.topic.name}</li>
                <div className="post-topic">



                    <div >
                        <h2>likes:{Post.likes.length}</h2>
                    </div>
                </div>
            </div>

        </div>
    </div>)

}