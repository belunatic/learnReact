var CounterParent = React.createClass({
    getInitialState : function() {
        return {
            counting:0
        }
    },
    add1: function () {
        this.setState({
            counting : this.state.counting + 1
        })
    },
    shoutHandler: function (x) {
        window.alert(x)
    },
    componentDidMount: function() {
        //shout is going to be an event I created
        //shout will be bind to the function shoutHandler
        window.addEventListener("shout", this.shoutHandler);
    },
    componentWillUnmount: function() {
        window.removeEventListener("shout", this.shoutHandler);
    },
    render: function() {
        var style= {
            width:200,
            height:200,
            backgroundColor:"yellow",
            borderRadius:15,
            textAlign:"center"
        }
        return(
            <div style={style}>
                <Counter counting={this.state.counting} shout={this.shoutHandler("I want it")}></Counter>
                <button onClick={this.add1} shout={this.shoutHandler("I believe")}>Add 1</button>
            </div>
        )
    }
})

var Counter = React.createClass({
    render: function() {
        var style = {
            paddingTop:"40%",
            fontSize: 24,
            color:"grey"
        }
        return (
            <div style={style}> {this.props.counting}</div>
        );
    }
})

ReactDOM.render(
    <CounterParent></CounterParent>,
    document.getElementById("container")
);