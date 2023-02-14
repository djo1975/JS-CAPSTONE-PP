import './style.css';
import init from './app.js';
import { addComment, addLike } from './likesApi.js';

init();

addLike();
addComment();
