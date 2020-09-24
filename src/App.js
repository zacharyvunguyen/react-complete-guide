import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
class App extends Component {
  render() {
   return (
     <div className="App">
       <h1> Hi, I'm a React App</h1>
       <p> This is really working!</p>
       <Person name="Zach" age="28" />
       <Person name="Nu" age='28' > My Hobbies: Racing</Person>
       <Person name={"Ben"} age={'2'} />
     </div>
   );
    //return React.createElement('div', {className:'App'},React.createElement('h1',null,'Does it work now?'))
  }
}

export default App;
