const Task = require('../models/task')

const taskController = {
    showAll: function(req, res) {
        Task.find()
            .then(response => {
                console.log(response);
                res.status(200).send(response);
            })
            .catch(err => {
                console.log(err);
                res.status(400).send("Something is wrong");
            });
    },
    showByID: function(req, res) {
        Task.findById(req.params.id)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(err => {
                res.status(400).send(err);
            });
    },
    insertTask: function(req, res){
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            creationDate: req.body.creationDate
        });
        newTask.save()
            .then(response => {
                console.log(response);
                res.status(200).send(response);
            })
            .catch(err => {
                console.log(err);
                res.status(400).send("Could not insert the task");
            });
    },
    replaceTask: function(req, res){
        const newTask = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            creationDate: req.body.creationDate
        };
        Task.findByIdAndUpdate(req.params.id, newTask)
            .then(response =>{
                console.log(response);
                res.status(200).send(response);
            })
            .catch(err =>{
                console.log(err);
                res.status(400).send("Could not replace the task");
            });
    },
    deleteTask: function(req, res){
        Task.findByIdAndDelete(req.params.id)
            .then(response =>{
                console.log(response);
                res.status(200).send(response);
            })
            .catch(err =>{
                console.log(err);
                res.status(400).send("Could not delete the task");
            });
    }
};

module.exports = taskController;