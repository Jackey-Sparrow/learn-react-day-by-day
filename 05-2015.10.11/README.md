# ����repeat

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

�Ȱ�htmlƴ�ճ���
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