// Problem 3: Create a BST class

/*
Walk through the binary search tree code in the curriculum 
and understand it well. Then write a BinarySearchTree class 
with its core functions (insert(), remove(), find()) from scratch.
*/

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  /******************** Insert function ************************/
  insert(key, value) {
    // if the tree is empty, then this key being inserted is the root node of the tree
    if (this.key === null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      /* If the tree already exists, then start at root,
          & compare it to the key you want to insert.
          If the new key is less than the node's key
          then the new node needs to live in the left-hand branch
          */
      /* If the existing node does not have a left child, 
             meaning that if the 'left' pointer is empty,
             then we can just instantiate and insert the new node
             as the left child of that node, passing 'this' as the parent
             */
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        /* If the node has an existing left child,
             then we recursively call the insert method 
             so the node is added further down the tree
             */
        this.left.insert(key, value);
      }
    } else {
      /* Similarly, if the new key is greater than the node's key
         then you do the same thing, but on the right-hand side */
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  /******************* (Retrieval) Find function *************************/
  find(key) {
    // If the item is found at the root then return that value
    if (this.key === key) {
      return this.value;
    } else if (key < this.key && this.left) {
      /* If the item you are looking for is less than the root
          then follow the left child.
          If there is an existing left child,
          then recursively check if its left and/or right child
          until you find the item. */
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      /* If the item you are looking for is greater than the root
          then follow the right child.
          If there is an existing right child,
          then recursively check its left and/or right child
          until you find the item. */
      return this.right.find(key);
    }

    // you have searched the tree and the item is not in the tree
    else {
      throw new Error('Key Error');
    }
  }

  /******************** Remove function ************************/
  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        /* If the node only has a left child,
              then you replace the node with its left child. */
        this._replaceWith(this.left);
      } else if (this.right) {
        /* And similarly if the node only has a right child
              then you replace it with its right child. */
        this._replaceWith(this.right);
      } else {
        /* If the node has no children then 
              simply remove it and any references to it
              by calling "this._replaceWith(null) */
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }
  }

  /****************** replaceWith function used with Remove function **************************/
  _replaceWith(node) {
    if (this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node;
      } else if (this === this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  /******************* findMin function used with Remove function *************************/
  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

  /********************* Depth-first search (DFS) ***************************/
  // start from the given node, traverse down until you reach a node with no children,
  // then start backtracking.
  // Time complexity: O(n), as each node needs to be visited.
  // This algorithm will simply traverse the nodes adding them to a values array
  dfs(values = []) {
      // if there is a left branch,
    if (this.left) {
        // recursively search the nodes there, then add the value at the current node to the array
      values = this.left.dfs(values);
    }
    // if there is a right branch
    if (this.right) {
        // recursively search the nodes there, then add the value at the current node to the array
      values = this.right.dfs(values);
    }
    return values;
  }


  /******************************** Breadth-first search ******************************/
  // Words across the rows of a tree. Top row handled 1st, then 2nd row, etc.
  // Requires a FIFO (first-in-first-out) queue to store all siblings in the queue and process them in the correct order
  // When visiting a node, add it to the queue, & children are visited, adding more values onto the queue.
  // Time complexity: O(n), because each node needs to be visited once.
  bfs(tree, values = []){
      const queue = new queue();    // Assuming a Queue is implemented 
      const node = tree.root;
      queue.enqueue(node);
      while(queue.length){
          const node = queue.dequeue(); //remove from the queue
          values.push(node.value);  // add that value from the queue to an array
        
          if(node.left){
              queue.enqueue(node.left); // add left child to the queue
          }
          if(node.right){
              queue.enqueue(node.right);    // add right child to the queue
          }
      }
      return values;
  }
}

module.exports = BinarySearchTree;
