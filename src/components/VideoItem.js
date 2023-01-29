import './VideoItem.css';
import { Component } from 'react';

class VideoItem extends Component {
  render() {
    const { video, onVideoSelect } = this.props;
    return (
      <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
