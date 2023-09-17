let channels = [
  {name : "Desenvolvimento do Site da Inkript"},
  {name:"Movimentação do Instagram"}
];
class Channel extends React.Component{
  onClick(){
    console.log("Clicado",this.props.name);
  } 
  
  render(){
      return(
      <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
      )  
     //return React.createElement("li",null,"Dev Site Inkript"); 
    
    }
}

class ChannelList extends React.Component{
  render(){
    return(
    <ul>
      {this.props.channels.map(channel=>{
        return(
        <Channel name={channel.name}/>
        )  } ) }
       </ul>
    )  
   //return React.createElement("li",null,"Dev Site Inkript"); 
  
  }
}


class ChannelForm extends React.Component{
  onSubmit(e){

  }
  onChange(e){
    console.log(e.target.value);
  }
  render(){
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type="text"
        onChange={this.onChange.bind(this)}></input>
      </form>
    )
  }
}

class ChannelSection extends React.Component{
  render(){
    return(
      <div>
       <ChannelList channels={channels}/>
       <ChannelForm/>
      </div>
    )
  }
}

ReactDOM.render(<ChannelSection/>,document.getElementById("app"));
