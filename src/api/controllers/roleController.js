const Role = require('../models/roleModel')


exports.getAllRole = async (req, res) => {
    try {
        const roles = await Role.find({});
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.getRoleById = async (req, res) => {
    try {
        const { id } = req.params;
        const role = await Role.findById(id);
        res.status(200).json(role);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.createRole = async (req, res) => {
    try {
        const role = await Role.create(req.body);
        res.status(201).json(role);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.updateRoleById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRoleById = await Role.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedRoleById);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.deleteRoleById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRoleById = await Role.findByIdAndDelete(id);
        if (!deletedRoleById) {
            return res.status(404).json({ message: `Role with ID ${id} does not exist` });
        }
        res.status(200).json({ message: 'Role deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
