const User = require("../../models/users");

const create = async (userData) => {
    const { firstName, lastName, username, password, email } = userData
    
    /// tomar el password
    // obtener el hash del password
    // enviar al modelo el hash

  const user = new User({ firstName, lastName, username, hasheado, email });
  return await user.save();
};


const getJwt = () {

    // obtener los datos del usuario
    // verificar que el usuario y contraseña sean validos
    // Si son validos retornar un JWT
        // el payload del JWT, debe contener el id del usuario, en el atributo sub:

}

// POST /login
/**
 * {
 *  username: "Alfabalt",
 *  password: "Pass123"
 * }
 */
// POST /auth
// POST /signin

