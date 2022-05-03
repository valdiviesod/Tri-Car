const express = require('express');
const connection = require('./database/db');
const router = express.Router();

router.get('/admin', (req,res) => {
    connection.query('SELECT * FROM users', (error,results) => {
        if(error){
            throw error;
        }else{
            res.render('admin', {results:results})
        }
    })
})

router.get('/create', (req,res) => {
    res.render('create');
})

router.get('/admin', (req,res) => {
    res.render('admin');
})

router.get('/edit/:id', (req,res)=>{    
    const id = req.params.id;
    connection.query('SELECT * FROM users WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('edit', {user:results[0]});            
        }        
    });
});

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM users WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/admin');         
        }
    })
});

module.exports = router;

const crud = require('./controllers/crud');
router.post('/save', crud.save)
router.post('/update',crud.update)