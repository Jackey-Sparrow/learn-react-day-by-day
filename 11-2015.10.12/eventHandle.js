/**
 * Created by Jackey Li on 2015/10/12.
 */
(function (React, ReactDOM) {
    'use strict';

    var LikeBtn = React.createClass({
        getInitialState: function () {
            return {liked: false};
        },
        handleClick: function () {
            this.setState({liked: !this.state.liked});
        },
        render: function () {
            var text = this.state.liked ? 'like' : ' do not like';
            return (
                <div onClick={this.handleClick}>{text}</div>
            );
        }
    });

    ReactDOM.render(
        <LikeBtn/>,
        document.getElementById('container')
    );


})(React, ReactDOM);