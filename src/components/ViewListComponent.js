import React from 'react';

export default (props) => {
    console.log(props);
    return (
    <h3>Component with id: {props.match.params.id}</h3>
    );
}