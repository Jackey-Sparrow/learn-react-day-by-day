/**
 * Created by Jackey Li on 2015/10/12.
 */
(function (React, ReactDOM) {
    'use strict';

    var child1 = React.createElement('li', null, 'First text container');
    var child2 = React.createElement('li', null, 'Second text container');
    var root = React.createElement('ul', {className: 'my-list'}, child1, child2);

    var root1 = React.DOM.ul({className: 'my-list'}, React.DOM.li(null, 'first content'));

    ReactDOM.render(root1, document.getElementById('container'));
})(React, ReactDOM);