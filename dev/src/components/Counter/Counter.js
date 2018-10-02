import React from "react";
import Wrapper from "../Wrapper";
import Title from "../Title";
import Instructions from "../Instructions";
import FriendCard from "../FriendCard";
import friends from "../../friends2.json";
import Rand from "../Rand";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0,
	friends
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };
  
    alreadyClicked = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: 0 });
  };
  
	randomizeFriends = () => {
		const checked = [];
		const newArr = [];
		let j=0;
		while (j<12){
			let i = Rand();
			if (checked.indexOf(i) === -1) {
				newArr.push(this.state.friends[i]);
				checked.push(i);
				j++
			} 
		}
		this.setState({friends: newArr})
	}

  // The render method returns the JSX that should be rendered
  render() {
    return (
	<Wrapper>
        <Title count={this.state.count}>Clicky Game</Title>
        <Instructions/>
		{this.state.friends.map(friend => (
          <FriendCard
            image={friend.image}
			key={friend.id}
			sid={friend.id}
			handleIncrement={this.handleIncrement}
			alreadyClicked={this.alreadyClicked}
			randomizeFriends={this.randomizeFriends}
          />
        ))}
      </Wrapper>
	
      
    );
  }

}
export default Counter;
