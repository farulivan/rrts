// import { Component } from 'react';
import { render } from 'react-dom';

interface AppProps {
  color?: string;
}

// interface AppState {
//   counter: number;
// }

// React Functional Component
const App = (props: AppProps): JSX.Element => {
  return <div>{props.color}</div>
}

// React Class Component
// class App extends Component<AppProps, AppState> {
//   // Method: 1 = define state using property
//   // this method will overide method 2 if you use both, so Choose only One!!
//   // state = { counter: 0 };

//   // Method: 2 = define state using constructor
//   // to use this method you must define new interface, which is AppState
//   constructor(props: AppProps) {
//     super(props);

//     this.state = { counter: 0 };
//   }

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//         {this.state.counter}
//       </div>
//     );
//   }
// }

render(<App color='red'/>, document.querySelector('#root'));
