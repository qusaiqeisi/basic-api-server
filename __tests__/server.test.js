'use strict';
const server = require('../src/server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(server.app);

//add the name of the module that I am testing 
describe('my API Server', ()=> {

    
    it('200 get', async () => {
        const response = await request.get('/food'); // async
        expect(response.status).toEqual(200);
        
    
    });
    
    

    it('Create a record using POST', async () => {
        const reqBody={"firstName":"qusai",
        "theMeal":"qeisi",
        "drink":"qeisi"
        }
        const response = await request.post('/food').send(reqBody); // async
        expect(response.status).toEqual(200);
      
        
    
    });
    
    it('200 if put', async () => {
        const response = await request.put('/food/2'); // async
        expect(response.status).toEqual(200);
        
    
    });
    it('200 if delete', async () => {
        const response = await request.delete('/food/3'); // async
        expect(response.status).toEqual(204);
        
    
    })


});