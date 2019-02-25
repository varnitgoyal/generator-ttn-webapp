import './styles/reset.css';
import './styles/font-awesome.css';
import './styles/style.css';
import {main} from './scripts/main.js';
import './styles/sass/main.scss';
function component() {
  let element = document.createElement('div');

  
  element.innerHTML ="hello world";
  element.classList.add('hello');
 
  main();	

  return element;
}

//document.body.appendChild(component());
