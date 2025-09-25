import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export function Post(props) {
    let navigate = useNavigate();
    return (
        <button className="w-70 max-w-3xl hover:cursor-pointer m-3" onClick={() => {navigate(`/post/${props.data._id}`)}}>
            <div className="card lg:card-side   border ">
                <figure>
                    <img src={props.data.picture} className=" rounded-2xl" alt={"Post Image"} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{props.data.title}</h2>
                    <hr/>
                    <p>{props.data.description}</p>
                </div>
            </div>
        </button>
    );
}
