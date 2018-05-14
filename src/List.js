import React from 'react';
import ToDo from './Todo';

export default function List( props ) {
    let List = props.tasks.map( ( element, index ) => {
        return (
            <Todo key={ index } task={ element } />
        )
    })

    return (
        <div>
            { List }
        </div>
    )
}