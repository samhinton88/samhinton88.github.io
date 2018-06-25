require('dotenv').config();
import rootApp from './Root';
import ReactDOM from 'react-dom';

console.log('ROOTAPP', rootApp)

ReactDOM.render(rootApp, document.getElementById('root'));
