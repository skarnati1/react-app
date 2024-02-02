
/** createlement will create an object. Dom.render will make use of that objecta nd convert it to html tags */
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
    "div",
     {id:"parent"},[
        React.createElement(
            "div",
            {id:"child"},[React.createElement(
                "h1", {}, "this is an heading"), React.createElement(
                    "h2", {}, "this is an heading")]
        ),
        React.createElement(
            "div",
            {id:"child2"},[React.createElement(
                "h1", {}, "this is an heading"), React.createElement(
                    "h2", {}, "this is an heading")]
        )
     ]
    )
const heading = React.createElement("h1", {id:"heading"}, "Sample heading using React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

