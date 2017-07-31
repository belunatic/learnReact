var Square = React.createClass({
    render : function() {
        var style = {
            width:100,
            height:100,
            display:"inline-block",
            padding:20,
            margin:20,
            backgroundColor: this.props.bgColor
        }
        
        return(
            <div style={style}></div>
            )
    }
})
///////////////////////////////////////////////////
////////JSX can be anywhere, remember to add KEY attribute to these array for future reference for React
var renderSquare = [];
renderSquare.push(<Square key="0" bgColor="#231245"/>);
renderSquare.push(<Square key="1" bgColor="#edd234"/>);
renderSquare.push(<Square key="2" bgColor="#23786e"/>);
renderSquare.push(<Square key="3" bgColor="#23165f"/>);
//////////////////////////////////////////////////

function randomColor () {
    var colors = ["#22d3aa","#22ff1a","#bb76aa","#3856aa","#123456"];
    var x = Math.floor(Math.random() * 5);
    return <Square bgColor={colors[x]}/>;
}
/////////////////////////////////////////////
ReactDOM.render(
    <div>
        {renderSquare}
        {randomColor()}
        {randomColor()}
        {randomColor()}
    </div>,
    document.getElementById("container")
)