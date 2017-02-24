import React, { Component } from 'react';

import styles from '../styles/main';
import Preview from './Preview';
import Input from './Input';
import Button from './Button';
import Downloader from './Downloader';

export default class App extends Component {

  state = {
    top: '认真做产品做不火',
    real: '搞 这 种',
    brand: '有毒',
    year: '海报',
    small: '就火成这样',
    sub: '馒头好不好',
    big: '很强',
    foot: '快去下载',
    end: '在各大应用商店',
    excited: false,
  };

  componentDidMount() {
    this.setState({ excited: !!localStorage.getItem('excited') })
  }

  async save() {
    const canvas = await this.preview.toCanvas();
    const png = canvas.toDataURL('image/png');
    this.downloader.download(png, `${this.state.brand}.png`);
  }

  excited() {
    window.location = 'https://excited.aja.im/';
    localStorage.setItem('excited', true);
  }

  render() {
    return (
      <div className={styles.container}>

        <div className={styles.preview}>
          <Preview {...this.state} ref={ref => this.preview = ref} />
        </div>

        <div className={styles.editor}>

          <Input
            value={this.state.top}
            onChangeValue={value => this.setState({ top: value })}
          />

          <Input
            value={this.state.real}
            onChangeValue={value => this.setState({ real: value })}
          />

          <Input
            value={this.state.brand}
            onChangeValue={value => this.setState({ brand: value })}
          />

          <Input
            value={this.state.year}
            onChangeValue={value => this.setState({ year: value })}
          />

          <Input
            value={this.state.small}
            onChangeValue={value => this.setState({ small: value })}
          />

          <Input
            value={this.state.sub}
            onChangeValue={value => this.setState({ sub: value })}
          />

          <Input
            value={this.state.big}
            onChangeValue={value => this.setState({ big: value })}
          />

          <Input
            value={this.state.foot}
            onChangeValue={value => this.setState({ foot: value })}
          />

          <Input
            value={this.state.end}
            onChangeValue={value => this.setState({ end: value })}
          />

          <p>
            <Button
              style={{ background: '#FE0' }}
              onClick={this.excited.bind(this)}
            >下载「馒头好不好」去水印</Button>
          </p>

          <p style={{ marginTop: 10 }}>
            <Button onClick={this.save.bind(this)}>保存图片</Button>
            <span style={{ fontSize: 16, marginLeft: 4 }}>（可能有 BUG，不行截图）</span>
          </p>

          <Downloader ref={ref => this.downloader = ref} />

        </div>

      </div>
    );
  }

}
