import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';
class Users extends Component {
  listUsers = () => {
    return this.props.users.map((user, index) => {
      return <li key={index}>{user.username}</li>
    })
  }

  render() {
    console.log(this.props.users);
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.listUsers()}
          {/* In addition, display the total number of users curently in the store */}
          <h4>Total Users:</h4>
          <div>{this.props.users.length}</div>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
    users: state.users
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
