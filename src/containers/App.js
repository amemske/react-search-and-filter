import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ScrollCardList from '../components/ScrollCardList';

import './App.css';

//app.js is a smart component because it has a class
class App extends Component{
  //life cycle methods we can use -constructor(), componentWillMount(),render(),componentDidMount()

constructor() {
  super();
  //state are things that can change and affect the app
  //state lives in the parent component
  this.state = {
    robots: [],
    searchfield: ''
  }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json()).
  then(users => this.setState({robots:users}));

}
//when creating your own fuctions in react use arrow functions os that this points to the APP
//when the seach field changes, log the value
onSearchChange = (event) => {
  //to change state in react, use setState
  this.setState({searchfield: event.target.value});

//  console.log(onSearchChange);


}


  render(){
    //destructuring
    const { robots, searchfield } = this.state;

    //filter robots based on the search input
    const filterRobots = robots.filter(robot => {
      //compare the robot name with the entered field
      return robot.name.toLowerCase().includes(searchfield);
    })

//if loading is slow show loading bar
// turnery to replace if else  statement  using return
return !robots.length ? // is similar to if(robots.length === 0)
    <h1> Loading ... </h1> : // if
(
    <div className='tc'>
      <h1 className='f2'>RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <ScrollCardList>
      <CardList robots={filterRobots}/> /// else {}
      </ScrollCardList>
    </div>
  );


  }

}


export default App;
