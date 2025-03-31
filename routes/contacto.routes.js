const express = require('express')
const router = express.Router();
const nodemailer = require('nodemailer');

require('dotenv').config();



router.post('/email', async (req, res) => {

    console.log("Datos recibidos:", req.body);
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        pool: true,
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465, 
        secure: true, 
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    }); 
    
    try {
       
            const sendToAdmin = {
            from: `"Formulario Web" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `Nuevo mensaje de ${name}`,
            text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2 style="color: rgb(4, 67, 131); text-align: center;">Nuevo mensaje de contacto</h2>
                    <p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Mensaje:</strong></p>
                    <p>${message}</p>
                </div>
            `
        }
        
      
        const sendToUsuario = {
            from: `"Fast Request" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Hemos recibido tu mensaje - Fast Request',
            text: `Hola ${name},\n\nGracias por contactarnos. Hemos recibido tu mensaje:\n\n"${message}"\n\nNuestro equipo te responderá en un máximo de 24 horas.\n\nSaludos,\nEquipo Fast Request`,
            html: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width">
                <title>Confirmación de Mensaje</title>
            </head>
            <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f7f9fc;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <!-- Header --> 
                    <tr>
                        <td style="padding: 30px 25px; background: #1a73e8; border-radius: 12px 12px 0 0;">
                        </td>
                    </tr>
                    <!-- Cuerpo del mensaje -->
                    <tr>
                        <td style="padding: 35px 25px;">
                            <h1 style="color: #2d3748; font-size: 24px; margin: 0 0 25px 0; text-align: center;">¡Gracias por contactarnos, ${name}!</h1>
                            <div style="text-align: center; margin: 30px 0;">
                                <p style="color: #718096; font-size: 16px; margin: 15px 0;">Nuestro equipo revisará tu consulta y te responderá en menos de 24 horas.</p>
                            </div>
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 25px; background: #1a73e8; border-radius: 0 0 12px 12px; text-align: center;">
                            <p style="color: #ffffff; font-size: 12px; margin: 10px 0;">© ${new Date().getFullYear()} Fast Request. Todos los derechos reservados.</p>
                        </td>
                    </tr>
                </table>
            </body>
            </html>
            `
        }

        await Promise.all([ 
            transporter.sendMail(sendToAdmin),
            transporter.sendMail(sendToUsuario),
        ]);
        
        console.log("Correos enviados exitosamente");
        res.json({ message: 'Correo enviado correctamente' });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ message: 'Error al enviar el correo', error: error.message });
    }
});

module.exports = router;







