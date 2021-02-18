const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')({ origin: true })
admin.initializeApp()
require('dotenv').config()

const app = express()
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors)

let transporter = nodemailer.createTransport({
	host: 'smtp.daum.net',
	port: 465,
	secure: true,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
})

app.post('/api/email', (req, res) => {
	const { name, email, phone, content } = req.body
	console.log(content)
	console.log(typeof content)

	const mailOptions = {
		from: {
			name: '온빛클리닉',
			address: 'contact@onbitclinic.com',
		},
		to: 'contact@onbitclinic.com',
		cc: {
			name: name,
			address: email,
		},
		subject: name + '님의 문의입니다.',
		text: content + '/' + name + '/' + phone + '/' + email,
		html: `
			<div style="color: #3d4744;">
				<p>${content.replace(/\n\r?/g, '<br />')}</p>
				<br />
				<div style="border-top: 1px solid #989d9b; border-bottom: 1px solid #989d9b; width: max-content; padding: 6px 0;">
					<p>성&nbsp;&nbsp;함: ${name}</p>
					<p>연락처: ${phone}</p>
					<p>이메일: ${email}</p>
				</div>
			</div>
			`,
	}
	return transporter.sendMail(mailOptions, (error, data) => {
		if (error) {
			console.log('Email error')
			return res.send(error.toString())
		}
		console.log('Email sent')
		return res.send('Email sent')
	})
})

exports.app = functions.region('asia-northeast2').https.onRequest(app)
