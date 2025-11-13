import * as rolesModel from '../Models/rolesModel.js'

export const getRoles = async (req, res) => {
    try {
        const roles = await rolesModel.getAllRoles();
        res.status(200).json(roles);
    } catch (error) {
        console.error("une erreur est survenur lors de l'affichage des roles", error);
    }
}

export const getRolesById = async (req, res) => {
    const id = req.params.id;
    try {
        const rolesById = await rolesModel.getRolesById(id);
        res.status(200).json(rolesById)
    } catch (error) {
        console.error("erreur lors de l'affichage du roleById", error);
    }
}

export const addRole = async (req, res) => {
    const { libelleRole } = req.body;
    try {
        const role = await rolesModel.addRole(libelleRole);
        res.status(201).json({ message: 'role créé' });
    } catch (error) {
        res.status(500)
        console.error("erreur lors l'ajout d'un role", error);
    }
}

export const updateRole = async (req, res) => {
    const { libelleRole } = req.body;
    console.log(libelleRole);

    const roleId = req.params.id;
    try {
        const existing = await rolesModel.getRolesById(roleId);
        if (existing.length === 0) {
            res.status(400).json({ message: "role inconnu" });
        } else {
            const updateRole = await rolesModel.updateRole(libelleRole, roleId);
            res.status(200).json({ message: "role modifié", updateRole });
        }
    } catch (error) {
        res.status(500);
        console.error("erreur lors de la modification du role");

    }
}

export const deleteRole = async (req, res) => {
    const roleId = req.params.id;
    try {
        const existing = await rolesModel.getRolesById(roleId);
        if (existing.length === 0) {
            res.status(404).json({ message: "role inconnu" });
        } else {
            const deleteRole = await rolesModel.deleteRole(roleId);
            res.status(200).json({ message: "role suprrimé" });
        }
    } catch (error) {
        console.error('erreur lors de la suppression du role', error);
    }
}

export const getInfosRole = async (req, res) => {
    const id = req.params.id
    try {
        const infosRoleById = await rolesModel.getInfosRoleById(id);
        res.status(200).json(infosRoleById);
    } catch (error) {
        console.error("erreur lors de l'affichage des infos roles", error);
        
    }
}