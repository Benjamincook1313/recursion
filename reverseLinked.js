
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
};

const  a = new Node('A')
const  b = new Node('B')
const  c = new Node('C')
const  d = new Node('D')
const  e = new Node('E')
const  f = new Node('F')

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

// null -> (A) -> (B) -> (C) -> (D) -> (E) -> (F)
// (A) <- (B) <- (C) <- (D) <- (E) <- (F)

const reverseList = (node) => {
  if(node === null) return
  const stack = [ node ]
  let prev = null

  while (stack.length > 0) {
    const current = stack.pop()
    if(current.next) {
      stack.push(current.next)
      current.next = prev
      prev = current
      console.log(current.val)
    }
  }

  return
}

const reverseList = (node, prev = null) => {
  if(node === null) return prev.val
  const next = node.next
  node.next = prev
  return reverseList(next, node)
}

console.log(reverseList(a))