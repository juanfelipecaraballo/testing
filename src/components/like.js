import React, { Component } from "react";

class Like extends Component {
  state = {
    likes: 0,
  };

  handleIncrement = () => {
    this.setState({ likes: this.state.likes + 1 });
  };

  handleDecrement = () => {
    this.setState({ likes: this.state.likes - 1 });
  };

  render() {
    return (
      <div>
        <p data-testid="label-likes">Likes: {this.state.likes}</p>
        <button data-testid="like-increment" id="increment" onClick={this.handleIncrement}>
          Like
        </button>
        <button data-testid="like-decrement" id="decrement" onClick={this.handleDecrement}>
          {" "}
          Dislike
        </button>
      </div>
    );
  }
}

export default Like;