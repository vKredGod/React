import React, { Component } from 'react';
import './App.css';

/*
Made by Gabriele Fumagalli and Caterina Valerio
*/

class App extends Component {

  state = {items: []};

  //function ran when the button "Add" is pressed.
  addItem(event) {
    //If the input isn't empty, if it is, don't do anything.
    if (this.textInput.value !== '') {
      event.preventDefault();
      //Gets the item array from the state and saves it in a variable
      var itemsArray = this.state.items.slice();
      //Push the value inside the input field to the state array and replace it.
      itemsArray.push(this.textInput.value);
      this.setState({items: itemsArray});
      //Clear the input field.
      this.textInput.value = '';
    }
  }
  //Clear is ran when the button "clear" is pressed. Just resets the state "items".
  clear(event) {
    event.preventDefault();
    this.setState({items: []});

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="list">
            <h1>Your shopping list</h1><br></br>
                <input placeholder="Item" id="input" type="text" ref={(input) => this.textInput = input} /><br /><br />
                <button class="button" onClick={this.addItem.bind(this)}>Add  </button><button id="clear" class="button" onClick={this.clear.bind(this)}>Clear</button><br/> <br/>
            <ShoppingList items={this.state.items}></ShoppingList>
          </div>
        </header>
        <div className="footer"><p id="author">Made by Gabriele Fumagalli and Caterina Valerio.</p></div>
      </div>
    );
  }
}


class ShoppingList extends React.Component {

  render() {
    let i = 0;
    let content = [];
    //saves the item array in items
    let items = this.props.items;
    //loops through all the items and pushes the item name inside a <li> tag in the variable "content"
    for (i=0; i < items.length; i++) {
      content.push(<li>{items[i]}</li>)
    }
    //returns the list formatted with <li>
    return <div>{content}</div>;
  }
}


export default App;
