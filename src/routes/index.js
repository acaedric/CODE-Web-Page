const express = require('express');
const router = express.Router();
const pool = require('../database');
const stripe = require('stripe')('sk_test_5cvmdt92972In1hFzOkp728V00VfVWtoSd');

router.get('/',(req,res)=>{
    res.render('links/index');

});

//post user
router.post('/', async (req, res) => {
    const { nombre, email, tema, description } = req.body;
    const newLink = {
        nombre,
        email,
        tema,
        description,
    };
    console.log(newLink);
    var sql = `INSERT INTO consultas 
            (
                nombre, email, tema, descripcion
            )
            VALUES
            (
                ?, ?, ?, ?
            )`;
    await pool.query(sql, [nombre,email,tema,description]);
    req.flash('success', 'Enviado');
    res.redirect('/');

});
//INSERT INTO consultas VALUES ($1, $2, $3, $4)', [newLink]

router.post('/checkout', async (req,res) => {
    const customer = await stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    });
    const charge = await stripe.charges.create({
        amount:'2000',
        currency:'usd',
        customer: customer.id,
        description: 'Ticket pass congress'

    });
    var sql2 = `INSERT INTO pagos 
            (
                email, stripeTokenID
            )
            VALUES
            (
                ?, ?
            )`;
    await pool.query(sql2, [customer.email,charge.id]);
    console.log(charge.id);
    //Final show a sucess view
    //req.flash('success', 'Compra satisfactoria, disfruta del congreso :D');
    res.redirect('/');
});

module.exports = router;