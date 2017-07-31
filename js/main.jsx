var Hello = React.createClass({
    number: 4,
    render: function () {
        return (
            <div>
                <h1> Abel {this.number}</h1>
                <Hello2 name="Mercy"></Hello2>
            </div>
            )
    }
});

var Hello2 = React.createClass({
    render: function () {
        return (
            <div>
                <h1> {this.props.name} </h1>
                <Hello3 name={this.props.name}></Hello3>
            </div>
            )
    }
});

var Hello3 = React.createClass({
    render: function () {
        return <h1> {this.props.name} </h1>;
    }
});

ReactDOM.render( <Hello/> , document.getElementById("container"));