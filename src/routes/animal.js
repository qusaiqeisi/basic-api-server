'use strict';

const express = require('express');

const router = express.Router();
const {animal} = require('../models/index');
// adding all the  routes




let getanimal=async(req, res) =>{
    let animal = await animal.findAll();
    res.status(200).json(animal);
}

 let getaSingleanimal=async(req, res) =>{
    let id = parseInt(req.params.id);  
    let animal = await animal.findOne({ where: {id: id} });
    res.status(200).json(animal);
}

 let createNewanimal=async(req, res) =>{
    // creat new animal adding in array 
    let newanimal = req.body;
    let animal = await animal.create(newanimal);
    res.status(200).json(animal);
}



 let updateanimal=async(req, res) =>{
    let id = parseInt(req.params.id);
    let obj = req.body;
    // find the animal that want to make update in it .
    let found = await animal.findOne({ where: {id: id} });
    // update the animal + save
    let updatedanimal = await found.update(obj);
    res.status(200).json(updatedanimal);
}

let deleteanimal=async(req, res) =>{
    let id = parseInt(req.params.id);
    let deletedanimal = await animal.destroy({where: {id: id}});
    res.status(204).json(deletedanimal);
}


router.get('/animal', getanimal);
// get all animal inside my data base
router.get('/animal/:id', getaSingleanimal);
// get single animal inside my data base

router.post('/animal', createNewanimal);
// creat a new animal 
router.put('/animal/:id', updateanimal);
// update the info for the animal
router.delete('/animal/:id', deleteanimal);


module.exports = router;