// const elemHeading = React.createElement("h1", {
//     "id": "headingId",
// }, "Namaste React Hello World using React");
// const doomRoot = ReactDOM.createRoot(document.getElementById("root"));
// doomRoot.render(elemHeading);

/**
 * 
 * <div id="parent">
 *   <div id="child-1">
 *     <h1>Heading-1</h1>
 *     <h2>Heading-2</h2>
 *   </div>
 *   <div id="child-2">
 *     <h1>Heading-3</h1>
 *     <h2>Heading-4</h2>
 *   </div>
 * </div>
 * 
 */

// const parentElm = React.createElement("div", {"id": "parentDiv"}, 
//     React.createElement("div", {"id": "childDiv"}, 
//         React.createElement("h1", {}, "Heading - grand child")
//     )
// )

const parentDiv = React.createElement("div", {"id":"parent"}, [
    React.createElement("div", {"id":"child-1"},[
        React.createElement("h1", {}, "Heading-1 by React"),
        React.createElement("h2", {}, "Heading-2 by React")
    ]),
    React.createElement("div", {"id":"child-2"}, [
        React.createElement("h1", {}, "Heading-3 by React"),
        React.createElement("h2", {}, "Heading-4 by React")
    ])
])

const rootElemnt = ReactDOM.createRoot(document.getElementById("root"));
rootElemnt.render(parentDiv);