var Profile = React.createClass({
    render: function () {
        var style = {
            backgroundColor:this.props.bgColor,
            fontSize:"32px"
        }
        return (
                <Person {...this.props}></Person>
        )
    }
});

var Person = React.createClass({
    render: function () {
        return (
            <Bio {...this.props}></Bio>
        )
    }
});

var Bio = React.createClass({
    render: function () {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <p>Sex: {this.props.sex}</p>
            </div>
        )
    }
});

ReactDOM.render( <Profile name="John Doe" age="34" sex="Male"/> , document.getElementById("container"));