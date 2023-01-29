import { Component } from 'react';

import VideoItem from './VideoItem';

class VideoList extends Component {
  renderedList = () => {
    const { videos } = this.props;
    console.log(videos);
    const renderedVideos = videos.map((video) => {
      return <VideoItem video={video} key={video.id.videoId} />;
    });

    return renderedVideos;
  };

  render() {
    return <div>{this.renderedList()}</div>;
  }
}

export default VideoList;
