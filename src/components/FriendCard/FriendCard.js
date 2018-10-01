import React from "react";
import "./FriendCard.css";



const FriendCard = props => {
	const sid = "id" + props.sid;
	const removeEl = () => {
		var els = document.getElementsByClassName('card clicked')
		while (els[0]) {
			els[0].classList.remove('clicked')
		  }
	}
	
	const Clicky = () => {
		var element =document.getElementById(sid);
		if (element.className === "card clicked"){
			removeEl();
			props.alreadyClicked();
		} else {
			props.handleIncrement();
			element.classList.add("clicked");
		}
		props.randomizeFriends();
	};
	
	return (

  <div className="card" id={sid}>
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={Clicky}/>
	  
    </div>

  </div>

)};

export default FriendCard;
