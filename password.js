const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Welcome to the password validator! Do you have a password you would like to validate? If so, type it here!(A good password will be between 10-30 characters and contain a '.' and '!'", function(answer){
    // let characters = answers.split(''); 
    // console.log(characters)
    if(answer.length >= 10 && answer.length <= 30 && answer.includes("!") && answer.includes(".")) {
            console.log(`
            ╱╱┏╮
            ╱╱┃┃
            ▉━╯┗━╮
            ▉┈┈┈┈┃
            ▉╮┈┈┈┃
            ╱╰━━━╯
            You are good to go!`)
        }
        else if(answer.length >= 10 && answer.length <= 30 && answer.includes("!")) {
            console.log(`
            __ 
            _____            |  |
           |     |___ ___ ___|  |
           |  |  | . | . |_ -|__|
           |_____|___|  _|___|__|
                     |_|          
            Ooops! Looks like you are missing a '.' Make sure to put one in for a secure password!`)
        }else if(answer.length >= 10 && answer.length <= 30 && answer.includes(".")){
            console.log(`
            __ 
            _____            |  |
           |     |___ ___ ___|  |
           |  |  | . | . |_ -|__|
           |_____|___|  _|___|__|
                     |_|          
            Ooops! Looks like you are missing a '!' Make sure to put one in for a secure password!`)
        }else if(answer.length < 10) {
            console.log(`
            __ 
            _____            |  |
           |     |___ ___ ___|  |
           |  |  | . | . |_ -|__|
           |_____|___|  _|___|__|
                     |_|          
            Ooops! Looks like your password is too short! Make sure to put more characters in to make it as secure as possible!`)
        } else if (answer.length >30) {
            console.log(`
            __ 
            _____            |  |
           |     |___ ___ ___|  |
           |  |  | . | . |_ -|__|
           |_____|___|  _|___|__|
                     |_|          
            Ooops! Looks like your password is too long! Make sure to cut a few characters to make it a valid password!`)
        }
    reader.close()
})