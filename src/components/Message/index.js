import React, {Component} from 'react';

class Message extends Component {

  render(){
    return (
      <div className="messages-container">
        <span>{this.props.message}</span>
      </div>
    )
  }
}
export default Message