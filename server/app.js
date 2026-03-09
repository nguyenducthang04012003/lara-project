import express from "express";
import cors from "cors";
import homePageRoutes from "./routes/homePageRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", homePageRoutes);

app.listen(3000, () => {
  console.log("Server running");
});
