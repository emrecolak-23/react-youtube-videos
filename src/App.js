import { Component } from 'react';

import SearchBar from './components/SearchBar';

class App extends Component {
  state = { videos: [] };

  onSubmitSearch = (term) => {
    console.log(term);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmitSearch} />
      </div>
    );
  }
}

export default App;
