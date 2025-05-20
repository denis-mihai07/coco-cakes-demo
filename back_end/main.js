const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'birtalanmihaidenis@gmail.com',
		pass: 'hwzg qkbr tvms gtvl',
	},
});

const mailOptions = {
	from: 'birtalanmihaidenis@gmail.com',
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
