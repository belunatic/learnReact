var Fetch = React.createClass ({
    getInitialState : function() {
        return (
        {
            menu: []
        })
    },
    
    componentDidMount: function() {
        /*
        fetch the data
        then parse it to a json format(readable)
        then extra the data and save it in a variable
        catch error if any
        */
        return fetch("https://davids-restaurant.herokuapp.com/categories.json")
        .then((res) => res.json())
        .then((data) => this.setState({menu : data}))
        .catch((error) => console.log('error was ' + error))
    },
    render: function() {
        //check the state at different points
        console.log("Menu: ", this.state.menu);
        return (
            <div>
               <table>
                {this.state.menu.map((x,i) => <FetchList key={i} menuList={x}></FetchList>)}
                </table>
            </div>
        )
    }
});

var FetchList = React.createClass ({
    render: function() {
        return (
            <tr>
                <td key={this.props.key}>{this.props.menuList.id}</td>
                <td key={this.props.key}><a href={this.props.menuList.url}>{this.props.menuList.name}</a></td>
                <td key={this.props.key}>{this.props.menuList.name}</td>
                <td key={this.props.key}>{this.props.menuList.short_name}</td>
            </tr>
        )
    }
})

ReactDOM.render(<Fetch></Fetch>, document.getElementById("container"));
//this.setState({menu : response.json()})