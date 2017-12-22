import React, {Component} from 'react'
import Axios from 'axios'
import PageHeader from '../template/pageHeader.jsx'
import Form from './todoForm.jsx'
import List from './todoList.jsx'

const URL='http://localhost:3003/api/todos'
export default class Todo extends Component {

    constructor(props){
        super(props)
        this.state = {description:'', list:[]}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.markedAsDone = this.markedAsDone.bind(this)
        this.markedAsPandding =  this.markedAsPandding.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClean = this.handleClean.bind(this)
        this.refresh()

    }

    handleChange(e){
        this.setState({...this.state, description:e.target.value})

    }
    refresh(description = ''){
        const seach = description ? `&description__regex=/${description}/` : ''

        Axios.get(`${URL}?sort=-createAt${seach}`)
                .then(resp => this.setState({...this.state, description, list:resp.data}))
                .catch(erro => console.log(erro))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }
    handleClean(){
        this.refresh();
    }

    handleAdd(){
        const description = this.state.description
        Axios.post(URL, {description})
                .then(resp => this.refresh())
                .catch(erro => console.log(erro))
    }

    handleRemove(todo){
        Axios.delete(`${URL}/${todo._id}`)
                .then(resp =>this.refresh(this.state.description))
                .catch(erro => console.log(erro))
    }

    markedAsDone(todo){
        Axios.put(`${URL}/${todo._id}`, {...this.todo, done:true})
                .then(resp =>this.refresh(this.state.description))
                .catch(erro => console.log(erro))
    }

    markedAsPandding(todo){
        Axios.put(`${URL}/${todo._id}`,{...this.todo, done:false})
                .then(resp =>this.refresh(this.state.description))
                .catch(erro => console.log(erro))
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' subtitle='Cadastro'/>

                <Form handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClean={this.handleClean}/>

                <List list={this.state.list}
                    handleRemove={this.handleRemove}
                    markedAsDone={this.markedAsDone}
                    markedAsPandding={this.markedAsPandding}/>
            </div>
        )
    }
}
