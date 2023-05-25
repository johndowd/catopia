import express, { Request, Response } from 'express';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(express.json());
  }

  private routes(): void {
    this.server.get('/', (req: Request, res: Response) => {
      res.send('Hello, World!');
    });
  }

  public start(port: number): void {
    this.server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

export default App