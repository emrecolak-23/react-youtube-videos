import { Component } from 'react';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

import youtube from './apis/youtube';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  onSubmitSearch = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    console.log('from the app', video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmitSearch} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
