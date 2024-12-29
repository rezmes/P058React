import * as React from 'react';
import styles from './P061ReactCrud.module.scss';
import { IP061ReactCrudProps } from './IP061ReactCrudProps';
import { escape } from '@microsoft/sp-lodash-subset';

// P061 Display List Items of a List Using React
import * as jQuery from 'jquery';

export interface IP061ReactCrudState {
  listitems: [
    {
      "Title": "",
      "ID": "",
      "SoftwareName": ""
    }
  ]
}

export default class P061ReactCrud extends React.Component < IP061ReactCrudProps, IP061ReactCrudState > {
// P061 Display List Items of a List Using React

static siteurl: string = "";
public constructor(props: IP061ReactCrudProps, state: IP061ReactCrudState) {
  super(props);
this.state = {
  listitems: [
    {
    "Title": "",
    "ID": "",
    "SoftwareName": ""
    }
  ]
};
P061ReactCrud.siteurl = this.props.websiteurl;

}





  public render(): React.ReactElement<IP061ReactCrudProps> {
    return(
      <div className = { styles.p061ReactCrud } >
  {/* <div className={styles.container}>
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
  </div> */}


      </div >
    );
  }
}
