/**
 * Created by Jackey Li on 2015/10/11.
 */
(function (React, ReactDOM) {
    'use strict';

    var UserList = React.createClass({

        render: function () {
            var users = this.props.userList.map(function (user) {
                return (
                    <div>{user.userName}</div>
                );
            });
            return (
                <div>{users}</div>
            );
        }
    });

    var UserBox = React.createClass({

        getInitialState: function () {
            return {
                data: [],
                userList: [
                ],
                title: 'User List'
            };
        },

        loadUserList: function () {
            var that = this;
            $.ajax({
                type: 'POST',
                url: 'users.json',
                dataType: 'json',
                success: function (data) {
                    that.setState(
                        {
                            userList: data
                        }
                    );
                },
                error: function (xhr, status, err) {
                    console.log(err);
                }
            });
        },
        componentDidMount: function () {
          this.loadUserList();
        },

        render: function () {
            return (
                <div>
                    <h1>{this.state.title}</h1>
                    <UserList userList={this.state.userList}></UserList>
                </div>
            );
        }
    });

    ReactDOM.render(
        <UserBox />,
        document.getElementById('container')
    );

})(React, ReactDOM);