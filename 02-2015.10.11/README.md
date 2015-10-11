#  createClass出来的值(CommentBox)一定要大写！！

# React.createClass(obj)

参数为一个对象，对象里面包括render的一个函数,该函数返回一个html


所以形式为：

```
React.createClass({
    render:function(){
        return (html);
    }
});

```
然后再渲染

```
ReactDOM.render(html,element);

```


