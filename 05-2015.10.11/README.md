# 数据repeat

```
var UserList = React.createClass({
    render: function () {
        var users = this.props.users.map(function (user) {
            return (
                <div>{user.userName}</div>
            );
        });
        return (
            <div>
                {users}
            </div>
        );
    }
});

```

先把html拼凑出来
```
var users = this.props.users.map(function (user) {
    return (
        <div>{user.userName}</div>
    );
});

```

return

```
 return (
        <div>
            {users}
        </div>
    );

```