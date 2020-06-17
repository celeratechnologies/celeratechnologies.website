import React, { Component } from 'react';

export default class DownloadButton extends Component {
    render() {
        return (<a href={`./${this.props.chip}/${this.props.file}.pdf`}>Download pdf</a>)
    }
    // https://medium.com/yellowcode/download-api-files-with-react-fetch-393e4dae0d9e

}


