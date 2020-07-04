import React from 'react';
import classes from './Tab.module.scss';
import {NavLink} from 'react-router-dom'

const Tab = props => {
    return (
        <div className={classes.Tab} style={{backgroundColor: props.color}}>
            <NavLink to={props.to}><img src={props.img} style={{height: 20, width: 20}} alt='img'/></NavLink>
        </div>
    )
}

export default Tab;