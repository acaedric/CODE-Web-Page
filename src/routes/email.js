const express = require('express');
const router = express.Router();
const Hogan = require('hogan.js');
const fs = require('fs');
const template = fs.readFileSync('../ticketonline2.html','utf-8');
const compiledTemplate = Hogan.compile(template);
const nombrepersona = "Marcial";
const apellidospersona = "Rubio";
const dnipersona =  "81243129";
const codigoqr = "5e54wd5";

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
        user: 'acaedric@gmail.com',
        pass: '20111136b20170145D'
    }
});
var registrados =
    [
        'claudia.ivv@hotmail.com',
        'ing.qr.24@gmail.com',
        '20161926@alie.ulima.edu.pe',
        'a20131792@pucp.pe',
        'meli2000gs@gmail.com',
        'nataly.0924@gmail.com',
        'rojasalcedo2014@gmail.com',
        'jonaco.buma@gmail.com',
        'malenaroncal@hotmail.com',
        'milenka.b28@gmail.com',
        'ronald.romeror@pucp.pe',
        'e.silvestreespichan1109@gmail.com',
        'michael.lazaro.cubas@gmail.com',
        'jhoselline.morote.m10@gmail.com',
        'jeff_velazco@hotmail.com',
        'ktyxd2905@gmail.com',
        'u201526339@upc.edu.pe',
        'Rosariomamaniq@inkasecrets.com',
        'antoaneth.mamani@pucp.pe',
        'bcontrerasvr@gmail.com',
        'eccp197@gmail.com',
        'brayam_sc@hotmail.com',
        'ginocarranza7@gmail.com',
        'macctazo@gmail.com',
        'ddamian1196@gmail.com',
        'ncondors@pucp.edu.pe',
        'edgar11_21@hotmail.com',
        'jesuslevanoheredia@gmail.com',
        'oswaldoortegamontero@gmail.com',
        'johannaemprende@gmail.com',
        'jheremy.chocos@gmail.com',
        'delcarpioclaudia7@gmail.com',
        'dcasa.1409@gmail.com',
        'gabrielamoralescabello@gmail.com',
        'eliassoto.ingenieria@gmail.com',
        'kaalvin_@hotmail.com',
        'frojas@aniquem.org',
        'l25leonela@gmail.com',
        'alin_piero@hotmail.com',
        'jamq.cnm.20@gmail.com',
        'elizaverojas@gmail.com',
        'jorgers_41@hotmail.com',
        'acentenos@uni.pe',
        'maribel.salvatierra.pe@gmail.com',
        'gabi.men.con08@gmail.com',
        'Javier_TR_07@hotmail.com',
        'daniela.canales@pucp.edu.pe',
        'ncondors@pucp.edu.pe',
        'paulmama220992@gmail.com',
        'juan@ieee.org',
        'oscarquispe@upeu.edu.pe',
        'paulmamani220992@gmail.com',
        'jeanpier.paucar.g@uni.pe',
        'luis.pampaq@gmail.com',
        'kpkingg@gmail.com',
        'jorgegalvantam@gmail.com',
        'mba_uigv@yahoo.es',
        'cam.200784@gmail.com',
        'julio.rodriguez301@gmail.com',
        'fb@cipercorp.com',
        'stephannevega@gmail.com',
        'richard.copaja@gmail.com',
        'joselsalvatierrah@gmail.com',
        'carolrosales1987@gmail.com',
        'rmenachobustos@gmail.com',
        'luisvillavicencioayala@gmail.com',
        'leonardocastro@uni.pe',
        'robertsjhons@gmail.com',
        'taliaberroa@gmail.com',
        'marcelo.cuellar@tecsup.edu.pe',
        'crosfayer06@gmail.com',
        'ehuaynatesm@gmail.com',
        'garralaser@gmail.com',
        'bmaldonadobendezu@gmail.com',
        'gianellamtp@hotmail.com',
        'mayraauqui123@gmail.com',
        '18karrie15@gmail.com',
        'cdelpino@pucp.pe',
        'seleneseclen2996@gmail.com'];


function enviar_mail(email){
    var mailOptions = {
        from: 'code.congreso@gmail.com',
        to: email,
        subject: 'Obtén tu entrada al Congreso de Desarrollo Emprendedor',
        html: compiledTemplate.render()
    };
    transporter.sendMail(mailOptions,function ( error,info) {
        if(error){
            console.log(error);
        } else {
            console.log('Email sent: '+ info.response);
        }
    });
};

var mailOptions = {
    from: 'acaedric@gmail.com',
    to: 'swordstylepe@gmail.com',
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
