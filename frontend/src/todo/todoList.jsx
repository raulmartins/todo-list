import React from 'react'
import IconButton from '../template/iconButton.jsx'

export default props =>{

    const randerRows =() =>{
    const list = props.list

    return list.map(todo =>(
        <tr key={todo._id}>
            <td className={todo.done ? 'maskedAsDone' : ''}>
                {todo.description}
            </td>
            <td id='rowsTable'>
                <IconButton style='danger' image='trash-o' onClick={()=> props.handleRemove(todo)} hide={!todo.done}/>
                <IconButton style='warning' image='undo' onClick={()=> props.markedAsPandding(todo)} hide={!todo.done}/>
                <IconButton style='success' image='check-circle-o' onClick={()=> props.markedAsDone(todo)} hide={todo.done}/>
            </td>
        </tr>
        )
    )
}


    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th id='acao'>Ação</th>
                </tr>
            </thead>
            <tbody>
                {randerRows()}
            </tbody>
        </table>

    )
}