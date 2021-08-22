import React from "react";

// class PureComponentExample extends React.Component {
// If we use React.Component here instead of Pure, render will be called on every setState 
// Because Component does not worry if there is any change happend or not and just keeps on 
// re rendering the component 
// PureComponent does the shallow comparison of the state object and if reference is same then does
// not do the re rendering, this way we can improve the performance
// But do not use Pure component everywhere, use it for leaf components or component with small props or state

class PureComponentExample extends React.PureComponent {
  state = {
    counter1: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter1: 1,
      });
    }, 2000);
  }

  render() {
    console.log("render counter1");
    return <>Counter1 value : {this.state.counter1}</>;
  }
}

export default PureComponentExample;
