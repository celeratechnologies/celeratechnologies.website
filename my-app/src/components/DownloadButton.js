import React, { Component } from 'react';
import pdf from '../resources/XC9281-XC9282.pdf'

export default class DownloadButton extends Component {
    render() {
        console.log(`./${this.props.chip}/${this.props.file}.pdf`)
        return (<a href={`./${this.props.chip}/${this.props.file}.pdf`}>Download pdf</a>)
    }
    // https://medium.com/yellowcode/download-api-files-with-react-fetch-393e4dae0d9e

}


