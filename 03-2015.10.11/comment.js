/**
 * Created by Jackey Li on 2015/10/11.
 */
(function (React, ReactDOM) {
    'use strict';

    var MyName = React.createClass({
        render: function () {
            return (
                <div>myName: {this.props.myName}</div>
            );
        }
    });

    var MyAge = React.createClass({
        render: function () {
            return (
                <div>myAge: {this.props.myAge}</div>
            );
        }
    });

    var Introduction = React.createClass({
        render: function () {
            return (
                <div>
                    <h1>HI</h1>
                    <MyName myName='Jackey'></MyName>
                    <MyAge myAge='26'></MyAge>
                </div>
            );
        }
    });

    ReactDOM.render(
        <Introduction />,
        document.getElementById('container')
    );
})(React, ReactDOM);