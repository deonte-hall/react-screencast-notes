

//React is an embedded node module that comes standard with node
import React from 'react';

//React DOM will help us send thigs to our index.html that will be sent to the browser from this .JS file
import ReactDOM from 'react-dom';


//This is just a normal javascript class that has inherited all the methods and properties of the react.component class
class Main extends React.Component {
  render() {
    return ( //The return statement can only return one HTML element so you have to wrap it in a div
        //This HTML is actually jsx, in jsx there are key differences from HTML 
      <h1>Hello {/* Javascript can go inside of brackets*/} world!</h1>
    );
  }
}
//This react dom will render (the method)  whats inside the return and give it to the root element on the INDEX html page 
ReactDOM.render(<Main />, document.getElementById('root'));
