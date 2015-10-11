# rawMarkup函数的声明，可以直接在render里面使用

```
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

```

