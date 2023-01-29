import { Component } from 'react';

import VideoItem from './VideoItem';

class VideoList extends Component {
  renderedList = () => {
    const { videos, onVideoSelect } = this.props;
    const renderedVideos = videos.map((video) => {
      return (
        <VideoItem
          video={video}
          onVideoSelect={onVideoSelect}
          key={video.id.videoId}
        />
      );
    });

    return renderedVideos;
  };

  render() {
    return <div className="ui relaxed divided list">{this.renderedList()}</div>;
  }
}

export default VideoList;
