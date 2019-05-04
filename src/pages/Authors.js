import React from 'react';
import axios from 'axios';

export default class Authors extends React.Component{

static authors=[];

  constructor(props,context){
    super(props,context);
    this.state = {
      authors: []
    };
    axios.get('http://poetrydb.org/author').then((res)=>{
      this.setState({authors:res.data.authors});
      // this.state.authors=res;
    },(err)=>{
      alert("Failed to get data");
    });
  }

  componentWillMount(){

  }

  render(){
    let authorsList = this.state.authors?this.state.authors.map((item, index)=>
      <div key={index}>{item}</div>
    ):<div>Loading Data</div>
      return(
        authorsList
      )
  }
}


