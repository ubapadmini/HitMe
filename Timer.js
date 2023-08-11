import React, { Component } from 'react'
import './Timer.css'
 class Timer extends Component {
  constructor(){
    super();
    this.state={time:10,score:0}
}
handleClick(){
    if(this.state.time!=0){
    this.setState({
          score:this.state.score+1
    })
}}
handleClick1(){
    this.setState({
        time:10,
        score:0,
        message:''
    })
}
componentDidMount(){
    this.interval=setInterval(this.tick,1000);
}
tick=()=>{
    if(this.state.time==0)
    {
         this.setState({
               message:"Enough I can't be beaten by you",
               
         })
       
    }
    
    else
    {
        this.setState({
            time:this.state.time-1,
        })
    }
    // <button onClick={this.handleClick1.bind(this)}>Restart</button>
    
}
render() {
return (
  <div class='container'>
  <div id="div1">
      <b><p>Click the picture as many times as you can in {this.state.time} wacky seconds!</p></b> 
      <b>  <img onClick={this.handleClick.bind(this)} src="http://clipground.com/images/kick-clipart-8.jpg"/>
        <p>Score:{this.state.score}</p> </b> 
        <p>{this.state.message}</p> 
        
        <b> <button onClick={this.handleClick1.bind(this)}>Restart</button></b> 
  </div>
  </div>
)
}
}

export default Timer