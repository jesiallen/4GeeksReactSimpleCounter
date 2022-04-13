import propTypes from "prop-types";
import React from "react";

const Home = (props) => {
	return (
		<div className="container">
			<div className="box">
				<i className="far fa-clock fa-xs"></i>
			</div>
			<div className="box">{props.prop0}</div>
			<div className="box">{props.prop1}</div>
			<div className="box">{props.prop2}</div>
			<div className="box">{props.prop3}</div>
			<div className="box">{props.prop4}</div>
			<div className="box">{props.prop5}</div>
		</div>
	);
};

export default Home;
