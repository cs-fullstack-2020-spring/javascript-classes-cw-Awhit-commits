// //Problem 1

// class GitHubRepository{
//     //constructing properties
//     constructor(name,file,desc,code){
//         this.userName = name;
//         this.fileName = file;
//         this.descritionOfRepository = desc;
//         this.code = code;
//     }
//     //Creating a method for printing the properties
//     printGit(){
//         console.log(`
//         Username: ${this.userName}
//         File Name:${this.fileName}
//         Description:${this.descritionOfRepository}
//         Code:${this.code}`)
//     }
// }

// //Creating an instance

// let git = new GitHubRepository("Awhit-commits","Dice Roll","Rolling Dice","C++");
// git.printGit();

// //Problem 2 

// class Movie{
//     constructor(name,rating,year){
//         this.movieName = name;
//         this.rating= rating;
//         this.yearReleased = year;
//     }
//     //Prompting the user to change what year the movie was released
//     changeMovieYear(newYear){
//         newYear =prompt("When was the movie released?")
//         this.yearReleased = newYear;
        
//     }

//     //Change the rating if need

//     changeMovieRating(newRate){
//         newRate = prompt("What is the new rating?")
//         this.rating = newRate
//     }
//     //Printing method for debugging and ensuring everything was working properly 
//     printMovie(){
//         console.log(`
//         Name:${this.movieName}
//         Rating:${this.rating}
//         Year:${this.yearReleased}`)
//     }

    

// }
// let oldMovie = new Movie("Bad Boys II", "5/5", 2004);
// // oldMove.printMovie();
// //A small debugging statement to make sure the method was coded correctly
//  oldMovie.changeMovieYear();

// console.log(`Correction: This movie was released in ${oldMovie.yearReleased}`)

// oldMovie.changeMovieRating();
// console.log(`The new rating is a ${oldMovie.rating}`);

class Student{
    constructor(name, cohort){
        this.studentName = name;
        this.codeSchoolCohort = cohort;
        this.grades = [];

    }
    printStudent(){
        console.log(`${this.studentName}.....${this.codeSchoolCohort}`)

    }
    Assignment(){
        this.assignmentName = name;
        this.assignmentScore = grade;
        

    }
    


}