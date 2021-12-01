const instructorWithLongestName = function(instructors) {
  let match = instructors[0];
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > match.name.length) {
      match = instructors[i];
    }
  }
  return match;
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
