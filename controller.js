const data = require('./data');

class Controller {

    async getUsers() {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    }
    async getUser(id) {
        return new Promise((resolve, reject) => {
            const user = data.filter(user => user.id === id);
            if(user)
                resolve(user);
            else
                reject({message: "User not found"});
        });
    }
    async createUser(user) {
        return new Promise((resolve, reject) => {
            let newUser = {
                id: Math.floor(Math.random() * 100),
                name: user.name
            };
            resolve(newUser);
        });
    }
    async deleteUser(id) {
        return new Promise((resolve, reject) => {
            const user = data.filter(user => user.id === id);
            if(user)
                resolve(user);
            else
                reject({message: "User not found"});
        });
    }
}

module.exports = Controller;