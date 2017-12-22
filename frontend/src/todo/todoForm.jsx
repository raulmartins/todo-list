import React from 'react'
import IconButton from '../template/iconButton.jsx'
import Grid  from '../template/grid.jsx'

export default props => {

    const keyPress = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(e.key === 'Escape'){
            props.handleClean()
        }
    }

    return(
        <div className='row'>
            <form action="" className='todoForm'>
                <Grid cols='12 10 9'>
                    <input onKeyUp={keyPress} type="text" id='description' value={props.description} onChange={props.handleChange} className='form-control'  placeholder='descrição'/>
                </Grid>
                <Grid cols='12 3 3' id='buttons'>
                    <IconButton style='primary' image='plus'  onClick={props.handleAdd}/>
                    <IconButton style='info' image='search'  onClick={props.handleSearch}/>
                    <IconButton style='default' image='close'  onClick={props.handleClean}/>
                </Grid>
            </form>
        </div>
    )
}