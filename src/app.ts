import express from 'express';
import taskRoutes from './router/taskRoutes';
import sequelize from './config/database';

const app = express();

app.use(express.json());
app.use('/api', taskRoutes);

sequelize.sync().then(() => {
    console.log('Database connected');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
