# react��ֵ

```
 var Introduction = React.createClass({
        render: function () {
            return (
                <div>
                    <h1>HI</h1>
                    <MyName myName='Jackey'></MyName>
                    <MyAge myAge='26'></MyAge>
                </div>
            );
        }
    });

```

```
 var MyName = React.createClass({
        render: function () {
            return (
                <div>myName: {this.props.myName}</div>
            );
        }
    });
```

use this.props.xxxȥ�õ������ϵ�����ֵ

����angularJs��directive��ֵ

```
<element data-attr='xxx'></element>

angular.module('xx').directive('xx',[function(){
    return {
        restrict:'AE',
        scope:{
            xxx:'=',
            xxx:'&',
            xxx:'@'
        },
        link:function(){}
    };
}]);
```