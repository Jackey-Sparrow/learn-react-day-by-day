/**
 * Created by Jackey Li on 2015/10/11.
 */
(function (React, ReactDOM) {
    'use strict';

    var CommentBox = React.createClass({
        render: function () {
            return (
                <div className='commentBox'>
                    hello world! I am a commentBox
                </div>
            );
        }
    });

    ReactDOM.render(
        <CommentBox />,
        document.getElementById('container')
    );
})(React, ReactDOM);