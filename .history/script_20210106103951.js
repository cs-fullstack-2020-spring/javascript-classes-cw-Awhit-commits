//Problem 1
class GitHubRepository {
  //constructing properties
  constructor(name, file, desc, code) {
    this.userName = name;
    this.fileName = file;
    this.descritionOfRepository = desc;
    this.code = code;
  }
  //Creating a method for printing the properties
  printGit() {
    // alert(`
    //     Username: ${this.userName}
    //     File Name:${this.fileName}
    //     Description:${this.descritionOfRepository}
    //     Code:${this.code}`);
  }
}
//Creating an instance
let git = new GitHubRepository(
  "Awhit-commits",
  "Dice Roll",
  "Rolling Dice",
  "C++"
);
let git1 = new GitHubRepository(
  "Awhit-commits",
  "Dice Roll",
  "Rolling Dice",
  "C++"
);
let git2 = new GitHubRepository(
  "GrandStand",
  "Dice Roll",
  "Rolling Dice",
  "C++"
);
git.printGit();
let newArray = [git,git1,git2];
let movieList = document.getElementById("showGit")
let newMovieArray = []

 for (let index = 0; index < newArray.length; index++) {
    const element = newArray[index];
    console.log(element)
    newMovieArray.push(element)
    movieList.innerHTML = 
    
    


    
}



// //Problem 2
// class Movie {
//     constructor(name, rating, year) {
//         this.movieName = name;
//         this.rating = rating;
//         this.yearReleased = year;
//     }
//     //Prompting the user to change what year the movie was released
//     changeMovieYear(newYear) { // !! this method should not accept any parameters because you are prompting for the newYear
//         newYear = prompt("When was the movie released?") // !! don't forget about your line terminators (it's a best practice)
//         this.yearReleased = newYear;

//     }
//     //Change the rating if need
//     changeMovieRating() { // !! this method should not accept any parameters because you are prompting for the newRating
//         newRate = prompt("What is the new rating?")
//         this.rating = newRate
//     }
//     //Printing method for debugging and ensuring everything was working properly
//     // !! NICE addition to the requirements
//     printMovie() {
//         console.log(`
//         Name:${this.movieName}
//         Rating:${this.rating}
//         Year:${this.yearReleased}`)
//     }
// }
// let oldMovie = new Movie("Bad Boys II", "5/5", 2004);
// // oldMove.printMovie();
// //A small debugging statement to make sure the method was coded correctly
// oldMovie.changeMovieYear();
// console.log(`Correction: This movie was released in ${oldMovie.yearReleased}`) // !! great check
// oldMovie.changeMovieRating();
// console.log(`The new rating is a ${oldMovie.rating}`); // !! great check

// class Student {
//     constructor(name, cohort) {
//         this.studentName = name;
//         this.codeSchoolCohort = cohort;
//         this.grades = [];

//     }
//     printStudent() { // !! this method should CHANGE the student name, not PRINT the student name, and should have one parameter
//         // !! Would have linked to see the functionality for the method completed since it is similar to what we did in class
//         console.log(`${this.studentName}.....${this.codeSchoolCohort}`)

//     }
//     Assignment() { // !! assignemntName and assignmentScore are NOT properties of the object of your child (see constructor)
//         this.assignmentName = name;
//         this.assignmentScore = grade;

//     }
// }
