const express = require('express');
const router = express.Router();
const Hogan = require('hogan.js');
const fs = require('fs');
const template = fs.readFileSync('./views/links/avisoasistentes.html','utf-8');
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
        text:'Emprendedores, retomamos nuestras actividades el día lunes 28 de octubre en la Facultad de Ingeniería Industrial y Sistemas de la UNI con fuerza, y empezamos con las conferencias y talleres. Recordarles que 30 minutos antes se empezará con el registro.  ¡Nos vemos en el CODE!\n' +
            '\n' +
            'Psta.\n' +
            '1. Recordarles que las actividades previstas para el día 26 y 27 de octubre (Hackathon UNI) fueron modificadas al día 02 y 03 de noviembre en el mismo horario. Este cambio fue publicado en nuestras redes sociales por lo que les rogamos su seguimiento también.\n' +
            '2. Les adjuntamos el cronograma del lunes 28 de octubre en este correo.',
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
    text:'Muy buenos días, emprendedores.\n' +
        'Les saluda muy coordialmente la comunidad del 7mo Congreso de Desarrollo Emprendedor para invitarles a que puedan acercarse a recoger su certificado como participante de este provechoso congreso que se realizó el mes de octubre en la Universidad Nacional de Ingeniería.\n' +
        'A partir del día jueves 28 hasta el sábado 30 deberán de acercarse al centro cultural CCAT de la Facultad de Ingeniería Industrial y de Sistemas de la UNI.\n' +
        'Lo único que necesitan hacer es confirmar si van a desear su certificado virtual o físico respondiendo a este correo con su nombre completo y mencionando certificado físico o virtual dependiendo de cómo lo desee. Cualquier detalle o inconveniente podrá consultarlo por este medio también o al número 961242107.\n' +
        'Agradecemos su comprensión y estamos muy felices de poder haber contado con usted en el CODE 2019.'
};
transporter.sendMail(mailOptions,function ( error,info) {
    if(error){
        console.log(error);
    } else {
        console.log('Email sent: '+ info.response);
    }
});
