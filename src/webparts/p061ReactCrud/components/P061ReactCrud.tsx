import * as React from 'react';
import styles from './P061ReactCrud.module.scss';
import { IP061ReactCrudProps } from './IP061ReactCrudProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class P061ReactCrud extends React.Component < IP061ReactCrudProps, {} > {
  public render(): React.ReactElement<IP061ReactCrudProps> {
    return(
      <div className = { styles.p061ReactCrud } >
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.column}>
        <span className={styles.title}>Welcome to SharePoint!</span>
        <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
        <p className={styles.description}>{escape(this.props.description)}</p>
        <a href='https://aka.ms/spfx' className={styles.button}>
          <span className={styles.label}>Learn more</span>
        </a>
      </div>
    </div>
  </div>
      </div >
    );
  }
}
