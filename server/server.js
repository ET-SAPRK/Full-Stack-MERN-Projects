import "dotenv/config";
import app from "./express.js";
app.listen(process.env.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", process.env.port);
});
