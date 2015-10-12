/**
 * Created by Jackey Li on 2015/10/12.
 */
(function (React, ReactDOM) {
    'use strict';

    var Comment = React.createClass({
        render: function () {
            return (
                <div>{this.props.myName} {this.props.myAge}</div>
            );
        }
    });

    var props = {};
    props.myName = 'Jackey';
    props.myAge = 26;

    //rewrite
    var component = <Comment {...props} myAge={27}/>

    ReactDOM.render(component, document.getElementById('container'));

})(React, ReactDOM);