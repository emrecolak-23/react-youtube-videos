import { Component } from 'react';

import SearchBar from './components/SearchBar';

import youtube from './apis/youtube';

class App extends Component {
  state = { videos: [] };

  onSubmitSearch = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmitSearch} />
        <div>I have {this.state.videos.length} videos</div>
      </div>
    );
  }
}

export default App;
