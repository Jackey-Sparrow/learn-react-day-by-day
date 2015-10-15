/**
 * Created by Jackey Li on 2015/10/15.
 */
(function (React, ReactDOM) {
    'use strict';

    var GenericWrapper = React.createClass({
        componentDidMount: function () {
            console.log(this.props.children);
        },
        render: function () {
            return (
                <div></div>
            );
        }
    });

    ReactDOM.render(
        <GenericWrapper><span>1</span><span/><span/></GenericWrapper>,
        document.getElementById('container')
    );

})(React, ReactDOM);