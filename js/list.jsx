var TaskList = React.createClass({
    render: function() {
        return (
            <div>
                <ul>
                    <li>Making Cake</li>
                    <li>Making Money</li>
                    <li>Making Slush</li>
                </ul>
            </div>
        )
    }
})

ReactDOM.render(<TaskList></TaskList>, document.getElementById("container"));