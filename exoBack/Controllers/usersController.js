import * as usersModel from "../Models/usersModel.js"

export const getUsers = async (req, res) => {
    try {
        const users = await usersModel.getAllUsers();
        res.status(200).json(users)

    } catch (error) {
        console.error("une erreur est survenur lors de l'affichage des users", error);
    }
}

export const getInfosUsers = async (req, res) => {
    try {
        const infosUser = await usersModel.getInfosUsers();
        res.status(200).json(infosUser);
    } catch (error) {
        console.error("une erreur est survenue lors de l'affichage des infos users", error);
    }
}

export const getUsersById = async (req, res) => {
    try {
        const infosUsersById = await usersModel.getUsersById(id);
        res.status(200).json(infosUsersById)
    } catch (error) {
        console.error("erreur lors de l'affichage de l'userByID", error);
    }
}

export const addUser = async (req, res) => {
    const { nom, prenom, email, password } = req.body;

    try {
        const users = await usersModel.addUser(nom, prenom, email, password);
        res.status(201).json({ message: 'user créé', users });
    } catch (error) {
        res.status(500)
        console.error("erreur lors de l'ajout d'un user", error);
    }
}

export const updateUser = async (req, res) => {
    const { nom, prenom, email, password } = req.body;
    const userId = req.params.id;

    try {
        const existing = await usersModel.getInfosUserById(userId);
        if (existing.length === 0) {
            res.status(404).json({ message: "utilisateur inconnu" });

        } else {
            const updateUser = await usersModel.updateUser(nom, prenom, email, password, userId);
            res.status(200).json({ message: "utilisateur modifié", updateUser });
        }

    } catch (error) {
        res.status(500)
        console.error("erreur lors de la modification de l'user", error);

    }
}

export const deleteUser = async (req, res) => {
    const usersId = req.params.id;
    try {
        const existing = await usersModel.getInfosUserById(usersId);

        if (existing === 0) {
            res.status(404).json({ message: "utilisateur inconnu" })
        } else {
            const deleteUser = await usersModel.deleteUser(usersId);
            res.status(200).json({ message: "utilisateur supprimé" })
        }
    } catch (error) {
        console.error("erreur lors de la suppression de l'user", error);

    }
}

// identification du user quand celui-ci se connecte
export const getUserByEmail = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usersModel.getUserByEmail(email)

        if (!user) {
           return res.status(404).json({ message: "utilisateur non trouvé"})
        }
        if (password !== user.password) {
         return res.status(401).json({message : "mot de passe incorrect"})
        }

        res.status(200).json({message : "connexion reussi"})
        
    } catch (error) {
        res.status(500)
        console.error("erreur de connexion", error);

    }
}