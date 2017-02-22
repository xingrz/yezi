import React, { Component } from 'react';

import styles from '../styles/input';

export default class Input extends Component {

  render() {
    return (
      <input
        className={styles.input}
        type="text"
        onChange={({ target }) => this.props.onChangeValue(target.value)}
        {...this.props}
      />
    );
  }

}
