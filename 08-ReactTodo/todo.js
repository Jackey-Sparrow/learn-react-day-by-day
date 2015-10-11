/**
 * Created by Jackey Li on 2015/10/11.
 */
(function (React, ReactDOM) {
    'use strict';

    var UserModel = function () {
        this.userList = [
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
        ];
    };

    UserModel.prototype.addUser = function (user) {
        user.id = 3;//todo: get next id
        this.userList.push(user);
    };

    UserModel.prototype.getUserList = function () {
        return this.userList;
    };

    var userModel = new UserModel();

    var UserList = React.createClass({
        loadUserList: function () {
            this.setState({
                userList: userModel.getUserList()
            });
        },
        getInitialState: function () {
            return {
                userList: []
            };
        },
        componentDidMount: function () {
            this.loadUserList();
            setInterval(this.loadUserList, 1000);
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
        handleSubmit: function (e) {
            e.preventDefault();
            var user = {
                userName: this.refs.userName.value,
                age: this.refs.age.value
            };

            userModel.addUser(user);
        },
        render: function () {
            return (
                <div>
                    <h2>add User</h2>

                    <form onSubmit={this.handleSubmit}>
                        <input type='text' placeholder='userName' ref='userName'/>
                        <input type='text' placeholder='age' ref='age'/>
                        <input type='submit' value='Add User'/>
                    </form>
                </div>
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