// This will count the number of elements that are within a given object based on the number of keys within the object.

function countProperties(obj) {
  var count = 0;

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) ++count;
    // console.log(prop.toString());
  }
  console.log(count);
  return count;
}
