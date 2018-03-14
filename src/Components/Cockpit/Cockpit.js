import React, { Fragment } from 'react';

import classes from './Cockpit.css';

const Cockpit = (props) => {

        // dynamic classes
        let btnClass = classes.Button;
        let assignedClasses = [];
        if (props.showPeople) {
            btnClass = [classes.Button, classes.Red].join(' ');
        }
        if (props.persons.length <= 2) {
          assignedClasses.push( classes.red );
        }
        if (props.persons.length <= 1) {
          assignedClasses.push( classes.bold);
        }

        

    return (
        <Fragment>
            <h1>Hi, I'm Tims React App</h1>
            <p className={assignedClasses.join(' ')} >This Works Great!</p>
            <button className={btnClass} onClick={props.clicked} >
                Toggle People
            </button>
        </Fragment>
    );
};

export default Cockpit;