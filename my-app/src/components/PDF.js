import React, { Component } from "react";
import { Document, Page } from "react-pdf";
/* eslint-disable import/first */
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class PDF extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    file: './' + this.props.chip + '/' + this.props.file + '.pdf',
    size: "thumbnail"
  };

  componentDidMount() {
    this.setState({size: this.props.size})
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Document
          file={this.state.file}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page width={this.state.size} pageNumber={pageNumber} />
        </Document>
        {/* <p>
          Page {pageNumber} of {numPages}
        </p> */}
      </div>
    );
  }
}
