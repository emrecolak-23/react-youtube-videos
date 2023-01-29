import { Component } from 'react';

class VideoItem extends Component {
  render() {
    const { video } = this.props;
    return (
      <div>
        <img src={video.snippet.thumbnails.medium.url} />
      </div>
    );
  }
}

export default VideoItem;
