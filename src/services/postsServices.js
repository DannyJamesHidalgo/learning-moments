export const getAllPosts = () =>{
    return fetch("http://localhost:8088/posts?_embed=likes&_expand=topic").then((res)=> res.json())
}

export const getPostById = (postId)=>{
    return fetch(`http://localhost:8088/posts?id=${postId}&_expand=topic&_expand=user&_embed=likes`).then((res)=> res.json())
}



export const submitLike =(likedPost)=>{
    return fetch(`http://localhost:8088/likes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(likedPost),
    })

}

export const deleteLike = (likeId) => {
    return fetch(`http://localhost:8088/likes/${likeId}`, {
        method  : 'DELETE',
        headers : {
            'Content-Type' : 'application/json',
              // Add any other headers as needed, such as authorization headers
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete like');
        }
        // Return the response data if needed
        return response.json();
    })
    .catch(error => {
        console.error('Error deleting like:', error);
        // Handle errors or throw them to be handled elsewhere
        throw error;
    });
};




export const submitPost =(newPost)=>{
    return fetch(`http://localhost:8088/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(newPost),
    })

}


export const deletePost =(postId)=> {

    return fetch(`http://localhost:8088/posts/${postId}`, {
        method : 'DELETE',
        headers : {
            'Content-Type' : 'application/json',
              // Add any other headers as needed, such as authorization headers
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete post');
        }
        // Return the response data if needed
        return response.json();
    })
    .catch(error => {
        console.error('Error deleting Post:', error);
        // Handle errors or throw them to be handled elsewhere
        throw error;
    });
};

