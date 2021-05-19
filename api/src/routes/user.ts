import { Router, Request, Response } from 'express';

const home = Router();

home.get('/user', (request: Request, response: Response) => {
  response.send({
    name : 'Louise Zenasni',
    jobTitle : 'Software Engineer',
    dob : '26th January 1982',
    email : 'louisezenasni@hotmail.com',
    aboutText : 'Software professional with experience in development of large complex platforms and providing delivery management of front-end projects while leading global teams in London, New York and India.'
  })
});

export default home;
