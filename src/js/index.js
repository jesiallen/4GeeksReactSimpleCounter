import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";

let seconds = 0;

function count() {
	seconds += 1;
	let secondString = `00000${seconds}`;
	let display = secondString.slice(-6);
	ReactDOM.render(
		<Home
			prop0={display.charAt(0)}
			prop1={display.charAt(1)}
			prop2={display.charAt(2)}
			prop3={display.charAt(3)}
			prop4={display.charAt(4)}
			prop5={display.charAt(5)}
		/>,
		document.querySelector("#app")
	);
}

setInterval(count, 1000);
