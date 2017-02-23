import React, { Component } from 'react';
import html2canvas from 'html2canvas';

import styles from '../styles/yezi';

export default class Preview extends Component {

  toCanvas() {
    return html2canvas(this.element);
  }

  render() {
    return (
      <div className={styles.outer} ref={ref => this.element = ref}>
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

        {this.props.excited ? null : (
          <div className={styles.excited}>
            由 <a href="http://excited.aja.im/">@_馒头好不好_</a> 生成
          </div>
        )}

      </div>
    );
  }

}
