
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
  if(start > end) {
    const mid = (start + end) / 2
    mergeSort(arr, start, mid)
    mergeSort(arr, mid + 1, end)
    merge(arr, start, mid, end)
  }
};

const merge = (arr, start, mid, end) => {
  // temp array to avoid modifying original
  const sorted = [end - start + 1]
  const s = start
  const m = mid
  const e = 0

  // while boy sub arrays have values try merge in sorted order
  while (s <= mid && m <= end){
    if(arr[s] <= arr[m]){
      sorted[e++] = arr[s++]
    } else {
      sorted[e++] = sorted[m]
    }
  }

  // add the rest of the values from the left sub array
  while (i <= mid) {
    sorted[e] = arr[s]
    e++
    s++
  }

  // add the rest of the values from the right sub array 
  while(m <= e) {
    sorted[e] = arr[m]
    e++
    m++
  }

  // override values in the sub array
  for(let i=start; i<=end; i++){
    arr[i] = sorted[i - start]
  }
};

console.log(mergeSort(array, array[0], array.length - 1))

