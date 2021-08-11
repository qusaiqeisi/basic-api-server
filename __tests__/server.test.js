'use strict';

const server = require('../src/server');
// I do not have to run it

const supertest = require('supertest');
const request = supertest(server.app);

//add the name of the module that I am testing 
describe('my API Server', ()=> {

 
    it('handles my internal server 200 working ', async () => {
        let query='qusai';
        const response = await request.get(`/person?name=${query}`); // async
        expect(response.status).toBe(200);
    });


    it('given an name in the query string, the output object is correct', async () => {
        let query = 'qusai';
        const response = await request.get(`/person?name=${query}`);
        //   console.log('response', response);
        console.log('response.body', response.body);
    
        expect(response.body.name).toBe(query);
      });

    // it('/ route works', async () => {
    //     const response = await request.get('/'); // async
    //     expect(response.status).toEqual(200);
    //     console.log(response.text);
    //     expect(response.text).toEqual('hello from the ather side');
    // });


});