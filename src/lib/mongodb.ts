import mongoose from "mongoose";
const MONGODB_URI = 'mongodb://localhost:27017/'

// Database connection setup
export const dbConnection = async (): Promise<void> => {
    if (!MONGODB_URI) {
        console.error("MONGODB_URI environment variable is not defined");
        return;
    }

    if (mongoose.connection.readyState >= 1) {
        return;
    }

    try {
        await mongoose.connect(MONGODB_URI, {
            dbName: "GameEducation"
        });
        console.log("Connected to the database");
    } catch (err) {
        console.error("Database connection error:", (err as Error).message);
    }
};
