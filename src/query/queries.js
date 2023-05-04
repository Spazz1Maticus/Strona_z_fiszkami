const getUsers = "SELECT * FROM users";
const getUser = "SELECT * FROM users WHERE id = $1";
const emailExists = "SELECT s FROM users s WHERE s.email = $1";
const addUser = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
const removeUser = "DELETE FROM users WHERE id = $1";
const getCard = "SELECT * FROM cards WHERE id = $1";

module.exports = {
    getUsers,
    getUser,
    emailExists,
    addUser,
    removeUser,
    getCard,
};