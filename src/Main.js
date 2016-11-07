import React, {Component} from "react";
import Form from "./Form";
import Manager from "./Manager";
import firebase from "./lib/firebase"

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.fetchRepoData = this.fetchRepoData.bind(this);
    this.state = {
      repoData: null,
    };
  }

  componentDidMount() {
    this.fetchRepoData();
  }

  fetchRepoData() {
    firebase.fetchAllRepoData().then((repoData) => this.setState({repoData}));
  }

  render() {
    const {repoData} = this.state;

    return repoData ?
      <div className="Main">
        <div className="App-header">
          <h1>Open Sauced</h1>
        </div>
        <div className="content">
          <Manager data={repoData} />
        </div>
        <div className="content">
          <Form fetchData={this.fetchRepoData} repoData={repoData} />
        </div>
      </div>
        : <div>...Loading</div>
  }
}

