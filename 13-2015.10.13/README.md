# component lifecycle

- Mounting:A component is being inserted into the DOM. (当一个组件被插到dom里面的时候)
- Updating: A component is being re-rendered to determine if the DOM should be updated.
(组件被重新渲染，决定DOM是否需要更新)
- Unmounting: A component is being removed from the DOM.(组件被移除出DOM)

## Mounting
- getInitialState():

```
object is invoked before a component is mounted. Stateful components should implement this and return the initial state data.
在组件被加载之前，有效的组件应该先运行这个函数，然后返回默认的state数据
```
- componentWillMount()
```
is invoked immediately before mounting occurs.
在组件被加载之前的瞬间立刻执行
```
- componentDidMount()
```
 is invoked immediately after mounting occurs. Initialization that requires DOM nodes should go here.
 在组建被加载后发生
```

## Updating

- componentWillReceiveProps(object nextProps)

```
is invoked when a mounted component receives new props.
 This method should be used to compare
 this.props and nextProps to perform state transitions using this.setState().
 当组件有新的props属性添加的时候
```

- shouldComponentUpdate(object nextProps, object nextState):

```
boolean is invoked when a component decides whether any changes warrant an update to the DOM.
Implement this as an optimization to compare this.props with nextProps
and this.state with nextState and return false if React should skip updating.
```
- componentWillUpdate(object nextProps, object nextState)

```
is invoked immediately before updating occurs. You cannot call this.setState() here.
当组件被更新前执行，不能用this.setState()在这个函数里面
```
- componentDidUpdate(object prevProps, object prevState)

```
is invoked immediately after updating occurs.
组件更新后执行
```