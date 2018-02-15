const fs = require('fs');

module.exports = students; 
/* Load sync files into a global variable
 * This serves as an in-memory cache for speedy access.
 */
var students = JSON.parse(fs.readFileSync("students.json", {encoding: 'utf-8'}));

//TODO: Provide a list of students
//TODO: Add a new student to the list


/** @function getStudents
 * Provides a list of studnets
 * @return {Array} array of student objects
 **/

 function getStudents(){
     //Clone and return the student object
     return JSON.parse(JSON.stringify(students));

 }

 /** @function addStudent
 *  Add a new student to the list
 * Callback paramters are (error, student)
 * @param {Object} student - the student to add
 * @param {function} callback - a callback funtion to call back when
 *  this operation finishes
 **/
function addStudent(student){
    // TODO: validate the student object

    students.push(student);
    callback(false);
    
}

