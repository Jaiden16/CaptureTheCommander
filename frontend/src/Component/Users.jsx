import React, { Component } from "react";
import axios from "axios";
import {getApi} from "../util/util"
const API = getApi()

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    try {
      let { data } = await axios.get(`${API}/users`);
      this.setState({
        users: data.payload,
      });
    } catch (err) {
      console.log("err", err);
    }
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {this.state.users.map((user, i) => {
            return (
              <li className="user-name" key={i}>
                <p>
                  id:{user.id} user:{user.username}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Users;
