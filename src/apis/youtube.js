import axios from 'axios';

const KEY = 'AIzaSyC1_sx3vUNg8IoqSK9-FuKe8KdgoLClpy8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
