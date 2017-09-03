console.log('HIT DOT');

function getRandomArbitrary(min, max){
  return Math.random() * (max - min) + min;}

class Dot extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dotSize: props.increment,
      randomize:getRandomArbitrary(10, 100),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick()
  {this.state.dotSize(Math.ceil((1 / this.state.randomize) * 100));
    this.setState({randomize:getRandomArbitrary(10, 100)});
    console.log('dot', 1/this.state.randomize);
  }

  render(){
    let style={
      height: '' +  this.state.randomize +'px',
      width: '' + this.state.randomize +'px',
    };

    return (
      <div
        id="infiniteLoop"
        className="dot"
        style={style}
        onClick={this.handleClick}>
      </div>

    );
  }
}

export default Dot;
