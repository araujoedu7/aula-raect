import React from "react";



function App() {

  return (
    <div>
      <h1> olá <Welcome name="Eduardo"/></h1>
    </div>
  );
}

// function Welcome(props){
//   return <span>{props.nome}</span>
// }

class Welcome extends React.Component{
  render(){
    return <span>{this.props.name}</span>
  }
}
export default App;