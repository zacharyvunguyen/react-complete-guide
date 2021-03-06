import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      {name: 'Zach', age: 28},
      {name: 'Nu', age: 28},
      {name: 'Ben', age: 2}
    ],
    otherState: 'some other value'
  };

  switchNameHandler = () => {
    //console.log('Was clicked!');
    //Don't do this: this.state.persons[0].name='Vu Nguyen';
    this.setState({
      persons: [
        {name: 'Zachary', age: 28},
        {name: 'Nu', age: 28},
        {name: 'Benjamin', age: 3}
      ]
    })
  }

  render() {
   return (
     <div className="App">
       <h1> Hi, I'm a React App</h1>
       <p> This is really working!</p>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Racing</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
     </div>
   );
    //return React.createElement('div', {className:'App'},React.createElement('h1',null,'Does it work now?'))
  }
}

export default App;
