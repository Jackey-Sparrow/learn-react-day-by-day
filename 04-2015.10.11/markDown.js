/**
 * Created by Jackey Li on 2015/10/11.
 */
(function (React, ReactDOM) {
    'use strict';

    var MarkDown = React.createClass({
        rawMarkup: function () {
            var rawMarkup = marked(this.props.children.toString(), {sanitize: false});
            return {__html: rawMarkup};
        },
        render: function () {
            return (
                <div>
                    <h1>markdown:</h1>
                    <span dangerouslySetInnerHTML={this.rawMarkup()} />
                </div>
            );
        }
    });


    ReactDOM.render(
        <MarkDown children='<p style="color:red;">hi </p>'></MarkDown>,
        document.getElementById('container')
    );

})(React, ReactDOM);