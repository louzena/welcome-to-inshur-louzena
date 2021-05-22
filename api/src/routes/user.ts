import { Router, Request, Response } from 'express';

const home = Router();

home.get('/user', (request: Request, response: Response) => {
  response.send({
    name : 'Louise Zenasni',
    jobTitle : 'Software Engineer',
    dob : '26th January 1982', // TODO: Make date object
    email : 'louisezenasni@hotmail.com',
    aboutHTML : '<p  class="lead">Software professional with experience in development of large complex platforms and providing delivery management of front-end projects while leading global teams in London, New York and India.</p> <p> Passionately involved in Diversity and Recruitment </p> ',
    interests: 'Apart from everything technology, I also love to invent. I love Italian food and am an advocate for fresh healthy juicing'
  })
});




export default home;
