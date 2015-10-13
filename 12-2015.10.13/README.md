# getDefaultProps 设置props

```
getDefaultProps: function () {
    return {myName: 'Jackey'};
}
```

# mixins 重复使用一些方法

# componentWillMount-> render-> componentDidMount
```
componentWillMount: function () {
    console.log('componentWillMount');
},
 render: function () {
    console.log('render');
    return (
        <h2>hello, I am {this.props.myName}</h2>
    );
}
componentDidMount: function () {
    console.log('componentDidMount');
},

```