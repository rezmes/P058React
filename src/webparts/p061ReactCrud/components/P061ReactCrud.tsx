import * as React from 'react';
import styles from './P061ReactCrud.module.scss';
import { IP061ReactCrudProps } from './IP061ReactCrudProps';
import { escape } from '@microsoft/sp-lodash-subset';

// P061 Display List Items of a List Using React
import * as jquery from 'jquery';

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
// P061 Display List Items of a List Using React -- componentDidMount
/**
 * componentDidMount
 */
public componentDidMount() {
  let reactcontexthandler = this;
  jquery.ajax({
    url: `${P061ReactCrud.siteurl}/_api/web/lists/getbytitle('MicrosoftSoftware')/items`,
    type: "GET",
headers: { 'Accept': 'application/json; odata = verbose;'},
success: function(resultData){
  reactcontexthandler.setState({
    listitems: resultData.d.results
  });
},
error: function(jqXHR, textStatus, errorThrown){

}
  }
  )
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

{/* P062 // Part2// P061 Display List Items of a List Using React */}
<table className= {styles.row}>
{
this.state.listitems.map(function(listitem, listitemkey) {
    let fullurl: string = `${P061ReactCrud.siteurl}/lists/MicrosoftSoftware/DispForm.aspx?ID=${listitem.ID}`;
    return (
      <tr>
        <td>
          <a className={styles.label} href={fullurl}>
            {listitem.Title}
          </a>
        </td>
        <td className='{styles.label'>
          {listitem.ID}
        </td>
        <td className={styles.label}>
          {listitem.SoftwareName}
        </td>
      </tr>
    )
})



}




</table>
<ol>
{
  this.state.listitems.map(function(listitem, listitemkey){
    let fullurl: string = `${P061ReactCrud.siteurl}/lists/MicrosoftSoftware/DispForm.aspx?ID=${listitem.ID}`;
    return(
      <li><a className={styles.label} href={fullurl}><span>{listitem.Title}</span>, <span>{listitem.SoftwareName}</span></a></li>
    )
  })
}
</ol>

      </div >
    );
  }
}
