import * as React from 'react';
import styles from './ReactWebpart.module.scss';
import { IReactWebpartProps } from './IReactWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';

// P060 Understanding React Component Life Cycle
export interface IReactWebpartState {
  stageTitle: string;
}



// export default class ReactWebpart extends React.Component < IReactWebpartProps, {} > {

// P060 Understanding React Component Life Cycle
export default class ReactWebpart extends React.Component < IReactWebpartProps, IReactWebpartState > {

// P060 Understanding React Component Life Cycle ====-------- constructor====
public constructor(props:IReactWebpartProps, state: IReactWebpartState){

super(props);
this.state = {
  stageTitle : '1. Call it whenever sets'
};
this.updateState = this.updateState.bind(this);
console.log("1. Stage Title from Constructor:" +this.state.stageTitle);

}
// P060 Understanding React Component Life Cycle ====-------- updateState====
public updateState(){
  this.setState({
    stageTitle: '4. updateState has been called'
  });
}
// P060 Understanding React Component Life Cycle ====--------/\/\/\\/\\/\/\/ component will mount====

/**
 * componentwillmWuntM */
public componentWillMount() {
  console.log('2. componentwillmount has been called')
}
// P060 Understanding React Component Life Cycle ====--------/\/\/\\/\DID DID DID\/\/\/ component Did mount====

/**
 * componentDidMount
 */
public componentDidMount() {
  console.log('3.Stage Title from componentDidMount: ' +this.state.stageTitle);
  this.setState({
    stageTitle: '5. componentDidMount has been called'
  });
}



  public render(): React.ReactElement<IReactWebpartProps> {
    return(
      <div className = { styles.reactWebpart } >


  {/* <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.column}>
        <span className={styles.title}>Welcome to SharePoint!</span>
        <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
        <p className={styles.description}>{escape(this.props.description)}</p> */}

         {/* ---------------P059  ReadSiteProperties----------------- */}


         {/* <p className={styles.description}>Absolute URL: {escape(this.props.absoluteurl)}</p>
         <p className={styles.description}>Title: {escape(this.props.sitetitle)}</p>
         <p className={styles.description}>Relative URL: {escape(this.props.relativeurl)}</p>
         <p className={styles.description}>User Name: {escape(this.props.username)}</p> */}

        {/* <a href='https://aka.ms/spfx' className={styles.button}>
          <span className={styles.label}>Learn more</span>
        </a>
      </div>
    </div>
  </div>*/}


{/* // P060 Understanding React Component Life Cycle */}
  <div>
          <h1> React Component's Lifecycle</h1>
          <h3>{this.state.stageTitle}</h3>
          <button onClick={this.updateState} type="button">Click Here To Update State Data!</button>
  </div>



      </div >
    );
  }

// P060 Understanding React Component Life Cycle ====--------/un\UN/\/\unMount\/\\/\/\/ component will unmount====
/**
 * componentWillUnmount
 */
public componentWillUnmount() {
console.log('6. Component Will UN-UN-unmount has been called')
}


}
