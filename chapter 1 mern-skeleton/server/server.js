import "dotenv/config";
import app from "./express.js";
// app.listen(process.env.port, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.info("Server started on port %s.", process.env.port);
// });
import mongoose from "mongoose";
mongoose
  .connect(process.env.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.port, (err) => {
      console.info("Server started on port %s.", process.env.port);
    });
  })
  .catch((err) => {
    console.log("Error Connecting to MongoDB");
  });
