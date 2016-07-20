var React = require('react');

var App = React.createClass({
    render: function () {
        return (
            <div className='container'>
                <div className='jumbotron' >
                    <h1>Simple Calculator</h1>
                    <input type='number' placeholder='value1'/>
                    <input type='number' placeholder='value2'/>
                </div>
            </div>
        )
    }
})

module.exports = App;
