import * as React from "react"
import * as ReactDOM from 'react-dom';
import './index.css';

export const MyFunction = () => <div>Hello World!12</div>

ReactDOM.render(<MyFunction />, document.getElementById('root') as HTMLElement);