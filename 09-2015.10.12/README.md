# React.createElement(type,config,children)

# ReactElement.createFactory(type)
```
ReactElement.createFactory = function(type) {
  var factory = ReactElement.createElement.bind(null, type);
  return factory;
};
```

# React.DOM.xx(config,children)

```
 var root1 = React.DOM.ul({className: 'my-list'}, React.DOM.li(null, 'first content'));
```

# in and without JSX

```
 var Person = React.createClass({
    render: function () {
        return (
            <div></div>
        );
    }
});


// Input (JSX):
var person = <Person name={window.isLoggedIn ? window.name : ''} />;

// Output (JS):
var person = React.createElement(
  Person,
  {name: window.isLoggedIn ? window.name : ''}
);
```