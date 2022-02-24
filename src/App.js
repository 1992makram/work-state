import React, { Component } from 'react'

export default class App extends Component {
  state={person:{
    fullName:"makram",
    bio:"no thiing",
     imgSrc:"image",
      profession:"developper",
  },
  show:true,
  timer:0
};
  handleShowperson=()=>{
 this.setState({show:!this.state.show});
  };
  componentDidMount(){
   setInterval(()=>this.setState({timer:this.state.timer+1}),1000)
  }
  
  
  render() {
    const mystyle={
      color: "white",
      backgroundColor: "DodgerBlue",
    }
    const mstyle={
      color: "white",
      backgroundColor: "red",
      
    }
    return (
      <>
      
      
      <button onClick={this.handleShowperson}>click</button>
      {this.state.show ?(
        <>
        <h1 style={mystyle}>{this.state.person.fullName}</h1>
        <h2 style={mystyle}>{this.state.person.bio}</h2>
        <h3 style={mstyle}>{this.state.person.imgSrc}</h3>
        <h4 style={mstyle}>{this.state.person.profession}</h4>
      </>  
      ):null}
      <p>{this.state.timer}</p>
      </>
    );
  }
}

