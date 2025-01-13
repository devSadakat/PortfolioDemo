import "../Expartise/expartise.css"

import html from "../../assets/expertise/html.jpeg"
import css from "../../assets/expertise/css.jpeg"
import javaScript from "../../assets/expertise/js.png"
import python from "../../assets/expertise/Pithon.jpeg"
import c from "../../assets/expertise/c.png"
// import react from "../../assets/expertise/"
import node from "../../assets/expertise/node.png"
import bootstrap from "../../assets/expertise/bootstrap.png"
import tailwind from "../../assets/expertise/tailwind.jpeg"
import github from "../../assets/expertise/gitHub.jpg"
import express from "../../assets/expertise/express.png"
import mongoDb from "../../assets/expertise/mongo.png"
import firebase from "../../assets/expertise/firebase.webp"

const Expartise = () => {
    return (
        <div id="expartise">
            <div id="text">
                <h2>Expartise</h2>
                <p>Hi there, I am showing some of my expartise here. </p>
            </div>
            <div className="image">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={javaScript} alt="" />
                <img src={python} alt="" />
                <img src={c} alt="" />
                <img src={node} alt="" />
                <img src={bootstrap} alt="" />
                <img src={tailwind} alt="" />
                <img src={github} alt="" />
                <img src={express} alt="" />
                <img src={mongoDb} alt="" />
                <img src={firebase} alt="" />
            </div>
        </div>
    );
};

export default Expartise;