import React, { Component } from 'react';

import styles from '../styles/main';
import Preview from './Preview';
import Input from './Input';

export default class App extends Component {

  state = {
    top: '这包装也有模板了',
    real: '真 的',
    brand: '可以',
    year: 'HTML',
    small: '加点样式手写',
    sub: '做成通用模板',
    big: '很强',
    foot: '真的设计',
    end: '黑白蓝黄红全用',
  };

  render() {
    return (
      <div className={styles.container}>

        <div className={styles.preview}>
          <Preview {...this.state} />
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

        </div>

      </div>
    );
  }

}
