const organizeInstructors = function(instructors) {
  const result = {};
  instructors.forEach((instructor) => {
    if (result[instructor.course]) {
      result[instructor.course].push(instructor.name);
    } else {
      result[instructor.course] = [instructor.name];
    }
  });
  return result;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));