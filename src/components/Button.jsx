import React, { Component } from 'react';

import styles from '../styles/button';

export default class Button extends Component {

  render() {
    return (
      <button
        className={styles.button}
        {...this.props}
      />
    );
  }

}
