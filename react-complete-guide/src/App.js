import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person'; //.js added automatically by the build workflow.
import NewPerson from './NewPerson';


class App extends Component {
  constructor() {
    super();
  this.state = {
    persons: [
      {name: 'Chris', age: '32'},
      {name: 'Julie', age: '33'},
    ],
    person3: [
      {name: '', age: '', hobby: ''}
    ]
  }
  this.handleChange = this.handleChange.bind(this);
}



handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

handleSubmit = (e) => {

}

  switchNameHandler = (e) => {
    this.setState({
    person3: [
      {name: e.target.value},
    ]
    })
  }

  switchAgeHandler = (e) => {
    this.setState({
      person3: [
        {age: e.target.value},
      ]
    })
  }

  switchHobbiesHandler = (e) => {
    this.setState({
      person3: [
        {hobbies: e.target.value},
      ]
    })
  }




  render() {
    console.log(this.state.person3[0].age, ': age');
    console.log(this.state.person3[0].name, ': name');
    //INLINE STYLING:
    //js object so you have to use js representations. backgroundColor not background-color. use strings since it's a key: value pair.
    //note: inline styles are more restrictive. ex: a hover effect. you do get to localize things though.

    const style={
      backgroundColor: 'white',
      font: 'inherit', //use surrounding font.
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    return (
      <div className="App">

        <p>Hi</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Coding</Person>

        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Photography</Person>

        <NewPerson person3Name={this.state.person3[0].name} person3Age={this.state.person3[0].age}
        changedName={this.switchNameHandler}
        changedAge={this.switchAgeHandler}
        change={this.handleChange}>My Hobbies: </NewPerson>



        <button style={style} //style receives the dynamic value. normal variable and not a class property so no this.style.
        type='submit'>Submit</button>
          {/* // onClick={this.switchNameHandler}>Switch name</button> */}

      </div>
    );
  }
}

export default App;




 //Notes:
//1. stateful components are also called containers b.c it contains some part of our application state.
//2. - state and props update the DOM.
//3. - state is a property of the component class. It changes the component from within. props allow you to pass data down the component tree (and hence trigger an UI update).
//4. - you can pass methods such as clickhandlers as props.
//5.  - remember onclick html onClick jsx


//TWO-WAY DATA BINDING
//this is happening through value={props.name}

//-In app.js, your state component (container), you listen to changes in your onChange method. You use props.changed to do so, which points to your changed property in <Person /> in app.js. This updates the state in app.js b.c it's tied to switchNameHandler.

//In person.js, your stateless component, you pass down the state to Person with name, age, etc.
//-On the other hand you output the name as the value of the input.
