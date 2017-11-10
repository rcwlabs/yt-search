import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import config from '../config';

import VideoList from './components/VideoList';
import Searchbar from './components/Searchbar';

const YT_API_KEY = config.YT_API_KEY;

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: YT_API_KEY, term: 'kitty'}, (videos) => {
            this.setState({ videos });
            console.log(videos)
        });
    }

    render() {
        return(
            <div>
                <Searchbar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('container'));