var React = require('react');

var Operation = React.createClass({
    render: function() {
        return(
            <button className={this.props.className + ' btn btn-primary'} onClick={this.props.onClick}>{this.props.value}</button>
        )
    }
});

module.exports = Operation;
