import { response } from "express";
import db from "../config/bdd.js";

export const getAllUsers = async () => {
    const selectAllUsers = 'SELECT * FROM users';
    const [response] = await db.query(selectAllUsers);
    return response;
};

export const getInfosUsers = async () => {
    const selectInfosUsers = 'SELECT nom, prenom, email, libelleRole FROM users INNER JOIN roles on users.idRole = roles.roleId;';
    const [response] = await db.query(selectInfosUsers);
    return response;
}

export const getInfosUserById = async (id) => {
    const selectUserById = 'SELECT nom, prenom, email FROM users WHERE usersId = ?;';
    const [response] = await db.query(selectUserById, [id]);
    return response;
}

export const addUser = async (nom, prenom, email, password) => {
    const insertUsers = `
    INSERT INTO users (nom, prenom, email, password, created_at)
    VALUES (?, ?, ?, ?, now()); `
    const [result] = await db.query(insertUsers, [nom, prenom, email, password]);
    return result;
}

export const updateUser = async (nom, prenom, email, password, usersId) => {
    const updateUser = `
    UPDATE users
    SET nom = ?, prenom = ?, email = ?, password = ?
    WHERE usersId = ?;`
    const [result] = await db.query(updateUser, [nom, prenom, email, password, usersId]);
    return result;
}

export const deleteUser = async (usersId) => {
    const deleteUser = `
    DELETE FROM users
    WHERE usersId = ?;`
    const [result] = await db.query(deleteUser, [usersId]);
    return result;
}


// identification du user quand celui-ci se connecte
export const getUserByEmail = async (email) => {
    const getUserByEmail = "SELECT * FROM users WHERE email = ?;";
    const[result] = await db.query(getUserByEmail, [email]);
    return result[0];
}