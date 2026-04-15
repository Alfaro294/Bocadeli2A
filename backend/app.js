import express from "express"
import productsRoutes from "./src/routes/products.js";
import employeesRoutes from "./src/routes/employees.js";
import customersRoutes from "./src/routes/customerRoutes.js"
import registerCustomerRoutes from "./src/routes/registerCustomers.js"
import registerEmployeesRoutes from "./src/routes/registerEmployees.js";
import categoriesRoutes from "./src/routes/categoriesRoutes.js";

import cookieParser from "cookie-parser";
const app = express();

app.use (cookieParser());
// Que pueda aceptar JSON desde postman
app.use(express.json());

app.use("/api/products",productsRoutes);
app.use ("/api/employees", employeesRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/registerCustomers", registerCustomerRoutes);
app.use("/api/registerEmployees", registerEmployeesRoutes);
app.use ("/api/categories", categoriesRoutes)
export default app;
