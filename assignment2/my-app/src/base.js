import React, { Component } from 'react';

class Base extends Component {
  render() {
    return (
        <div>
          <h2>     Webapp - 'favorite dogs'
      Create a React webapp that will present a gallery of 6 random dog. Allow user to choose one (or
      more) to favorite (use local storage).
      If user doesn’t like any of the six, use a refresh/next button to get 6 more. Repeat.</h2>
        </div>
    );
  }
}

export default Base;