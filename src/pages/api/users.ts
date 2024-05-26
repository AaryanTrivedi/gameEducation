// pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { dbConnection } from '../../lib/mongodb';
import User from '../../model/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnection();

    const { method } = req;

    switch (method) {
        case 'POST':
            try {
                const { username, email, password } = req.body;

                if (!username || !email || !password) { // Corrected this line
                    return res.status(400).json({ success: false, message: 'All fields are required' });
                }

                // Check if the user already exists
                const existingUser = await User.findOne({ email });
                if (existingUser) {
                    return res.status(400).json({ success: false, message: 'User already exists' });
                }

                // Hash the password
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);

                // Create a new user
                const newUser = new User({ username, email, password: hashedPassword });
                await newUser.save();

                res.status(201).json({ success: true, data: newUser });
            } catch (error) {
                res.status(400).json({ success: false, message: (error as Error).message });
            }
            break;
        default:
            res.status(405).json({ success: false, message: 'Method Not Allowed' });
            break;
    }
}