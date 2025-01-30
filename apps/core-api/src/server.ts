import express, { Application } from 'express';
// import emailrouter from '@blueportal/email-api';
import { loadServices } from './serviceLoader';

export default class CoreAPI {
  private app: Application;

  constructor() {
    this.app = express();
    this.registerServices()
    this.setupMiddleware();
    this.app.get('/', (req, res) => {
      res.send({ message: 'Hello API' });
    });
  }

  private setupMiddleware() {
    this.app.use(express.json());
  }

  private registerServices() {
    loadServices(this.app)
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Core API is running on http://localhost:${port}`);
    });
  }
}

// const host = process.env.HOST ?? 'localhost';
// const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// const app = express();

// app.use('/email', emailrouter);

// app.get('/', (req, res) => {
//   res.send({ message: 'Hello API' });
// });

// app.listen(port, host, () => {
//   console.log(`[ ready ] http://${host}:${port}`);
// });
