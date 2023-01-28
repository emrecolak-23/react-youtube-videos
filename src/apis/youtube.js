import axios from 'axios';

const KEY = 'AIzaSyDXHe2kbgS5b2Ss8zEEXOfXgVbEaS308Ac';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
