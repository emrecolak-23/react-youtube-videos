import { Component } from 'react';

class VideoList extends Component {
  render() {
    return <div>{this.props.videos.length}</div>;
  }
}

export default VideoList;
