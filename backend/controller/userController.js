import user from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        const response = await user.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const getUserById = async (req, res) => {
    try {
        const response = await user.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const createUser = async (req, res) => {
    try {
        await user.create(req.body);
        res.status(201).json({message: 'User created!'});
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: 'Internal server error' });
    }
}
