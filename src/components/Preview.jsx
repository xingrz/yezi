import React, { Component } from 'react';

import styles from '../styles/yezi';

export default class Preview extends Component {

  render() {
    return (
      <div className={styles.outer}>
        <div className={styles.inner}>

          <div className={styles.top}>{this.props.top}</div>

          <div className={styles.main}>

            <div className={styles.real}>{this.props.real}</div>

            <div className={styles.brand}>{this.props.brand}</div>

            <div className={styles.year}>{this.props.year}</div>
            <div className={styles.small}>{this.props.small}</div>

            <div className={styles.sub}>{this.props.sub}</div>

            <div className={styles.big}>{this.props.big}</div>

          </div>

        </div>

        <div className={styles.footer}>
          <div className={styles.footerTitle}>{this.props.foot}</div>
          <div className={styles.footerText}>{this.props.end}</div>
        </div>

      </div>
    );
  }

}
