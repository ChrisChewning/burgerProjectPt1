import React from 'react'; //don't need to import Component b.c we're j using fn, not a class.
import '../Person/Person.css';

const NewPerson = (props) => {
  // console.log(this.props.person3[0].name);

  return (
   <div className='newPerson'>
     <div>
       <p>I'm {props.person3Name} and am {props.person3Age} years old.</p>
     </div>
     <form>
    name: <input type='text' onChange={props.changedName} name='name' value={props.switchNameHandler} />
    age: <input type='text' onChange={props.changedAge} name='age' value={props.switchAgeHandler} />
    hobbies: <input type='text' onChange={props.changedHobbies} value={props.switchHobbiesHandler} />
  </form>
</div>
)
};


export default NewPerson;



//
