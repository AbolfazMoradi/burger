import React from "react";
import Styles from './Backdrop.module.css';

const backdrop = (props) => (
    props.show ? <div className={Styles.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;