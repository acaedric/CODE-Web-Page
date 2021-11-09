const express = require('express');
const router = express.Router();
const pool = require('../database');
const path = require('path');
const stripe = require('stripe')('sk_test_5cvmdt92972In1hFzOkp728V00VfVWtoSd');
/*const Hogan = require('hogan.js');
const fs = require('fs');
const template = fs.readFileSync('./views/links/ticketonline2.html','utf-8');
const compiledTemplate = Hogan.compile(template);*/

var nodemailer = require('nodemailer');
// add this line before nodemailer.createTransport()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// create reusable transport method (opens pool of SMTP connections)
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port:587,
    secure: false,
    auth: {
        user: 'code.congreso@gmail.com',
        pass: 'somosunicode2019'
    }
});

router.get('/',(req,res)=>{
    res.render('links/index');

});/*
router.get('/hackaton',(req,res)=>{
    res.render('links/hackaton');
});
*/
//RECIBE LA REFERENCIA DESDE HREF="/CONSULTAR", LUEGO LLAMA AL ARCHIVO CONSULTAR.HBS 
router.get('/consultar',(req,res)=>{
    res.render('links/consultar');
});
router.get('/ciudadE',(req,res)=>{
    res.render('links/ciudad');
})
/*
router.get('/baseshackaton',(req,res)=>{
    res.render('links/baseshackathon');
});

router.get('/downloadbases', function (req, res, next) {
    const index3 = path.join(__dirname, '/', 'HACKATHON UNI-CODE 2019.pdf');
    var filePath = index3; // Or format the path using the `id` rest param
    var fileName = "BASESHACKATHONUNI.pdf"; // The default name the browser will use

    res.download(filePath, fileName);
});
router.get('/downloadcronograma', function (req, res, next) {
    var filePath = "public/img/cronogramacode.png"; // Or format the path using the `id` rest param
    var fileName = "cronogramacode.png"; // The default name the browser will use

    res.download(filePath, fileName);
});
*/
/*
router.get('/preinscribirasistentesdelcode2019',(req,res)=>{
    res.render('links/preinscribir');
});
*/
//ESTE METODO LLAMA AL ARCHIVO CONSULTAS.HBS PARA MOSTRAR EL CONTENIDO ALMACENADO
router.get('/consultascode', async (req,res)=>{
    const consultas = await pool.query(`SELECT * FROM heroku_1d087d7dc881871.consultas`);
    res.render('links/consultas',{consultas});
});
/*
router.get('/registrarpagoscodewebpage2019',(req,res)=>{
    res.render('links/registrarpagos');

});
router.get('/listadepagoscodewebpage2019', async(req,res)=>{
    const pagos = await pool.query(`SELECT * FROM heroku_1d087d7dc881871.pagos`);
    res.render('links/listadepagos',{pagos});
});

router.get('/listaderegistradoscodewebpage2019', async (req,res)=>{
    const registrados = await pool.query(`SELECT * FROM heroku_1d087d7dc881871.compradores WHERE ticket="no"`);
    res.render('links/listaderegistradoscode',{registrados});
});*/
/*
router.get('/listadeasistentescodewebpage2019', async (req,res)=>{
    const asistentes = await pool.query(`SELECT * FROM heroku_1d087d7dc881871.compradores INNER JOIN heroku_1d087d7dc881871.tickets ON compradores.id =tickets.idcomprador`);
    res.render('links/listadeasistentescode',{asistentes});
});*/
/*
router.get('/deleteconsultas/:id', async(req,res)=>{
    const {id} = req.params;
    var actualizarconsulta = `UPDATE heroku_1d087d7dc881871.consultas SET
        respondido = "si" WHERE ID = ? AND respondido = ""`;
    await pool.query(actualizarconsulta,[id]);
    res.redirect('/verconsultasdelcode2019');
});

router.get('/enviaremailcodewebpage',(req,res)=>{
    res.render('links/enviaremail');
});

router.get('/enviaremailcodewebpage2',(req,res)=>{
    res.render('links/enviaremail2');
});*/
//LLAMA EL ARCHIVO REGISTRO.HBS QUE MUESTRA EL CONTENIDO DE LA TABLA REGISTRO
//PARA MOSTRAR EL CONTENIDO DE ESTE METODO DEBES AÑADIR /REGISTROINSCRIPCION A LA URL DE LA PAGINA WEB DEL CODE
router.get('/registroinscripcion', async (req,res)=>{
    const registro = await pool.query(`SELECT * FROM heroku_1d087d7dc881871.registro `);
    res.render('links/registro',{registro});
});
router.get('/registrociudad',async(req,res)=>{
    const registrociudad=await pool.query(`SELECT * FROM heroku_1d087d7dc881871.registrociudad `);
    res.render('links/registrociudad',{registrociudad});
})
/*
router.post('/responderconsultas/:id',async (req,res)=>{
    console.log("que pasa 1");

    const {id}=req.params;
    const {respuestaconsulta} = req.body;
    const consulta = await pool.query('SELECT * FROM heroku_1d087d7dc881871.consultas WHERE ID = ?',[id]);
    console.log(consulta);
    console.log(consulta[0].email);
    console.log(consulta[0].tema);
    console.log(respuestaconsulta);

    var mailOptions = {
        from: 'code.congreso@gmail.com',
        to: consulta[0].email,
        subject: consulta[0].tema,
        text: respuestaconsulta
    };
    transporter.sendMail(mailOptions,function ( error,info) {
        if(error){
            console.log(error);
        } else {
            console.log('Email sent: '+ info.response);
        }
    });
    console.log("que pasa 2");
    res.redirect('/verconsultasdelcode2019');
});


router.get('/*',(req,res)=>{
    res.redirect("/")
});
*/
//SECCION PARA ALMACENAR LOS REGISTROS EN LA BASE DE DATOS
router.post('/',async(req,res) => {
    const {nombres,apellidos,email,telefono,institucion} = req.body;
    const newLink={
        nombres,apellidos,email,telefono,institucion,
    };
    console.log(newLink);
    var sql2 = `INSERT INTO registro
    (
        nomb_vc,apel_vc,email_usr,num_telef,institucion_vc
    )
    VALUES
        (?,?,?,?,?)`
                        ;
    await pool.query(sql2, [nombres,apellidos,email,telefono,institucion]);
    
  /*  const customer = await stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    });
    const tipodepago = 'tarjeta';
    const montototal = numerodetickets*40;
    const strmontototal = toString(montototal*100);
    const charge = await stripe.charges.create({
        amount:strmontototal,
        currency:'pen',
        customer: customer.id,
        description: 'Ticket pass congress'

    });

    var sql6 = `SELECT id  from compradores WHERE email=? AND nombres=? AND apellidos=?`;
    const idcomprador = await pool.query(sql6,[email,nombres,apellidos]);
    var sql4 = `INSERT INTO pagos
                (
                    email,stripeTokenID,tipodepago,montototal,numerodetickets
                )
                VALUES
                (
                    ?,?,?,?,?
                )`;
    await pool.query(sql4, [customer.email,charge.id,tipodepago,montototal,numerodetickets]);

    const idtipodetickets = 1;

    var sql5 = `UPDATE tickets SET
                                   estado=?, idcomprador=? WHERE estado = 'por comprar' AND idtipodetickets=? order by id asc limit ?`;
    await pool.query(sql5,['comprado',idcomprador,idtipodetickets,numerodetickets]);

    console.log(charge.id);
    */
    res.redirect('/');
});

//SECCION DEL AREA DE CONSULTAS

router.post('/contacto', async (req, res) => {
    

    const { nombre, correo, tema, descripcion } = req.body;
    const newLink = { nombre, correo, tema, descripcion,};
    console.log(newLink);
    var sql = `INSERT INTO consultas
               (
                   nombre, email, tema, descripcion
               )
               VALUES
               (
                   ?, ?, ?, ?
               )`;
    await pool.query(sql, [nombre,correo,tema,descripcion]);
    res.redirect('/');
    
});
router.post('/ciudadEmprendedora',async (req,res)=>{
    const {nombre,apellido,correo,fecha}=req.body;
    const newLink2 ={nombre,apellido,correo,fecha,};
    console.log(newLink2);
    var sqlnew=`INSERT INTO REGISTROCIUDAD(
        nombre,apellido,correo,fecha
    )
    VALUES (?,?,?,NOW())`;
        await pool.query(sqlnew,[nombre,apellido,correo,fecha]);
        res.redirect('https://ciudad2020.herokuapp.com');
})


/*
router.post('/inscripcion',async(req,res)=>{
    const {numerodetickets,email,nombres,apellidos,dni,atencioncode,emailinvitacion,telefono,institucion,numerodedeposito,codigodescuento,carrera}=req.body;
    const newLink={
        numerodetickets,email,nombres,apellidos,dni,atencioncode,emailinvitacion,telefono,institucion,numerodedeposito,codigodescuento,carrera
    };
    console.log(newLink);
    var sql7 = `SELECT id,montototal,numerodedeposito,numerodetickets FROM pagos WHERE numerodedeposito=?`;
    const datosdelpago = await pool.query(sql7,[numerodedeposito]);
    console.log(datosdelpago);
    if (typeof(datosdelpago[0]) === 'undefined') {
        console.log("Hola");
        res.redirect('/preinscribirasistentesdelcode2019');
    }

    var sql3 = `INSERT INTO compradores
                (
                    email,nombres,apellidos,dni,atencioncode,emailinvitacion,telefono,institucion,carrera,ticket
                )
                VALUES
                    (?,?,?,?,?,?,?,?,?,?)`;
    await pool.query(sql3, [email,nombres,apellidos,dni,atencioncode,emailinvitacion,telefono,institucion,carrera,"no"]);
    const tipodepago = 'deposito';
    const idtipodetickets = 1;
    if (numerodedeposito == ''){
        const nombrepersona = nombres;
        var mailOptions = {
            from: 'code.congreso@gmail.com',
            to: email,
            subject: 'Siguientes pasos',
            html: compiledTemplate.render({nombrepersona: nombrepersona})
        };
        transporter.sendMail(mailOptions,function ( error,info) {
            if(error){
                console.log(error);
            } else {
                console.log('Email sent: '+ info.response);
            }
        });
    }*/
/*
    var sql6 = `SELECT id  from compradores WHERE email=? AND nombres=? AND apellidos=? order by id desc limit 1`;
    const idcomprador = await pool.query(sql6,[email,nombres,apellidos]);

    console.log(idcomprador[0].id);
    console.log(datosdelpago[0].id);

    var sql4 = `UPDATE pagos SET
                                 idcomprador=?,tipodepago=?,idtipodetickets=?
                WHERE numerodedeposito = ?`;
    await pool.query(sql4, [parseInt(idcomprador[0].id),tipodepago,parseInt(idtipodetickets),numerodedeposito]);

    var sql5 = `SELECT id FROM tickets WHERE estado = 'comprado' AND verificacion='por verificar' AND idpago=? order by id asc limit 1`;
    const existeticket = await pool.query(sql5,[datosdelpago[0].id]);
    if (typeof(existeticket[0]) === 'undefined') {
        console.log("Hola2");
        res.redirect('/preinscribirasistentesdelcode2019');
    } else {
        var sql5 = `UPDATE tickets SET
                                       verificacion=?, idcomprador=?, codigodescuento=? WHERE estado = 'comprado' AND verificacion='por verificar' AND idpago=? order by id asc limit 1`;
        await pool.query(sql5,['verificado',idcomprador[0].id,codigodescuento,datosdelpago[0].id]);
        /*var sql16 = `SELECT (codigoqr) FROM tickets WHERE estado = 'comprado' AND verificacion='verificado' AND idpago=? AND idcomprador=? order by id asc limit 1`;
        const datosdelticket = await pool.query(sql16,[datosdelpago[0].id,idcomprador[0].id]);
        console.log(datosdelticket);
        const nombrepersona = nombres;
        const apellidospersona = apellidos;
        const dnipersona =  dni;
        const codigoqr = datosdelticket[0].codigoqr;

        var mailOptions = {
            from: 'code.congreso@gmail.com',
            to: email,
            subject: 'Entrada online "CODE"',
            html: compiledTemplate2.render({nombrepersona: nombrepersona, apellidospersona: apellidospersona, dnipersona: dnipersona, codigoqr: codigoqr})
        };
        transporter.sendMail(mailOptions,function ( error,info) {
            if(error){
                console.log(error);
            } else {
                console.log('Email sent: '+ info.response);
            }
        });
        res.redirect('/preinscribirasistentesdelcode2019');
    }


});
*/
/*
router.post('/registrarpagos',async(req,res) => {
    const {numerodedeposito,montototal,numerodetickets,emailpago} = req.body;
    const newLink={
        numerodedeposito,montototal,numerodetickets,emailpago
    };
    console.log(newLink);
    var sql8 = `INSERT INTO pagos
                (
                    email,stripeTokenID,montototal,numerodetickets,numerodedeposito
                )VALUES(
                           ?,?,?,?,?
                       )`;
    await pool.query(sql8,[emailpago,'Holaasdw',parseInt(montototal),parseInt(numerodetickets),numerodedeposito]);
    var sql10 = `SELECT id,montototal,numerodedeposito,numerodetickets FROM pagos WHERE numerodedeposito=?`;
    const datosdelpago = await pool.query(sql10,[numerodedeposito]);
    var sql9 = `UPDATE tickets SET
                                   idpago = ?,estado = 'comprado',verificacion = 'por verificar' WHERE estado ='por comprar' order by id asc limit ?`;
    await  pool.query(sql9,[datosdelpago[0].id,parseInt(numerodetickets)]);
    res.redirect('/registrarpagoscodewebpage2019');

});
/*
router.post('/asignarpagos',async(req,res)=>{
    const {id,numerodedeposito,idtipodetickets,codigodescuento}=req.body;
    const tipodepago= "deposito";
    var sql51 = `SELECT id,montototal,numerodedeposito,numerodetickets FROM pagos WHERE numerodedeposito=?`;
    const datosdelpago = await pool.query(sql51,[numerodedeposito]);
    console.log(datosdelpago[0].id);
    var sql50 = `UPDATE pagos SET
                                  idcomprador=?,tipodepago=?,idtipodetickets=?
                 WHERE numerodedeposito = ?`;
    await pool.query(sql50, [parseInt(id),tipodepago,parseInt(idtipodetickets),numerodedeposito]);

    var sql5 = `SELECT id FROM tickets WHERE estado = 'comprado' AND verificacion='por verificar' AND idpago=? order by id asc limit 1`;
    const existeticket = await pool.query(sql5,[datosdelpago[0].id]);
    if (typeof(existeticket[0]) === 'undefined') {
        res.redirect('/');
    } else {
        var sql5 = `UPDATE tickets SET
                                       verificacion=?, idcomprador=?, codigodescuento=?, idtipodetickets=? WHERE estado = 'comprado' AND verificacion='por verificar' AND idpago=? order by id asc limit 1`;
        await pool.query(sql5,['verificado',id,codigodescuento,idtipodetickets,datosdelpago[0].id]);
        var sql16 = `SELECT (codigoqr) FROM tickets WHERE estado = 'comprado' AND verificacion='verificado' AND idpago=? AND idcomprador=? order by id asc limit 1`;
        const datosdelticket = await pool.query(sql16,[datosdelpago[0].id,id]);
        console.log(datosdelticket);
        var sql19 = `SELECT * FROM heroku_1d087d7dc881871.compradores WHERE id=?`;
        const asistente = await pool.query(sql19,[id]);
        const nombrepersona = asistente[0].nombres;
        const apellidospersona = asistente[0].apellidos;
        const dnipersona =  asistente[0].dni;
        const codigoqr = datosdelticket[0].codigoqr;
        var mailOptions = {
            from: 'code.congreso@gmail.com',
            to: asistente[0].email,
            subject: 'Entrada online "CODE"',
            html: compiledTemplate.render({nombrepersona: nombrepersona, apellidospersona: apellidospersona, dnipersona: dnipersona, codigoqr: codigoqr})
        };
        transporter.sendMail(mailOptions,function ( error,info) {
            if(error){
                console.log(error);
            } else {
                console.log('Email sent: '+ info.response);
            }
        });
        var sql28 = `UPDATE compradores SET ticket="sí" WHERE id = ?`;
        await pool.query(sql28,[id]);
        res.redirect('/listaderegistradoscodewebpage2019');
    }
});
router.post('/confirmarmerchandising',async(req,res)=>{
    const {Telefono}=req.body;
    var sql5 = `UPDATE heroku_1d087d7dc881871.compradores INNER JOIN heroku_1d087d7dc881871.tickets ON compradores.id =tickets.idcomprador SET merchandising=? WHERE compradores.telefono=?`;
    await pool.query(sql5,['si',Telefono]);
    res.redirect('/listadeasistentescodewebpage2019');
});
*/

//INSERT INTO consultas VALUES ($1, $2, $3, $4)', [newLink]
/*
router.post('/checkout', async (req,res) => {
    const customer = await stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    });
    const montototal = 40;
    const strmontototal = toString(montototal*100);
    console.log(strmontototal);
    const charge = await stripe.charges.create({
        amount:4000,
        currency:'pen',
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
*/
/*
router.post('/enviaremail',async(req,res)=>{
    const asistentes = await pool.query(`SELECT * FROM heroku_1d087d7dc881871.compradores INNER JOIN heroku_1d087d7dc881871.tickets ON compradores.id =tickets.idcomprador WHERE ticket="no"`);
    function enviar_mail(email,nombrepersona,apellidospersona,dnipersona,codigoqr){
        var mailOptions = {
            from: 'code.congreso@gmail.com',
            to: email,
            subject: 'Entrada General CODE',
            html: compiledTemplate.render({nombrepersona: nombrepersona, apellidospersona: apellidospersona, dnipersona: dnipersona, codigoqr: codigoqr})
        };
        transporter.sendMail(mailOptions,function ( error,info) {
            if(error){
                console.log(error);
            } else {
                console.log('Email sent: '+ info.response);
            }
        });
    };
    function doDelay(wait) {
        var date = new Date();
        var startDate = date.getTime();
        var a = 1;
        var b = 0;
        while (a !== 0) {
            date = new Date();
            if ((date.getTime() - startDate) >= wait) {
                a = 0;
            }
            b++;
        }
        return 1

    }
   for (var i= 0; i<asistentes.length;i+=doDelay(5000)){
        console.log(asistentes[i].id);
        console.log(asistentes[i].nombres);
        console.log(asistentes[i].apellidos);
        console.log(asistentes[i].dni);
        var sql16 = `SELECT (codigoqr) FROM tickets WHERE estado = 'comprado' AND verificacion='verificado' AND id=? order by id asc limit 1`
        const datosdelticket = await pool.query(sql16,[asistentes[i].id]);

        console.log(datosdelticket[0].codigoqr);

    }
    
    for (var i= 0; i<asistentes.length;i+=doDelay(2000)){
        if (asistentes[i].email !== ''){
            try {
                var sql16 = `SELECT (codigoqr) FROM tickets WHERE estado = 'comprado' AND verificacion='verificado' AND id=? order by id asc limit 1`
                const datosdelticket = await pool.query(sql16,[asistentes[i].id]);
                const codigoqr = datosdelticket[0].codigoqr;
                enviar_mail(asistentes[i].email,asistentes[i].nombres,asistentes[i].apellidos,asistentes[i].dni,codigoqr);
                var sql17 = `SELECT compradores.id FROM heroku_1d087d7dc881871.compradores INNER JOIN heroku_1d087d7dc881871.tickets ON compradores.id = tickets.idcomprador AND tickets.id = ?`;
                const asistente = await pool.query(sql17,[asistentes[i].id]);
                var sql28 = `UPDATE compradores SET ticket="sí" WHERE id = ?`;
                await pool.query(sql28,[asistente[0].id]);
            }
            catch (e) {
                console.log(e.name); // muestra 'Error'
                console.log(e.message); // muestra 'The message' o un error de JavaScript)
            }
        };
    };

    res.redirect('/');
});

router.post('/enviaremail2',async(req,res)=>{
    const asistentes2 = await pool.query(`SELECT * FROM heroku_1d087d7dc881871.compradores INNER JOIN heroku_1d087d7dc881871.tickets ON compradores.id =tickets.idcomprador`);
    function enviar_mail2(email,nombrepersona){
        var mailOptions = {
            from: 'code.congreso@gmail.com',
            to: email,
            subject: '¡¿List@ para el lunes?!',
            html: compiledTemplate.render({nombrepersona: nombrepersona})
        };
        transporter.sendMail(mailOptions,function ( error,info) {
            if(error){
                console.log(error);
            } else {
                console.log('Email sent: '+ info.response);
            }
        });
    };
    function doDelay(wait) {
        var date = new Date();
        var startDate = date.getTime();
        var a = 1;
        var b = 0;
        while (a !== 0) {
            date = new Date();
            if ((date.getTime() - startDate) >= wait) {
                a = 0;
            }
            b++;
        }
        return 1

    }

    for (var i= 0; i<asistentes2.length;i+=doDelay(4000)){
        if (asistentes2[i].email !== ''){
            try {
                enviar_mail2(asistentes2[i].email,asistentes2[i].nombres);
            }
            catch (e) {
                console.log(e.name); // muestra 'Error'
                console.log(e.message); // muestra 'The message' o un error de JavaScript)
            }
        };
    };
    

    res.redirect('/');
});

*/
module.exports = router;