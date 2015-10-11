/**
 * Created by Jackey Li on 2015/10/11.
 */
(function (React, ReactDOM) {
    'use strict';

    var CommentList = React.createClass({
        render: function () {
            return (
                <div className='commentList'>
                    Hello world! I am a commentList
                </div>
            );
        }
    });

    var CommentForm = React.createClass({
        render: function () {
            return (
                <div className='commentForm'>
                    hello world! I am commentForm
                </div>
            );
        }
    });

    var CommentBox = React.createClass({
        displayName: 'CommentBox',
        render: function () {
            return (
                <div className='commentBox'>
                    <h1>Comments</h1>
                    <CommentList />
                    <CommentForm />
                </div>
            );
        }
    });


    ReactDOM.render(
        <CommentBox />,
        document.getElementById('container')
    );
})(React, ReactDOM);