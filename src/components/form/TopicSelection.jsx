

import './CreatePost.css'


export const TopicSelction = ({ setTopicId, allTopics }) => {


    return (

        <div>
            <select onChange={(event) => { setTopicId(event.target.value) }} name="topics-dropdown">

                <option value="0" >select a topic</option>
                {allTopics.map((topic) => {
                    return (<option  key={topic.id}name="topic" value={topic.id}>{topic.name}</option>)

                })}


            </select>
        </div>

    )
}
