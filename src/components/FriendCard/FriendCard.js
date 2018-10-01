import React from "react";
import "./FriendCard.css";


const FriendCard = props => {
	const sid = "id" + props.sid;
	function clicky () {
		var element =document.getElementById(sid);
		if (element.className === "card clicked"){
			props.alreadyClicked();
			element.classList.remove("clicked");
			return}
		props.handleIncrement();
		element.classList.add("clicked");
	};
	
	return (

  <div className="card" id={sid}>
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={clicky}/>
	  
    </div>

  </div>

)};

export default FriendCard;
