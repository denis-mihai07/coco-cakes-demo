const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'contact.cococakes@gmail.com',
		pass: 'otuj hstj eway xquo',
	},
});

const mailOptions = {
	from: 'contact.cococakes@gmail.com',
	to: 'birtalanmihaidenis@gmail.com',
	subject: 'Contact Message from Coco Cakes Website',
	text: 'urasc negrii trebuie iubiti',
};

transporter.sendMail(mailOptions, (error, info) => {
	if (error) {
		return console.log('Eroare:', error);
	}
	console.log('Email trimis:', info.response);
});
