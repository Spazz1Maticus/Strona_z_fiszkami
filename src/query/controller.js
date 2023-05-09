import pool from '../db';
import queries from './queries';

const getUsers = (req, res) =>{
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const getUser = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUser, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addUser = (req, res) => {
    const { username, email, password } = req.body;
    pool.query(queries.emailExists, [email], (error, results) => {
        if(results.rows.length){
            res.send("Email exists.");
        }
        pool.query(queries.addUser, [username, email, password], (error, results) => {
            if(error) throw error;
            res.status(201).send('User Created!');
            console.log('User created');
        })
    })
}

const removeUser = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUser, [id], (error, results) => {
        if(!results.rows.length){
            res.send('User does not exist');
        }
        pool.query(queries.removeUser, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send('User removed');
        })
    })
}

const getCards = (req, res) => {
    pool.query(queries.getCards, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const getCard = (req, res) => {
    const id = Math.floor(Math.random() * 100);
    pool.query(queries.getCard, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addCard = (req, res) => {
    const { word, meaning } = req.body;
    pool.query(queries.cardExists, [word], (error, results) => {
        if(results.rows.length){
            res.send("Card exists.");
        }
        pool.query(queries.addCard, [word, meaning], (error, results) => {
            if(error) throw error;
            res.status(201).send('Card Created!');
            console.log('Card created');
        })
    })
}


module.exports = {
    getUsers,
    getUser,
    addUser,
    removeUser,
    getCards,
    getCard,
    addCard,
}