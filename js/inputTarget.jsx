var Component1 = React.createClass({
    getInitialState: function () {
        return {
            name: 'hi',
            id: 1,
            type:"",
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    update: function (e) {
        this.setState({
            name: e.target.value,
            type: e.type,
            width: window.innerWidth,
            height: window.innerHeight
        });
    },
    componentDidMount:function() { 
        window.addEventListener('resize', this.update ); 
        window.addEventListener('resize', this.update );
    },
    componentWillUnmount:function() { 
        window.removeEventListener('resize', this.update ); 
        window.removeEventListener('resize', this.update );
    },

                                  
    render: function () {
        return ( 
            <div>
            <h3> width: {this.state.width} & height: {this.state.height} </h3>  
            < Component2 name = {this.state.name}  type={this.state.type} update = {this.update}/> 
            </div > 
        );
    }
});

var Component2 = React.createClass({
    render: function () {
        return ( 
            <div> 
               <input type ="text" onChange = {this.props.update}/>
               <input type ="text" onChange = {this.props.update}/>
               <br/>
               <b> {this.props.name} </b>
               <br/>
               <b> {this.props.type} </b> 
               </div> 
        );
    }
});
ReactDOM.render( < Component1 name = " this is the text property" /> , document.getElementById('container'));

/*******
this update --> using the same method to update the state will end up updating the same space and overwriting it at same time
width and height use NATIVE EVENT to get access to the their values
*******/