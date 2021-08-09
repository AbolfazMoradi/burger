import React from 'react';
import Aux from '../../hoc/auxx';
import Styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => (
    <Aux>
        <Toolbar />
        <main className={Styles.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;