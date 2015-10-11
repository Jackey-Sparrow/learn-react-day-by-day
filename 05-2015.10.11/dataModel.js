/**
 * Created by Jackey Li on 2015/10/11.
 */
(function (React, ReactDOM) {
    'use strict';

    var users = [
        {
            id: 1,
            userName: 'Jackey',
            age: 26
        },
        {
            id: 2,
            userName: 'LiHaozhou',
            age: 26
        }
    ];

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

    var UserBox = React.createClass({
        render: function () {
            return (
                <div className="userList">
                    <h1>Users</h1>
                    <UserList users={this.props.users}/>
                </div>
            );
        }
    });

    ReactDOM.render(
        <UserBox users={users}/>,
        document.getElementById('container')
    );

})(React, ReactDOM);