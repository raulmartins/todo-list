import React from 'react'
import If from './if.jsx'

export default (props) => (
    <If test={!props.hide} >
        <div>
            <button className={'btn btn-'+props.style} onClick={props.onClick}>
                <i className={'fa fa-'+props.image}></i>
            </button>
        </div>
    </If>
)