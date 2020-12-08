import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import ListItem from './components/ListItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      issues: [],
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const res = await fetch('https://api.github.com/repos/facebook/react/issues');
    this.setState({
      issues: await res.json(),
    })
  }

  handleChange(e) {
    const data = this.state.issues.filter((issue) => issue.title.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({
      filteredIssues: data,
    })
  }

  render() {
    return (
      <div className="App">
        <p></p>
        <Search handleChange={this.handleChange} />
        <ul>
          {this.state.filteredIssues && this.state.filteredIssues.map((issue) => {
            return <ListItem issue={issue} />
          })}
        </ul>
      </div>
    );
  }
}

export default App;
