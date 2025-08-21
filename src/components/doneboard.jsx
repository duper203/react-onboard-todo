import React from 'react';

function DoneBoard(props) {
    return (    
        <div className='done-board'>
            <h1>Done List</h1>
            {props.doneList && props.doneList.map((item, index) => (
                <div key={index} className='done-item'>
                    {item}
                </div>
            ))}
        </div>
    )
}

export default DoneBoard;