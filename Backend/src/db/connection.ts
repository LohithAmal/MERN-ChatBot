import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
  try {
    const mongoDBUrl = process.env.MONGODB_URL || "default-mongodb-url";
    await connect(mongoDBUrl);
  } catch (error) {
    console.log(error);
    throw new Error("Unsuccesfull Connection to MongoDB");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Unsuccesfull Connection to MongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase };
