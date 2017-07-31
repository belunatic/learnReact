var Display = React.createClass({
    getInitialState: function() {
        return {
            tick:0
        }
    },
    componentDidMount : function() {
        setInterval(this.tickTick, 1000);
    },
    tickTick : function() {
        this.setState({
            tick : this.state.tick + 1
        })
    },
    render: function() {
        var style = {
            width: 200,
            height: 200,
            borderRadius:5,
            backgrroundColor:"black",
            color:"#ebbc34"
        }
        
        return (
            <div style={style}>{this.state.tick}</div>
        )
    }
})

ReactDOM.render(<Display></Display>, document.getElementById("container"));