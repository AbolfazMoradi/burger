import React from 'react';
import Styles from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={Styles.BuildControl}>
        <div className={Styles.Label}>{props.label}</div>
        <button className={Styles.Less} onClick={props.removed}>Less</button>
        <button className={Styles.More} onClick={props.added}>More</button>
    </div>
);

export default buildControl;