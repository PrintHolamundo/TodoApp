import './styles.css';
import {Todo,TodoList} from './classes';

const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript');
const tarea2 = new Todo('Comprar un unicornio');

todoList.nuevaTodo(tarea);
todoList.nuevaTodo(tarea2);

console.log(todoList);