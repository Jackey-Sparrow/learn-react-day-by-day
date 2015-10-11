# 使用getInitialState函数可以给state赋值，在render里面使用

getInitialState在页面渲染之前会执行


```
var UserList = React.createClass({

        getInitialState: function () {
            return {
                data: [],
                userList: [],
                userId: 4
            };
        },

        render: function () {
            return (
                <div>{this.state.userId}</div>
            );
        }
    });
```

```
this.state.xxx
```

# 异步加载数据使用componentDidMount

componentDidMount 在渲染之后执行

- 异步加载数据后，更新带UI上需要使用this.setState
- $.ajax里面success或者error后面都是需要bind(this)具体原因我暂时也不是很清楚

```
loadUserList: function () {
    $.ajax({
        type: 'POST',
        url: 'users.json',
        dataType: 'json',
        success: function (data) {
            this.setState(
                {
                    userList: data
                }
            );
        }.bind(this),
        error: function (xhr, status, err) {
            console.log(err);
        }.bind(this)
    });
},
componentDidMount: function () {
  this.loadUserList();
},
```