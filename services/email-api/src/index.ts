import express from 'express';

const emailApiRouter = express.Router()

emailApiRouter.post('/', async (req, res) => {
    try {
      const result = await handler(req.body);
      res.json({ success: true, result });
    } catch (error) {
      res.status(500).json({ success: false, error: error });
    }
  })

emailApiRouter.get('/', async (req, res) => {
    res.status(200).json({ success: true, message: 'email-api is up' });
  }
)

async function handler(data: any) {
    return `email-api processed: ${JSON.stringify(data)}`;
  };

export default emailApiRouter;
  