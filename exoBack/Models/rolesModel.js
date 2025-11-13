import db from "../config/bdd.js";

export const getAllRoles = async () => {
    const selectAllRoles = 'SELECT * FROM roles;'
    const [response] = await db.query(selectAllRoles);
    return response;
};

export const getRolesById = async (id) => {
    const selectRoleById = 'SELECT libelleRole FROM roles WHERE roleId = ?;'
    const [response] = await db.query(selectRoleById, [id]);
    return response;
};

export const addRole = async (libelleRole) => {
    const insertRole = `
    INSERT INTO roles (libelleRole)
    VALUES (?);`
    const [response] = await db.query(insertRole, [libelleRole]);
    return response;
}

export const updateRole = async (libelleRole, roleId) => {
    const updateRole = `
    UPDATE roles
    SET libelleRole = ?
    WHERE roleId = ?;`
    try {
        const response = await db.query(updateRole, [libelleRole, roleId]);
        return response;
    } catch (error) {
        console.error('erreur model', error);
    }
}

export const deleteRole = async (roleId) => {
    const deleteRole = `
    DELETE FROM roles
    WHERE roleId = ?;`
    const [result] = await db.query(deleteRole, [roleId]);
    return result;
}

export const getInfosRoleById = async (id) => {
    const selectInfosRoleById = `
    SELECT libelleRole, nom, prenom, email FROM roles
    INNER JOIN users on roles.roleId = users.idRole
    WHERE roleId = ?;`
    const [response] = await db.query(selectInfosRoleById, [id]);
    return response;
}