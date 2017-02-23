import React, { Component } from 'react';

export default class Downloader extends Component {

  state = {
    data: '',
    file: '',
  }

  download(data, file) {
    this.setState({ data, file });
    this.dl.click();
  }

  render() {
    return (
      <a
        ref={ref => this.dl = ref}
        style={{ display: 'none' }}
        download={this.state.file}
        href={this.state.data}
      />
    );
  }

}
