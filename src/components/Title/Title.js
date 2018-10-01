import React, {Fragment} from "react";
import "./Title.css";

const Title = props => {
	return (
	<Fragment>
	<h1 className="title">{props.children}</h1>
	<h2>Score: {props.count}</h2>
		
	</Fragment>

	);}

export default Title;
