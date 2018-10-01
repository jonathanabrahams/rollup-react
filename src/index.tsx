import * as React from "react"
import * as ReactDOM from 'react-dom';
import * as Redux from 'redux';
import './index.css';

interface State {
    counter: number
}

const CounterReducer = (
    state: State = {
        counter: 0
    },
    action: Redux.Action
) => {
    switch (action.type) {
        case 'INCREMENT': return { ...state, counter: state.counter + 1 }
        case 'DECREMENT': return { ...state, counter: state.counter - 1 }
    }
    return state;
};

const enhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()

const store = Redux.createStore(
    CounterReducer,
    {
        counter: 0
    },
    enhancer
);

interface MyCounterProps {
    counter: number;
    onIncrement(): void;
    onDecrement(): void;
}

export const MyCounterPres: React.StatelessComponent<MyCounterProps> = ({ counter, onIncrement, onDecrement }) => (
    <div>
        <div>
            Counter: {counter}
        </div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
)

export class MyCounter extends React.PureComponent<MyCounterProps> {
    render() {
        return <MyCounterPres {...this.props}/>
    }
}

const render = () => ReactDOM.render(<MyCounter
    counter={store.getState().counter}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
/>, document.getElementById('root') as HTMLElement);

render();
store.subscribe(render);