import React, { Component } from 'react';
import ReactDom from 'react-dom';
import uuid from 'react-uuid';
import Todoinput from './component/Todoinput';
import Todolist from './component/todolist';

import './style/style.css';

class App extends Component {
    state={
        id:uuid(),
        items:[],
        item:"",
        edititem:false
    }

    handlechange=(e)=>{
        this.setState({
            item:e.target.value
        })
    }

    handlesubmit=(e)=>{
        e.preventDefault();

        const newitem={
            id:this.state.id,
            title:this.state.item

        }
       
        const updatedata=[...this.state.items,newitem]
       
        this.setState({
            id:uuid(),
            items:updatedata,
            item:'',
            edititem:false
            })
    
        }

        clearlist=()=>{
            this.setState({
                items:[]
            })

        }

        handleDelete=(id)=>{
            const filter = this.state.items.filter(item=>
                item.id !==id)
                this.setState({
                    items:filter
                })

        }


     render() {
    return (
     <>
   
     <Todoinput item={this.state.item}
                handlechange={this.handlechange}
                handlesubmit={this.handlesubmit}
                clearlist={this.clearlist}
    />
    
    <Todolist items={this.state.items} handleDelete={this.handleDelete}/>
     </>
    );
  }
}


ReactDom.render(<App/>,document.getElementById("root"))