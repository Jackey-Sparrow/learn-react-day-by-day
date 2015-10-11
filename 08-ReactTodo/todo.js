/**
 * Created by Jackey Li on 2015/10/11.
 */
(function (React, ReactDOM) {
    'use strict';

    var UserList = React.createClass({
        getInitialState: function () {
            return {
                userList: [
                    {
                        "id": 1,
                        "userName": "Jackey1",
                        "age": 26
                    },
                    {
                        "id": 2,
                        "userName": "Jackey2",
                        "age": 26
                    }
                ]
            };
        },
        render: function () {
            var users = this.state.userList.map(function (user) {
                return (
                    <div key={user.id}>{user.userName} {user.age}</div>
                );
            });
            return (
                <div>{users}</div>
            );
        }
    });

    var AddUser = React.createClass({
        render: function () {
            return (
                <div>add User</div>
            );
        }
    });

    var UserBox = React.createClass({
        render: function () {
            return (
                <div className='userBox'>
                    <h1>User List</h1>
                    <UserList/>
                    <AddUser/>
                </div>
            );
        }
    });

    ReactDOM.render(
        <UserBox/>,
        document.getElementById('container')
    );

})(React, ReactDOM);