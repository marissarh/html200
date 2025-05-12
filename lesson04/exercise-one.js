/*Create a JavaScript file that does the following:

Do a console log after each item

Create an array, with at least 5 strings
Add an element to the end of the end of the array
Remove the third element (((3rd index?)))
Create a string from the elements and comma separate them*/

let arr = ["cat", "dog", "bird", "fish", "bunny"];
 console.log(arr);

 arr.push("horse");
console.log(arr);

arr.splice(3,1);
console.log(arr);

let str= arr.join(',');
console.log(str);