import React from 'react';
import { observer } from 'mobx-react-lite';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Checkbox, List, ListItem, ListItemText, TextField  } from '@mui/material';
import todoStore from '../TodoStore';

const TodoList: React.FC = observer(() => {
  const handleAddTodo = () => {
    todoStore.addTodo();
  };

  const handleToggleTodo = (id: number) => {
    todoStore.toggleTodoCompletion(id);
  };

  const handleRemoveTodo = (id: number) => {
    todoStore.removeTodo(id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    todoStore.setNewTodoText(event.target.value);
  };

  return (
    <div>
      <TextField
        label="New Todo"
        value={todoStore.newTodo}
        onChange={handleChange}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
        fullWidth
      />
      <Button onClick={handleAddTodo} 
              color="secondary" 
              variant="contained" 
              sx={{marginTop:3}}
              >
        Add Todo
      </Button>
      <List>
        {todoStore.todos.map((todo) => (
          <ListItem key={todo.id} sx={{backgroundColor:'#cd9add'}} divider >
            <Checkbox
              color='secondary'
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <ListItemText primary={todo.text} />
            <Button onClick={() => handleRemoveTodo(todo.id)} 
                    color="secondary" 
                    startIcon={<DeleteIcon/>}
                    variant='contained'>
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
});

export default TodoList;
