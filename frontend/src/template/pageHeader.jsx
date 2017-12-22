import React from 'react'

export default props =>(
    <header className='page-header'>
        <h2>{props.name}</h2> <small>{props.subtitle}</small>
    </header>
)