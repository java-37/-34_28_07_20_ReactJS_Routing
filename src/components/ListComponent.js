import React from 'react';
import { NavLink,Route } from 'react-router-dom';
import ViewListComponent from './ViewListComponent';

export default (props)=>{
    return (
        <div style={{display:'flex'}}>
            <ul>
                <li><NavLink to="/list/1">Item 1</NavLink></li>
                <li><NavLink to="/list/2">Item 2</NavLink></li>
                <li><NavLink to="/list/3">Item 3</NavLink></li>
            </ul>
            <Route path="/list/:id" component={ViewListComponent}/>
        </div>
    );
}