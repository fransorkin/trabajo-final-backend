import mongoose from "mongoose";

const user = "sorkinfrancisco";
const password = "&Rae24355ssde8";
const mongoDb = "products";

export function connectDb() {
  mongoose
    .connect(
      `mongodb+srv://${user}:${password}@db-test.pg3rvlv.mongodb.net/${mongoDb}`
    )
    .then(() => {
      try {
        console.log(`MongoDb connected to ${mongoDb}`);
      } catch (error) {
        console.log(error);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}