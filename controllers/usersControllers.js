const { User } = require("../models");

class Users {

    async createUser(body) {

        let password = body.password
        let passwordHashed = bcrypt.hasSync(password,10)

        body.password = passwordHashed
        return User.create(body);
    }

    async nameUse(nombre){
        return User.findOne({
            where: {nombre}
        })
    }

    async findAllUsers() {
        return User.findAll();
    }

    async modifyUser(body) {

        return User.update(
            //DAtos que cambiamos
            {
                edad: body.edad,
                direccion: body.direccion,
                cp: body.cp,
                email: body.email,
                telefono: body.telefono
            },
            //Donde
            { where: {id: body.id}}

        )
    }

    async userId(id) {

        return User.findByPk(id);
    }

    async deleteUser(id){

        return User.destroy({where: {id: id}});
    }

}


let usersController = new Users();
module.exports = usersController;