const secondLargestNumber = () => {
  let arr = [20, 120, 111, 215, 210, 54, 78]; // use int arrays
  let max = Math.max.apply(null, arr); // get the max of the array
  arr.splice(arr.indexOf(max), 1); // remove max from the array
  return Math.max.apply(null, arr); // get the 2nd max
};

document.getElementById(
  "displayResults"
).textContent = `The second largest number in the array is : ${secondLargestNumber()}`;
