import express from "express"
import employeeController from "../controller/employeeController"
const router = express.Router()

router.get("/employee", employeeController.getAllEmployee)
router.get("/employee/:id", employeeController.getEmployee)
router.post("/employee", employeeController.createEmployee)
router.put("/employee/:id", employeeController.updateEmployee)
router.delete("/employee/:id", employeeController.deleteEmployee)

export default router;