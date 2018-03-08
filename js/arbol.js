//Estructura Base
//Aquì crearemos un objeto que tenga un atributo que se llamará root este será la raiz principal del arbol y como empieza vacio, es asignado Null
function BinarySearchTree(){
  this._root = null;
}
//Creando por donde los nodos se van a estructurar, izquierda y derecha, estos nodos tendran un valor principal
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
    } else if ( node.value > current.value ){
      if (current.right === null) {
        current.right = node;
      } else {
        this.insert(node, current.right);
      }
    }
  },
  //Esta funciòn es la principal y por el cual llamaremos para añadir un nuevo valor al nodo
  add: function (value) {
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
//Creando la función remove para ello hay que mover los valores hijos que tendremos, empezando con una funcion de busqueda
findValues: function(value, current, parent) {
    if (current === null) {
      return null;
    }

    if (value < current.value) {
      return this.findValues(value, current.left, current);
    } else if (value > current.value) {
      return this.findValues(value, current.right, current);
    } else {
      return {
        current,
        parent
      }
    }
  }
//Esta es la función por la cual tendremos que realizar la eliminación del nodo y es la más compleja
remove: function (value) {
  var replacement = null,
      replacementParent = null;

  var v = this.findValues(value, this._root, null);

  if (v !== null) {
    var childCount = (v.current.left !== null ? 1 : 0) + (v.current.right !== null ? 1 : 0);

    if (v.current === this._root) {

    } else {
    }
  }
},
//aquí se creará dos variables que usaremos posteriormente
var childCount = (v.current.left !== null ? 1 : 0) + (v.current.right !== null ? 1 : 0);
//aquí se verifica si es el nodo a eliminar es el principal, aquí se tiene tener en cuenta si ese nodo tiene o no hijos y esto desplegará tres casos posibles
if (v.current === this._root) {
        switch (childCount) {
          case 0:
            this._root = null;
            break;
          case 1:
            this._root = (v.current.right === null ? v.current.left : v.current.right)
            break;
          case 2:
            replacement = this._root.left;

            while(replacement.right !== null) {
              replacementParent = replacement;
              replacement = replacement.right;
            }

            if (replacementParent !== null) {
              replacementParent.right = replacement.left;

              replacement.right = this._root.right;
              replacement.left = this._root.left;
            } else {
              replacement.right = this._root.right;
            }

            this._root = replacement;

        }
      }
//en caso de que no tenga hijos, simplemente cambiamos su valor por null, si tiene un hijo hay que saber cual es el valor que existe, si es de izquierda o derecha
//aquí buscamos el nodo izquierdo cuyo valor sea más grande, para ello recorrerá por todos los nodos de lado derecho si es que es el primer nodo tiene un hijo derecho
replacement = this._root.left;

while(replacement.right !== null) {
  replacementParent = replacement;
  replacement = replacement.right;
}
//Si encuentra nodos en la derecha, tenemos las variables replacement y replacementParent con el último nodo del lado derecho y su padre respectivamente, para ello intercambiamos los valores
if (replacementParent !== null) {
  replacementParent.right = replacement.left;
  replacement.right = this._root.right;
  replacement.left = this._root.left;
}
//primero asignamos al nodo derecho el replacementParent, el valor del nodo izquierdo por replacement en este caso hará un completo recorrido para verificar el valor de los nodos izquierdo o derecho
// Si el nodo a eliminar no es el nodo principal, si el nodo hijo es eliminado, se resuelve dependiendo de la cantidad de hijos que tenga
if (v.current === this._root) {

} else {
  switch (childCount) {
    case 0:
      if (v.current.value < v.parent.value) {
        v.parent.left = null;
      } else {
        v.parent.right = null;
      }
      break;
    case 1:
      if (v.current.value < v.parent.value) {
        v.parent.left = (v.current.left === null ? v.current.right : v.current.left);
      } else {
        v.parent.right = (v.current.left === null ? v.current.right : v.current.left);
      }
      break;

    case 2:
      replacement = v.current.left
      replacementParent = v.current;

      while (replacement.right !== null) {
        replacementParent = replacement;
        replacement = replacement.right;
      }

      replacementParent.right = replacement.left;

      replacement.right = v.current.right;
      replacement.left = v.current.left;

      if (v.current.value < parent.value) {
        v.parent.left = replacement;
      } else {
        v.parent.right = replacement;
      }
  }
}
//En este caso el nodo que no tiene hijos, haremos una verificación si es el nodo izquierdo o derecho el cual eliminaremos
if (v.current.value < v.parent.value) {
  v.parent.left = null;
} else {
  v.parent.right = null;
}
//si el valor del nodo a eliminar es menor al izquierdo, y si es mayor entonces es el derecho
//Si el nodo tiene un hijo lo inter por el nodo a eliminar, comprobando el lugar del nodo (Izquierda, derecha)
if (v.current.value < v.parent.value) {
  v.parent.left = (v.current.left === null ? v.current.right : v.current.left);
} else {
  v.parent.right = (v.current.left === null ? v.current.right : v.current.left);
}
//por ultimo, en caso de que el nodo tenga dos hijos, empezando por el nodo izquierdo del nodo a eliminar, buscará el último nodo derecho que exista, si tiene un hijo izquierdo se intercambia por el nodo replacement

replacementParent.right = replacement.left;
// se le asignará el valor que los hijos del nodo a eliminar

replacement.right = v.current.right;
replacement.left = v.current.left;
// Buscaremos si el nodo a eliminar esta del lado izquierdo o derecho, lo reemplazamos por el replacement

if (v.current.value < parent.value) {
  v.parent.left = replacement;
} else {
  v.parent.right = replacement;
}

//este metodo es util para saber si un valor se encuentra en el arbol:
contains: function(value) {
  return this.findValue(value, this._root);
}

findValue: function(value, current){
  if (current === null) {
    return false;
  }
  if (value < current.value) {
    return this.findValue(value, current.left);
  } else if (value > current.value) {
    return this.findValue(value, current.right);
  }else {
    return true;
  }
},
// Esre metoddo sirve para recorrer todo el árbol y obtener los valores de cada nodo
traverse: function (process) {
  function inOrder(node) {
    if (node) {
      if (node.left !== null) {
        inOrder(node.left);
      }
      process.call(this, node);

      if (node.right !== null) {
        inOrder(node.right);
      }
    }
  }
  inOrder(this._root);
}
//cuenta el nùmero de nodos
size: function () {
  var length = 0;

  this.traverse(function (node) {
    length++;
  });
  return length;
}
// Regresa un array con los valores de cada nodo de menor a mayor.
toArray: function () {
  var result =[];
  this.traverse(function(node) {
    result.push(node.value);
  });
  return result;
}
// Regresala lista de números en formato String
toString: function () {
  return this.toArray().toString();
}
