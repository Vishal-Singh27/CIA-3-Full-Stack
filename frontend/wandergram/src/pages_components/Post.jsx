import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export function Post(props) {
    return (
        <button className="w-50 hover:cursor-pointer m-3" onClick={() => {navigate("/login")}}>
            <div className="card lg:card-side h-70  ">
                <figure>
                    <img src={props.data.picture} className="h-30 rounded-2xl" alt={"Post Image"} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{props.data.title}</h2>
                    <p>{props.data.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </button>
    );
}
