let problem1 = ()=>{
    let ContactInfo = class{
        constructor(firstName,lastName,email){
            this.firstName=firstName,
            this.lastName=lastName,
            this.email = email
            


        }
    }
    let newPerson = new ContactInfo("Andrew","Moore","andrew@trex.com")
    console.log(newPerson.firstName)
    alert(`Your first name is ${newPerson.firstName}\nYour last name is ${newPerson.lastName}\n Your email is ${newPerson.email}`)
}
// problem1();

let problem2 =()=>{
    let Movie = class{
        constructor(movieTitle,movieYear,rating){
            this.movieTitle = movieTitle,
            this.movieYear = movieYear,
            this.rating= rating
        }
    }

    let firstMovie = new Movie("Jackie Brown", "1999","5/5")
    let secondMovie = new Movie("Paid In Full", "2002","4/5")
    let thirdMovie = new Movie("", "1999","5/5")
    showMovie = document.getElementById("secondProblem")
    showMovie.innerHTML = (`<div>
        <h1>First Movie</h1>
        <p>${firstMovie.movieTitle}</p>
        <p>${firstMovie.movieYear}</p>
        <p>${firstMovie.rating}</p>
    </div>`
   <div>
        <h1>First Movie</h1>
        <p>${firstMovie.movieTitle}</p>
        <p>${firstMovie.movieYear}</p>
        <p>${firstMovie.rating}</p>
    </div>
}
problem2()