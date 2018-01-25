class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.fnDetails = this.fnDetails.bind(this);

        this.state = {
            stHidden: false
        };
    }
    fnDetails(){
        this.setState((prevState) => {
            return {
                stHidden: !prevState.stHidden
            }
        });
    }
    render(){
        return(
            <div>
                <h1>VisibilityToggle</h1>
                <button onClick={this.fnDetails}>{this.state.stHidden ? `Hide details` : `Show details`}</button>
                {this.state.stHidden && (<p>Hey. These are some details you can now see!</p>)}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

//Ln22 - <p hidden={this.state.stHidden}>Hey. These are some details you can now see!</p>