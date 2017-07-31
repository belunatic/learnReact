//this is a new way by ES6 of representing the prefix methods
var { Router,
     Route,
     IndexRoute,
     IndexLink,
     hashHistory,
     Link } = ReactRouter;

var Home = React.createClass({
    render : function() {
        return (
            <div>
                <h2>Hello</h2>
                <p>Cras facilisis urna ornare ex volutpat, et
                    convallis erat elementum. Ut aliquam, ipsum vitae
                    gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                    metus nec massa. Maecenas hendrerit laoreet augue
                    nec molestie. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.
                </p>
            </div>
        )
    }
})

var Contact = React.createClass({
    render: function() {
        return (
            <div>
                <h2>GOT QUESTIONS?</h2>
                <p>The easiest thing to do is post on
                    our <a href="http://forum.kirupa.com">forums</a>.
                </p>
            </div>
        );
    }
});

var Stuff = React.createClass({
    render: function() {
        return (
            <div>
                <h2>STUFF</h2>
                <p>Mauris sem velit, vehicula eget sodales vitae,
                    rhoncus eget sapien:</p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                    <li>Eget erat</li>
                    <li>Id porttitor</li>
                </ol>
            </div>
        );
    }
});


var App = React.createClass({
    render : function() {
        return(
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    {
                    /* TO --> specifies the value of the URL we will display in the address bar
                    INDEXLINK --> specify which one is index link when page loads up
                    */}
                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li><Link to="/stuff" activeClassName="active">Stuff</Link></li>
                    <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                </ul>
                <div className="content">
                    {/*Load whatever is in the component render function*/}
                    {this.props.children}
                </div>
            </div>
        )
    }
})

ReactDOM.render(
    <Router history={ReactRouter.hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute compoment={Home}></IndexRoute>
            <Route path="stuff" component={Stuff} />
            <Route path="contact" component={Contact} />
        </Route>
    </Router>,
    document.getElementById("container")
);

/*********************** SIDE NOTES 
--> Instead of using ReactRouter.Router, we used Router thanks to line 1- 7.
--> PATH prop specifies the URL we are interested in matching. In this case, it is the root aka "/"
-->IndexRouter is sole purpose for exisiting is to declare which component will be display when the app initially loads
*************************/
                            