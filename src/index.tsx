import * as React from "react"
import * as ReactDOM from 'react-dom';
import * as Redux from 'redux';
import './index.css';

const rootReducer = (state = {
    counter:0
}, action: Redux.Action) => {
    switch (action.type) {
        default:
            return state;
    }
};

/* eslint-disable no-underscore-dangle */
const store = Redux.createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export const MyFunction = () => <div>Hello World!12</div>

ReactDOM.render(<MyFunction />, document.getElementById('root') as HTMLElement);