import axios from "axios";
import { useParams } from "react-router"
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from './Context';

export default function FullPost(props) {
    let { id } = useParams();

    const { user, isLoggedIn } = useContext(AuthContext);
    const [post, setPost] = useState(null);
    const [post_author, setAuthor] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [empty, setEmpty] = useState(false);

    useEffect(() => {
        async function load_data() {
        let response = await axios.get("http://localhost:5002/post/" + id)
        let data = response.data;
        if (data.message == "No post found"){
            console.log("Empty");
            setEmpty(true);
        }
        else {
            let author = (await axios.get("http://localhost:5002/user_id/" + data.user)).data.username;
            setAuthor(author);
            setPost(data);
        }
        setLoaded(true);
        }
        load_data();
    }, [])
    if (loaded){
        if (empty)
            return (
                <div>No post found</div>
            )
        return (
            <div className="h-screen flex flex-col items-center mt-5">
                <figure>
                    <img src={post.picture} alt="Post Image" className="h-60 rounded-2xl"/>
                </figure>
                <div className="card-body h-screen">
                    <h2 className="card-title"><b>Posted By:</b>{post_author}</h2>
                    <h2 className="card-title"><b>Title:</b>{post.title}</h2>
                    <h2 className="card-title"><b>Description: </b>{post.description}</h2>
                    <h2 className="card-title"><b>Rating: </b>{post.rating} / 5</h2>
                    <h2 className="card-title"><b>Location: </b>{post.location.name}</h2>

                    <iframe
                        className="border-2 h-85 rounded-2xl"
                        loading="lazy"
                        src={`https://maps.google.com/maps?q=${post.location.lat},${post.location.long}&t=&z=15&ie=UTF8&iwloc=&output=embed&maptype=satellite`}>
                    </iframe>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="h-screen text-center">Data could not be loaded</div>
        )
    }
}
