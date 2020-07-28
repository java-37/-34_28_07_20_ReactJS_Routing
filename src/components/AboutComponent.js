import React from 'react';

export default (props) => {
    console.log(props);
    return (
        <div style={{display:'flex'}}>
            <ul>
                <li><button onClick={() => props.history.push('/contacts')}>Go to contacts</button></li>
            </ul>
        </div>
    );
}