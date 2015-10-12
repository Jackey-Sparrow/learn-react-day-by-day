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