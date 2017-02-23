import React, { Component } from 'react';

import styles from '../styles/input';

export default class Input extends Component {

  render() {
    const {
      onChangeValue,
      ...others
    } = this.props;

    return (
      <input
        className={styles.input}
        type="text"
        onChange={({ target }) => onChangeValue(target.value)}
        {...others}
      />
    );
  }

}
