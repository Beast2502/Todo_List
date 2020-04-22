import React, { Component } from 'react';

export default class Todoitem extends Component {
  render() {
    const {title,handleDelete} = this.props
  
    return (
      <>
      <div className="todoitem1"> 
      <div className="todoitem">
      <li>
        <h6>{title}</h6>
        <button className='btnDel' onClick={handleDelete}>Delete</button>
     
      </li>
      
      </div>
      
      </div>
      
      </>
    );
  }
}
