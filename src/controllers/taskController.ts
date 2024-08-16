import { Request, Response } from "express";
import Task from "../models/task";


export const createTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.create(req.body); // Create a new task
        return res.status(201).json(task); // Return the new task
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
};

export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.findAll(); // Find all tasks
        return res.status(200).json(tasks); // Return all tasks
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
};

export const updateTask = async (req: Request, res: Response) => {
    const { id } = req.params; // Get the task ID
    const { title, description, dueDate, status } = req.body; // Get the new task data
    const task = await Task.findByPk(id); // Find the task by ID
    if (task) {
        task.title = title;
        task.description = description;
        task.dueDate = dueDate;
        task.completed = status;
        await task.save(); // Save the updated task
        res.status(200).json(task);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await Task.findByPk(id); // Find the task by ID
    if (task) {
        await task.destroy();
        res.status(200).json({ message: 'Task deleted' });
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
};
