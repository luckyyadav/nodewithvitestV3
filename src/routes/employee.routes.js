import { Router } from "express";
import {
  createEmployee,
  getAllEmployees,
  getSingleEmployees,
  updateEmployees,
  deleteEmployees,
} from "../controller/employee.controller.js";

const routes = Router();

routes.post("/employee/create", createEmployee);
routes.get("/employee/allemployees", getAllEmployees);
routes.get("/employee/single/:id", getSingleEmployees);
routes.put("/employee/update/:id", updateEmployees);
routes.delete("/employee/delete/:id", deleteEmployees);

export default routes;
