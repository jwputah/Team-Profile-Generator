const Employee = require('./employee')

class Engineer extends Employee {
    constructor(id, name, email, gitHub){
        super(id, name, email)
        this.gitHub = gitHub
    }

    getGitHub() {
        return this.gitHub
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;