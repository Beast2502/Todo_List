import React, { Component } from 'react';
import Todoitem from './todoitem';

export default class Todolist extends Component {
  render() {
      const {items,handleDelete}=this.props
      
    return (
      <>
      
      {
          items.map(item=>{
              return(
                <>
                  <Todoitem key={item.id} title={item.title} handleDelete={()=>handleDelete(item.id)}/>
                  
                  </>
              )
          })
      }
      
      </>
      
    );
  }
}
