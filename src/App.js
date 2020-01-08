import React from 'react';
import './App.css';


class App extends React.Component{
  state = {
    country : true,
  }
constructor(props){
  super(props);
  this.handleChangeCountry = this.handleChangeCountry.bind(this);
}
handleChangeCountry(){
  this.setState({country: !this.state.country})
}
render(){
  console.log(this.state);
  return(
    <div className = "App">
    <button onClick = {this.handleChangeCountry}>country change</button>
      {
        this.state.country ? "Armenia" : "America" 
      }
    </div>
  )
}
}

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
