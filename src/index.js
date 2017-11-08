import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YT_Search from 'youtube-api-search';

import config from '../config';

import VideoList from './components/VideoList';

const YT_API_KEY = config.YT_API_KEY;

export default class App extends Component {
    render() {
        return(
            <div>
                <div>Hello there my friend</div>
                <VideoList />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('container'));