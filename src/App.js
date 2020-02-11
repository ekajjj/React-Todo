import React from 'react';
import styled from 'styled-components';



import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
 
`
const boxTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: blue;
  
`

const boxBottom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: green;
  align-items: center;
 
`
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      TodoList: []
    };
  }

  toggleItem = clickedId => {
    const newTodoList = this.state.TodoList.map(item => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
// set state
    this.setState ({
      TodoList: newTodoList
    });
  };

  addNewItem = itemText => {
    const newItem = {
      name: itemText,
      id: Date.now()
    };
    this.setState({
      TodoList: [...this.state.TodoList, newItem]
    })
  }

  //filter for clearCompleted
  clearCompleted = () => {
    const newTodoList = this.state.TodoList.filter(item => !item.completed)
    this.setState({
      TodoList: newTodoList
    })
  }

  render() {
    return (
      <Container >
        <boxTop>
          <h2>Welcome to your Todo App! </h2>
          <p>Add items to begin, click items to mark completed. Clear completed tasks via button.</p>
          <TodoForm addNewItem={this.addNewItem}/>
        </boxTop>
        <boxBottom >
          <TodoList items={this.state.TodoList} 
                    toggleItem={this.toggleItem}
                    onClick={this.clearCompleted}
          />
        </boxBottom>
      </Container>
    );
  }
}

export default App;