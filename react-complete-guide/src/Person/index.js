import React from 'react'; //don't need to import Component b.c we're j using fn, not a class.
import './Person.css'; //only can omit file extension for .js files.


const person = (props) => {
  return (
  <div className='Person'>
    <p> I'm {props.name} and I am {props.age} years old!</p>
    <p>{props.children}</p>
    <input type='text' onChange={props.changed} value={props.switchNameHandler }/>
  </div>
)
};

export default person;



//NOTES:

//1. in const person = (props) the () is called the 'argument list'. props points to the attributes in your component.

//2. props.children refers to any elements b.w the opening & closing tag in our component. In this case it's anything b.w <Person> </Person>  */}
// {Math.floor(Math.random() * 30)} years old!
