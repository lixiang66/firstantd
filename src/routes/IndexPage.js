import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import {Link} from 'react-router';

function IndexPage({children}) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li><Link to="/products">products</Link></li>
        <li><Link to="/example">example</Link></li>
      </ul>
      <div>
      {children}
      </div>
    </div>
    
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
