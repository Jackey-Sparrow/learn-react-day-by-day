/**
 * Created by Jackey Li on 2015/10/13.
 */
(function (React, ReactDOM) {
    'use strict';

    var DefaultNameMixin = {
        getDefaultProps: function () {
            return {myName: 'Jackey'};
        },
        componentWillMount: function () {
            console.log('componentWillMount');
        },
        componentDidMount: function () {
            console.log('componentDidMount');
        },
        componentWillUnmount: function () {
            console.log('componentWillUnmount');
        }
    };

    var ComponentOne = React.createClass({
        mixins: [DefaultNameMixin],
        render: function () {
            console.log('render');
            return (
                <h2>hello, I am {this.props.myName}</h2>
            );
        }
    });

    var ComponentTwo = React.createClass({
        mixins: [DefaultNameMixin],
        render: function () {
            return (
                <h3>hello, {this.props.myName} again</h3>
            );
        }
    });

    ReactDOM.render(
        <ComponentOne/>,
        document.getElementById('container')
    );

    //ReactDOM.render(
    //    <ComponentTwo/>,
    //    document.getElementById('container1')
    //);

})(React, ReactDOM);