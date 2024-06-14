import express from "express";
import cors from "cors";
import morgan from "morgan";

// local imports
import employeeRoutes from "./routes/employee.routes.js";
import errorMiddleware from "./middleware/error.middleware.js";
// app initialization
const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/", employeeRoutes);
app.use(errorMiddleware);

//listen
app.listen(8000, () => {
  console.log("server is running on port 8000");
});
