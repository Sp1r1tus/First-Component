import React from 'react';
import Home from './Components/Home'

class App extends React.Component {

    onGreet() {
        alert("hallo!");
    }

    render() {
        var user = {
            name: "Anna",
            hobbies: ["Sports", "Reading"]
        };

    return (
        <div>
            <Home name={"Max"} initialAge={27} age={12} user={user} greet={this.onGreet}>
                <p>This is a paragraph </p>
            </Home>
      </div>
    );
  }
}

export default App;