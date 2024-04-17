import { getAllPosts } from "../../services/postsServices.js"
import { useState, useEffect } from "react"
import './AllPosts.css'
import { Post } from './Post.jsx'
import { FilterBar } from "../filterBar/FilterBar.jsx"
import { getAllTopics } from "../../services/topicsService.js"
import { Link } from "react-router-dom"



export const AllPosts = ({currentUser}) => {
    const [allPosts, setAllPosts] = useState([])
    const [allTopics, setAllTopics] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredPosts, setFilteredPosts] = useState([])
    const [topicSelection, setTopicSelection] = useState([])


    useEffect(() => {
        getAllPosts().then(postsArray => {
            setAllPosts(postsArray)
        })
        console.log("posts are set!")

    }, [])

    useEffect(() => {
        getAllTopics().then(topicsArray => {
            setAllTopics(topicsArray)
        })
        console.log("topics are set")

    }, [])
    //this will take an input to then filter the posts to match the title 
    useEffect(() => {
        const foundPosts = allPosts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredPosts(foundPosts)

    }, [searchTerm, allPosts])

    //this is taking in the option from the search bar 
    useEffect(() => {
        const foundPosts = allPosts.filter((post) => post.topic.id === parseInt(topicSelection[0]))
        setFilteredPosts(foundPosts)
    }, [topicSelection])


    return (<>
        <div className="filter-box"><FilterBar setSearchTerm={setSearchTerm} setTopicSelection={setTopicSelection} allTopics={allTopics} /></div>
        <div className="posts">
            {filteredPosts.map(postObj => {
                return (


                    <Post Post={postObj} key={postObj.id} currentUser={currentUser} />



                )

            })}

        </div>








    </>)







}











/* htmlString += `<div class="post-card">
      <img class="post-img" src="${post.imageUrl}">
      <div class="post-info>
        <li class="post-title">${post.title}</li>
        <li class="post-topic">Category: ${post.topic.name}</li>
        <li class="piko-likes">Abilities: ${array.legnth} inches</li>
       
      </div>
      </div>`
  } */ 