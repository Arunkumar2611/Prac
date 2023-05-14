var array = [
    {id: 1, title: 'hello', parent: 0},
    {id: 2, title: 'hello', parent: 0},
    {id: 3, title: 'hello', parent: 1},
    {id: 4, title: 'hello', parent: 3},
    {id: 5, title: 'hello', parent: 4},
    {id: 6, title: 'hello', parent: 4}
];

function getNestedChildren(arr, parent) {
    var children = [];
    for(var i =0; i < arr.length; ++i) {
        if(arr[i].parent == parent) {
            var grandChildren = getNestedChildren(arr, arr[i].id);
            if(grandChildren.length) {
                arr[i].children = grandChildren;
            }
            children.push(arr[i]);
        }
    }
    return children;
}
var nest = getNestedChildren(array,0);
console.log(JSON.stringify(nest, undefined, 2));
