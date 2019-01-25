import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super();
        this.age = props.initialAge;
        this.state = { 
            age: props.initialAge, 
            status: 0
        };
        setTimeout(() => {
            this.setState({
                status: 1
            })
        }, 3000);
    }

    onMakeOlder() {
        this.age += 3;
    }

    onMakeOlder2() {
        this.setState({
            age: this.state.age + 3 
        }); 
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <p>Your Name is {this.props.name}, your age is {this.props.age}</p>
                <p>Mein User Objekt => Name: {this.props.user.name}</p>
                <div>
                    <h4>hobbies:</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                    <hr />
                    {this.props.children}
                    <hr />
                    <button onClick={this.onMakeOlder.bind(this)}>Make me older in Log!</button>
                    <button onClick={this.onMakeOlder2.bind(this)}>Make me older in Screen!</button>
                    <p>Your Name is {this.props.name}, your age is {this.state.age}</p>
                    <p>Status: {this.state.status}</p>
                    <button onClick={this.props.greet}>Greet</button>
                </div>
            </div>
        );
    }
}

export default Home;