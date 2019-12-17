import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import logo from '../resources/celeraLogo.jpg'
import { Link } from 'react-router-dom'

import pdf from '../resources/XC9281-XC9282.pdf'

export default class DownloadButton extends Component {
    state = {}

    constructor() {
        super()
        // this.setState({ isDataFetched: false })
    }

    render() {
        return (<a href={pdf} download={this.props.name}>Download pdf</a>)
    }

}
{/* // render() {
                //     // if (!this.state.isDataFetched) return null;
                //     return (
                //         // <Button variant="info" onClick={() => this.pdfDownload(this.state.chip_name)}> Download Datasheet</Button>
                //         <Link to="XC9281-XC9282.pdf" target="_blank" download>Download</Link>
                //     )
                // }

                pdfDownload = (id) => {
                    fetch('https://www.pdf995.com/samples/pdf.pdf', {
                        method: 'get',
                        headers: {
                            Accept: 'application/octet-stream',
                            'Content-Type': 'application/octet-stream'
                        }
                    }).then((res) => res.json());
                };
            } */}

