import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import offerRoutes from './routes/offerRoutes';
import { errorHandlingMiddleware } from './middleware/errorHandler';
import { secureData } from './middleware/secureData';

const app = express();
const port = 3001;

// Middleware for security
app.use(helmet());

// CORS middleware
app.use(cors());
// Middleware for secure data practices
app.use(secureData);

// Parse JSON bodies
app.use(express.json());

// Routes
app.use('/', offerRoutes);

// Error handling middleware
app.use(errorHandlingMiddleware);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
