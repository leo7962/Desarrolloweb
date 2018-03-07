function BinarySearchTree(){
  this._root = null;
}

var node = {
  value: value,
  left: null,
  right: null
}

BinarySearchTree.prototype = {
  constructor: BinarySearchTree,
  insert: function (node, current) {
    if (node.value < current.value) {
      if (current.left === null) {
        current.left = node;
      } else {
        this.insert(node, current.left);
      }
    } else if (node.value > current.value) {
      if (current.right === null) {
        current.right = node;
      } else {
        this.insert(node, current.right);
      }
    }
  },
  add: function (value){
    var node = {
      value: value,
      left: null,
      right: null
    }

    if (this._root === null) {
      this._root = node;
    } else {
      this.insert(node, this._root);
    }
  },
}
findValues: function(value, current, parent){
  if (current === null) {
    return null;
  }
  if (value < current.value) {
    return this.findValues(value, current.left, current);
  }else if (value > current.value) {
    return this.findValues(value, current.right, current);
  }else {
    return {
      current,
      parent
    }
  }
}

remove: function (value) {
  var replacement = null,
      replacementParent = null;
  var v = this.findValues(value, this._root, null);

  if (v !== null) {
    var childCount = (v.current.left !== null ? 1 : 0) + (v.current.right !== null ? 1:0);
    if (v.current === this._root) {

    }else {

    }
  }
},

var childCount = (v.current.left !== null ? 1:0) + (v.current.right !== null ? 1:0);

if (v.current === this._root){
  switch (childCount) {
    case 0:
      this._root = null;
      break;
    case 1:
      this._root = (v.current.right === null ? v.current.left : v.current.right)
      break;
    case 2:
      replacement = this._root-left;

      while (replacement.right !== null) {
        replacementParent = replacement;
        replacement = replacement.right;
      }
      break;
    default:

  }
}
