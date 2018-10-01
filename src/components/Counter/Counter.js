import React from "react";
import Wrapper from "../Wrapper";
import Title from "../Title";
import Instructions from "../Instructions";
import FriendCard from "../FriendCard";
import friends from "../../friends2.json";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
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

  // The render method returns the JSX that should be rendered
  render() {
    return (
	<Wrapper>
        <Title count={this.state.count}>Clicky Game</Title>
        <Instructions/>
		{friends.map(friend => (
          <FriendCard
            image={friend.image}
			key={friend.id}
			sid={friend.id}
			handleIncrement={this.handleIncrement}
			alreadyClicked={this.alreadyClicked}
          />
        ))}
      </Wrapper>
	
      
    );
  }

}
export default Counter;
