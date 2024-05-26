// models/User.ts
import mongoose, { Document, Model, Schema } from 'mongoose';

// Interface for the User document which ensures type safety for user document
interface IUser extends Document {
    username: string;
    email: string;
    password: string;
}

// User schema definition
const UserSchema: Schema<IUser> = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
});

// User model
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;