# use attr: ref

```
 <input type='text' placeholder='userName' ref='userName'/>
 <input type='text' placeholder='password' ref='password'/>
```

# you can set back the input value

```
this.refs.userName.value = 'xxx';

```

```
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
                <input type="submit" value="Post" />
            </form>
        );
    }
});
```