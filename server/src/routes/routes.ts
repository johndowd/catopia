import { Router } from 'express';

const userData = {
  users: [
    {
      id: 1,
      email: 'jd831',
    }
  ]
}

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'API endpoint working' });
});

routes.get('/users', async (req, res) => {
  const users = JSON.stringify(userData.users)
  return res.json({ users  })
})

export default routes;