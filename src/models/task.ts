import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Task extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public dueDate!: Date;
    public completed!: boolean;
}

Task.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: "task",
    tableName: "tasks",
});

export default Task;
