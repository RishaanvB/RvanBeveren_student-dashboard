import studentDB from "../mock-data/students.json";

const getAvgRating = (array, funRating, difficultyRating) => {
  /*  creates new array of objects with avg rating of all students in format: [
    {
        "name": "All",
        "assignment": "assignment",
        "difficultyRating": avg,
        "funRating": avg
      }, {},{}... */
  const filteredByAssignment = array.map((student) => student.assignment);
  const uniqueAssignments = [...new Set(filteredByAssignment)];
  //   console.log(uniqueAssignments);
  const sortedByAssignment = uniqueAssignments.map((assignment) => {
    const funRatingList = array
      .filter((student) => student.assignment === assignment)
      .map((student) => student[funRating]);
    // console.log(funRatingList, "fun");

    const difficultyRatingList = array
      .filter((student) => student.assignment === assignment)
      .map((student) => student[difficultyRating]);
    // console.log(difficultyRatingList, "diff");
    return {
      assignment: assignment,
      arrayDifficultyRating: difficultyRatingList,
      arrayFunRating: funRatingList,
    };
  });

  const reducer = (acc, curr) => acc + curr;
  const avgRating = sortedByAssignment.map((item) => {
    const avgFunNumber =
      item.arrayFunRating.reduce(reducer) / item.arrayFunRating.length;
    const avgDifficultyNumber =
      item.arrayDifficultyRating.reduce(reducer) /
      item.arrayDifficultyRating.length;
    return {
      name: "Average",
      assignment: item.assignment,
      difficultyRating: avgDifficultyNumber,
      funRating: avgFunNumber,
    };
  });
  //   console.log(avgRating);
  return avgRating;
};

const studentsAvg = getAvgRating(studentDB, "funRating", "difficultyRating");
// console.log(studentsAvg, "studentsavg");

const allStudentsData = studentDB.concat(studentsAvg);
// console.log(allStudentsData, "studentData");

export default allStudentsData;
