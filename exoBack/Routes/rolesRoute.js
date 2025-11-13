import * as rolesController from '../Controllers/rolesController.js';
import express from "express";

const router = express.Router();

router.get('/allRoles', rolesController.getRoles);
router.get('/rolesById/:id', rolesController.getRolesById);
router.post('/addRole', rolesController.addRole);
router.put ('/updateRole/:id', rolesController.updateRole);
router.delete ('/deleteRole/:id', rolesController.deleteRole);
router.get('/infosRole/:id', rolesController.getInfosRole);

export default router;