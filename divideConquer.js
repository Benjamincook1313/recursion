
const array = [1, 3, 5, 4, -3, 10, -1, 0, 15, 20]

const binarySearch = (arr, left, right, target) => {
  if(left > right) return -1

  const mid = (left + right) / 2

  if(target === arr[mid]) return mid

  if(target < arr[mid]) return binarySearch(arr, left, mid - 1, target)

  return binarySearch(arr, left + 1, right, target)
};

// console.log(binarySearch(array, 0, array.length - 1, 10))

const mergeSort = (arr, start, end) => {
  
};

