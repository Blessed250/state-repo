import React, { Component } from 'react'

export default class Content extends Component {
    constructor(props) {
        super(props);
          this.person = { 
            fullName : "mohamed" ,
            bio : "born and raised in tunisia"  ,
            img: "https://imgix.ranker.com/user_node_img/162/3238856/original/superboy-photo-u12?w=650&q=50&fm=pjpg&fit=crop&crop=faces" ,
            profession : "WebDev"       
        } 
        this.state = {count : 0} ;
    }
         
    componentDidMount () {
     setInterval (()=> {
     this.setState (prevState => {
        return {
            count : prevState.count +1 , 
        } ;
      }) ;
       } , 1000 ) ;
       
    }
  

  render() {
    return (
      <div>
        <h1>{this.person.fullName}</h1>
        <h1>{this.person.bio}</h1>
        <h1>{this.person.profession}</h1>
        <img src={this.person.img} alt="person" />
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}
