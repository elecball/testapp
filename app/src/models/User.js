const UserStorage = require("./UserStorage");


class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const { id, password } = UserStorage.getUsers(this.body.id);
        
        if (id) {
            if (id === this.body.id && password == this.body.password) {
                return { success: true };
            }
            return { success: false, msg: "wrong password" };
        }
        return { success: false, msg: "id not existed" };
    }
}

module.exports = User;