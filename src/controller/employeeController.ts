import express, { json, request } from "express"
import { EmployeeModel } from "../db/employee"

class EmployeeController {


    getAllEmployee = async (request: express.Request, response: express.Response) => {
       
        try {
            const employees = await EmployeeModel.find();
            return response.status(200).json({ data:employees })

        } catch (error) {
            return response.status(400)
        }
    }


    getEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params;
            const employee = await EmployeeModel.findById(id)
            return response.status(200).json({ data: employee })
        } catch (error) {
            return response.status(400)
        }
    }

    createEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const { name, email, mobile, dob, doj } = request.body;
            const employee = new EmployeeModel({
                name,
                email,
                mobile,
                dob,
                doj
            });
            await employee.save();
            return response.status(201).json({ message: "employee created", data: employee })
        } catch (error) {
            return response.status(400)
        }
    }

    updateEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params
            const { name, email, mobile, dob, doj } = request.body;

            const employee = await EmployeeModel.findById(id)
            if (employee) {
                employee.name = name;
                employee.email = email;
                employee.mobile = mobile;
                employee.dob = dob;
                employee.doj = doj;
                await employee.save();
                return response.status(200).json({ message: "employee created", data: employee })
            }
            return response.sendStatus(400)

        } catch (error) {
            return response.status(400)
        }
    }

    deleteEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params;
            await EmployeeModel.findByIdAndDelete({ _id: id })
            return response.status(200).json({ message: "employee deleted" })
        } catch (error) {
            return response.status(400)
        }
    }
}

export default new EmployeeController