/**
 * Created by Jackey Li on 2015/10/11.
 */
(function (React, ReactDOM) {
    'use strict';

    var UserForm = React.createClass({
        handleSubmit: function (e) {
            e.preventDefault();
            var userName = this.refs.userName.value.trim();
            this.refs.userName.value = 'Jackey';//feedback
        },
        render: function () {
            return (
                <form className='userForm' onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='userName' ref='userName'/>
                    <input type='text' placeholder='password' ref='password'/>
                    <input type="submit" value="Post"/>
                </form>
            );
        }
    });

    ReactDOM.render(
        <UserForm/>,
        document.getElementById('container')
    );
})(React, ReactDOM);