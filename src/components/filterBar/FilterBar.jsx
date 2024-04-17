import './FilterBar.css'




export const FilterBar = ({ setSearchTerm, setTopicSelection, allTopics }) => {


    return (<div className="filter-bar">

        <div id="topics">
            <select onChange={(event) => { setTopicSelection(event.target.value) }} name="topics-dropdown">

                <option value="0" >Filter a topic</option>
                {allTopics.map((topic) => {
                    return (<option  key={topic.id}name="topic" value={topic.id}>{topic.name}</option>)

                })}


            </select>
        </div>



        <div className="post-search">
            <input type="text" placeholder="search posts"
                // value ={searchTerm}
                onChange={(event) => { setSearchTerm(event.target.value) }} />
        </div>
    </div>



    )
}