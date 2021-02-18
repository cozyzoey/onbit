import './Email.scss'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import resizeTextarea from '../../../helpers/resizeTextarea'
import EdgeBtn from '../../../components/EdgeBtn'
import Alert from '../../../components/Alert'

function Email() {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [content, setContent] = useState('')
	const [emailSent, setEmailSent] = useState(false)
	const [emailFail, setEmailFail] = useState(false)
	const [emailLoading, setEmailLoading] = useState(false)

	useEffect(() => {
		if (emailSent) {
			setName('')
			setPhone('')
			setContent('')
			setEmail('')

			const timer = setTimeout(() => setEmailSent(false), 3000)
			return () => {
				clearTimeout(timer)
			}
		} else if (emailFail) {
			const timer = setTimeout(() => setEmailFail(false), 3000)
			return () => {
				clearTimeout(timer)
			}
		}
	}, [emailSent, emailFail])

	const onInputChange = (e) => {
		switch (e.target.name) {
			case 'name':
				setName(e.target.value)
				break
			case 'phone':
				setPhone(e.target.value)
				break
			case 'email':
				setEmail(e.target.value)
				break
			case 'content':
				setContent(e.target.value)
				break
			default:
				return
		}
	}

	const onEmailSubmit = (e) => {
		e.preventDefault()
		// === send email to firebase function
		setEmailLoading(true)
		const uri =
			window.location.hostname === 'localhost'
				? 'http://localhost:5001/onbitclinic/asia-northeast2/app/api/email'
				: 'https://asia-northeast2-onbitclinic.cloudfunctions.net/app/api/email'
		axios
			.post(
				uri,
				{
					email,
					name,
					content,
					phone,
				},
				{ crossdomain: true }
			)
			.then((response) => {
				setEmailLoading(false)
				setEmailSent(true)
			})
			.catch((error) => {
				setEmailLoading(false)
				setEmailFail(true)
			})
	}

	return (
		<form className='email' onSubmit={onEmailSubmit}>
			{emailSent && (
				<Alert variant='success'>문의가 성공적으로 접수되었습니다.</Alert>
			)}
			{emailFail && (
				<Alert variant='error'>
					메일에 문제가 있습니다. 다른 방법으로 문의해 주세요.
				</Alert>
			)}
			<input
				type='text'
				name='name'
				value={name}
				onChange={onInputChange}
				placeholder='성함'
				required
				id='email-name-field'
			/>
			<input
				type='tel'
				name='phone'
				value={phone}
				onChange={onInputChange}
				placeholder='연락처'
				required
			/>
			<input
				type='email'
				name='email'
				value={email}
				onChange={onInputChange}
				placeholder='이메일'
				required
			/>
			<textarea
				type='text'
				name='content'
				value={content}
				onChange={onInputChange}
				placeholder='상담 내용을 입력해주세요'
				required
				onKeyDown={resizeTextarea}
				onKeyUp={resizeTextarea}
			/>
			<div className='email__btn'>
				<EdgeBtn type='submit' disabled={emailLoading}>
					{emailLoading ? 'Sending...' : '보내기'}
				</EdgeBtn>
			</div>
		</form>
	)
}

export default Email
