import React, { Component } from 'react';
import '../style/style.css';
import logo from '../logo/dev.jpg';


export default class Todoinput extends Component {
  render() {
      const { item,handlechange,handlesubmit,clearlist}=this.props
    return (
      <>
    
      <div className="first">
        <div>
        <img src={logo} alt="Logo"/>
        </div>
      <h1 className="h">Todo List</h1>
      
      <form  onClick={handlesubmit}>
          <input value={item} onChange={handlechange} className="second">
          </input>
          <div className="button">
          <button type="submit">ADD</button>
          
          </div>
      </form>
      <button className="button1" onClick={clearlist}>Clear List</button>
      </div>
      </>

    );
  }
}
