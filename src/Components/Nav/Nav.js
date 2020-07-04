import React from 'react';
import classes from './Nav.module.scss';
import Logo from '../Logo/Logo'
import Tab from '../Tabs/Tab';
import img1 from '../../img/home-6-24.png';
import img2 from '../../img/computer-4-24.ico';
import img3 from '../../img/university-icon-18-24.png'


const Nav = props => {
    return (
        <div className={classes.Nav}>
            <Logo />
            <Tab color='#fb6b5b' img={img1} to='/'/>
            <Tab color='#4cc0c1' img={img2} to='/work'/>
            <Tab color='#ffc333' img={img3} to='/univer'/>  
        </div>
    )
}

export default Nav;