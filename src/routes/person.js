// 'use strict';

// const express = require('express');

// const router = express.Router();
// const {person} = require('../models/index');
// // adding all the  routes



// let getperson =async(req, res)=> {
//     let person = await person.findAll();
//     res.status(200).json(person);
// }

//  let getaSinglePerson= async(req, res)=> {
//     let id = parseInt(req.params.id);  
//     let person = await person.findOne({ where: {id: id} });
//     res.status(200).json(person);
// }

//  let createNewPerson= async(req, res)=> {
//     let newPerson = req.body;
//     let person = await person.create(newPerson);
//     res.status(200).json(person);
// }

//  let updatePerson= async(req, res)=> {
//     let id = parseInt(req.params.id);
//     let obj = req.body;
//     // find the person
//     let found = await person.findOne({ where: {id: id} });
//     // update the person + save
//     let updatedPerson = await found.update(obj);
//     res.status(200).json(updatedPerson);
// }

//  let deletePerson= async(req, res)=> {
//     let id = parseInt(req.params.id);
//     let deletedPerson = await person.destroy({where: {id: id}});
//     res.status(204).json(deletedPerson);
// }


// router.get('/person', getperson);
// // get all person inside my data base
// router.get('/person/:id', getaSinglePerson);
// // get single person inside my data base

// router.post('/person', createNewPerson);
// // creat a new person 
// router.put('/person/:id', updatePerson);
// // update the info for the person
// router.delete('/person/:id', deletePerson);

// module.exports = router;

'use strict';

const express = require('express');

const router = express.Router();
const {People} = require('../models/index');
// console.log(People)
// add routes
router.get('/people', getPeople);
router.get('/people/:id', getOnePerson);

router.post('/people', createPerson);
router.put('/people/:id', updatePerson);
router.delete('/people/:id', deletePerson);


async function getPeople(req, res) {
    // get me all data from people
    let people = await People.findAll();
    res.status(200).json(people);
}

async function getOnePerson(req, res) {
    const id = parseInt(req.params.id); // req.params is an object 
    let person = await People.findOne({ where: {id: id} });
    res.status(200).json(person);
}

async function createPerson(req, res) {
    let newPerson = req.body;
    let person = await People.create(newPerson);
    res.status(200).json(person);
}

async function updatePerson(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    // find the person
    let found = await People.findOne({ where: {id: id} });
    // update the person + save
    let updatedPerson = await found.update(obj);
    res.status(200).json(updatedPerson);
}

async function deletePerson(req,res) {
    let id = parseInt(req.params.id);
    let deletedPerson = await People.destroy({where: {id: id}});
    res.status(204).json(deletedPerson);
}



module.exports = router;