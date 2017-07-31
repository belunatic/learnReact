var ToDoContainer = React.createClass({
    render : function () {
        return (
            <div>
                <ToDoInput></ToDoInput>
            </div>
        )
    }
});

var ToDoInput = React.createClass({
    getInitialState : function() {
        return {
            list: [],
            input: ""
        }
    },
    addToDoList : function(e) {
        var tempList = this.state.list;
        tempList.push(this.state.input);
        this.setState({ list: tempList})
    },
    handleChange: function(e) {
    this.setState({ input: e.target.value });
    },
    render : function() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}></input>
                <button onClick={this.addToDoList}>Add</button>
                <ToDoList list={this.state.list}></ToDoList>
            </div>
        )
    }
});

var ToDoList = React.createClass({
    render : function() {
        return (
            <div>
                {this.props.list.map((l,i) => <p key={i}>{l}</p>)}
            </div>
        )
    }
});

ReactDOM.render(<ToDoContainer></ToDoContainer>, document.getElementById("container"));