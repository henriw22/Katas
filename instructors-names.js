const instructorWithLongestName = function(instructors) {
  let result = {
    name: "",
    course: ""
  };

  for (let instructor of instructors) {
    if (instructor['name'].length > result['name'].length) {
      result = instructor;
    }
  }
  return result;
};


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));


// expected output:
// {name: "Jeremiah", course: "Web"}
// {name: "Domascus", course: "Web"}