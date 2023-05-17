const getUsers = "SELECT * FROM users";
const getUser = "SELECT * FROM users WHERE id = $1";
const emailExists = "SELECT s FROM users s WHERE s.email = $1";
const usernameExists = "SELECT s FROM users s WHERE s.username = $1";
const addUser = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
const getByUsername = "SELECT * FROM users WHERE username = $1";
const removeUser = "DELETE FROM users WHERE id = $1";
const getCards = "SELECT * FROM cards";
const getCard = "SELECT * FROM cards WHERE id = $1";
const cardExists = "SELECT s FROM cards s WHERE s.word = $1";
const addCard = "INSERT INTO cards (word, meaning) VALUES ($1, $2)";

module.exports = {
  getUsers,
  getUser,
  getByUsername,
  emailExists,
  usernameExists,
  addUser,
  removeUser,
  getCards,
  getCard,
  cardExists,
  addCard,
};
