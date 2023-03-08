const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count:10};
    }
    handleClickMinus = () => {
        if (this.state.count>0) {
            this.setState({count: this.state.count-1});
            console.log(this.state.count);
        }
    };
    handleClickPlus = () => {
        this.setState({count: this.state.count+1});
        console.log(this.state.count);
    };
    handleInputChange = (event) => {
        const value = event.target.value;
        if (value>=0) {this.setState({ count: parseInt(value)})};
    }
    render(){
        return(
            <div>
                <h2>Counter</h2>
                <div className={'row'}>
                    <button className={'btn'} onClick={this.handleClickMinus}>-</button>
                    <p>Count:{this.state.count}</p>
                    <button className={'btn'} onClick={this.handleClickPlus}>+</button>
                </div>
                <h2>Advanced Counter</h2>
                <div className={'row'}>
                    <button className={'btn'} onClick={this.handleClickMinus}>-</button>
                    <input type="number" сlassName={"input"} value={this.state.count}
                        onChange={this.handleInputChange}
                    />
                    <button className={'btn'} onClick={this.handleClickPlus}>+</button>
                </div>
            </div>
        )
    }

}
root.render(<Counter/>)