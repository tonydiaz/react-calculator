var React = require('react');
var Operation = require('./Operation.jsx');

var App = React.createClass({
    getInitialState: function () {
        return {
            value1: "",
            value2: "",
            result: "",
        }
    },
    onClick: function(val, e) {
        var result;

        if(val === '+') {
            result = Number(this.state.value1) + Number(this.state.value2);
        } else if (val === '-') {
            result = Number(this.state.value1) - Number(this.state.value2);
        } else if (val === '*') {
            result = Number(this.state.value1) * Number(this.state.value2);
        } else if (val === '/') {
            result = Number(this.state.value1) / Number(this.state.value2);
        }

        this.setState({result: result});
    },
    onChange: function(val, e) {
        // Make the object to set the state.
         var obj = {};

         obj[val] = e.target.value;
        this.setState(obj)
    },
    render: function () {
        return (
            <div className='container'>
                <div className='jumbotron' >
                    <h1>Simple Calculator</h1>
                    <div className='row'>
                        <input
                            className='col-xs-6'
                            onChange={this.onChange.bind(this, 'value1')}
                            value={this.state.value1}
                        />
                        <input
                            className='col-xs-6'
                            onChange={this.onChange.bind(this, 'value2')}
                            value={this.state.value2} />
                    </div>
                    <br/>
                    <div className='row'>
                        <Operation className='col-xs-3' onClick={this.onClick.bind(this,"+")} value='Add +'/>
                        <Operation className='col-xs-3' onClick={this.onClick.bind(this,"-")} value='Subtract -'/>
                        <Operation className='col-xs-3' onClick={this.onClick.bind(this,"*")} value='Multiply *'/>
                        <Operation className='col-xs-3' onClick={this.onClick.bind(this,"/")} value='Divide /'/>
                    </div>
                    <br/>
                    <div className='row'>
                        <input className='col-xs-6' value={this.state.result} type='text'  disabled/>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = App;
