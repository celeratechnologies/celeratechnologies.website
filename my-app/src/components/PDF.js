import React, { Component } from "react";
import { Document, Page } from "react-pdf";
/* eslint-disable import/first */
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class PDF extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    file: `./Tokyo/${this.props.file}.pdf`,
    size: "thumbnail"
  };

  componentDidMount() {
    this.setState({
      size: this.props.size,
    })
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <Document
          file={this.state.file}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page width={this.state.size} pageNumber={pageNumber} renderMode="svg"
          />
        </Document>
      </div>

    );
  }
}
