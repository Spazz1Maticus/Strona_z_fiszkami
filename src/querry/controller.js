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

module.exports = {
    getUsers,
    getUser,
    addUser,
    removeUser,
}