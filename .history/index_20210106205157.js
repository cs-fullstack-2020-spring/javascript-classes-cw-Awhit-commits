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
    alert(`Your first name is ${newPerson.firstName}\nYour last name is ${newPerson.lastName\n}`)
}
problem1();