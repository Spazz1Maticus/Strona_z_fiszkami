import pool from "../db";
import queries from "./queries";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const getUsers = (req, res) => {
  pool.query(queries.getUsers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
    return;
  });
};

const getUser = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUser, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
    return;
  });
};

const removeUser = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUser, [id], (error, results) => {
    if (!results.rows.length) {
      res.send("User does not exist");
      return;
    }
    pool.query(queries.removeUser, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("User removed");
      return;
    });
  });
};

const getCards = (req, res) => {
  pool.query(queries.getCards, (error, results) => {
    if (error) return error;
    res.status(200).json(results.rows);
    return;
  });
};

const getCard = (req, res) => {
  pool.query(queries.getCards, (error, results) => {
    if (error) return error;
    const id = Math.floor(Math.random() * results.rows.length);
    pool.query(queries.getCard, [id], (error, results) => {
      res.status(200).json(results.rows);
      return;
    });
  });
};

const addCard = (req, res) => {
  const { word, meaning } = req.body;
  pool.query(queries.cardExists, [word], (error, results) => {
    if (results.rows.length) {
      res.send("Card exists.");
      return;
    }
    pool.query(queries.addCard, [word, meaning], (error, results) => {
      if (error) throw error;
      res.status(201).send("Card Created!");
      console.log("Card created");
    });
  });
};
//Rejestracja
const addUser = (req, res) => {
  const { username, email, password } = req.body;
  bcrypt.hash(password, 12, (err, hash) => {
    if (err) return err;
    pool.query(queries.emailExists, [email], (error, results) => {
      if (results.rows.length) {
        res.send("Email exists.");
        return;
      }
      pool.query(queries.usernameExists, [username], (error, results) => {
        if (results.rows.length) {
          res.send("Username is taken.");
          return;
        }
        pool.query(queries.addUser, [username, email, hash], (error, results) => {
          if (error) throw error;
          res.status(201).send("User Created!");
          console.log("User created");
          return;
        });
      });
    });
  });
};
//logowanie
const signIn = (req, res) => {
  const { username, password } = req.body;
  pool.query(queries.getByUsername, [username], (error, results) => {
    if (error) return error;
    if (results.rows.length) {
      const passwordHash = results.rows[0].password;
      const user = results.rows[0].username;
      bcrypt.compare(password, passwordHash, (err, results) => {
        if (err) return err;
        if (results) {
          const payload = user;
          const token = jwt.sign({ payload }, process.env.SECRET, { expiresIn: 86400 });

          res.cookie("JWT", token, {
            maxAge: 86400,
            httpOnly: true,
          });

          res.status(200).json({ token });
          console.log("Zalogowano " + payload);
          return;
        }
        res.status(401).send("Wrong password!");
        console.log("Wrong password");
        return;
      });
    }
    return;
  });
};

const signOut = (req, res) => {
  res.status(202).clearCookie("JWT").send("cookie cleared");
  return;
};

module.exports = {
  getUsers,
  getUser,
  addUser,
  removeUser,
  getCards,
  getCard,
  addCard,
  signIn,
  signOut,
};
