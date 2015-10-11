/**
 * Created by Jackey Li on 2015/10/11.
 */
(function (React, ReactDOM) {
    'use strict';

    var UserList = React.createClass({
        render: function () {
            return (
                <div>UserList</div>
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