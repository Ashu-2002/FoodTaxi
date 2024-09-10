import React from "react";
import ReactDOM from "react-dom/client";

// Legacy way to create an element in React
const heading = React.createElement("h1", {id : "heading"}, "Hello World from React !");
const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"},
     React.createElement("h1", {}, "I'm an H1 tag")));


// Better way to create an element in React
const heading2 = <h1 id="heading">Hello World from React !</h1>;


// React Functional Component
const Component = () => {
    return <h1 id="heading">Hello World from React !</h1>;
}

const HeadingComponent = () => (
    <>
    {/* This is how we can use component inside component */}
    <Component/>
    <h1>Hello from Component !</h1>;
    </>
);

// same can also be written in this way if it has single line
// const HeadingComponent = () => <h1>Hello from Component</h1>;

// How to render this component ?
//root.render(<HeadingComponent/>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
//root.render(parent);
