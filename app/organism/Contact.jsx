'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
	const [errorMessage, setErrorMessage] = useState();
	const handleSubmit = e => {
		e.preventDefault();
		const form = e.target;

		const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
		const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
		const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

		if (form.message.value == '' && form.email.value == '') {
			console.log('yeyyy');
			setErrorMessage('Please enter data');
			return;
		}
		try {
			emailjs.sendForm(serviceId, templateId, form, privateKey).then(
				() => {
					alert('Message sent successfully!');
					form.reset();
				},
				error => {
					console.log(error.text);
					alert('Failed to send the message, please try again.');
				}
			);
		} catch (err) {
			console.log(err);
			alert('An unexpected error occurred, please try again.');
		}
	};
	return (
		<section className='flex flex-col lg:flex-row items-center justify-center py-20 gap-20 p-0 lg:px-20'>
			<div className='flex flex-col gap-5 w-full lg:w-1/2 items-center lg:items-start text-center lg:text-start'>
				<h5 className='font-semibold text-3xl'>Contact with me</h5>
				<p className='w-full lg:w-3/4 text-lg text-secondary'>
					I'm always open to discussing new projects, creative ideas, or
					opportunities to be part of your visions. If you're interested in
					working together or just want to say hi, feel free to reach out
					through the form below or email me directly. Let's make something
					amazing together!
				</p>
				<span className='text-secondary'>P.s anecdotes also accepts ;)</span>
			</div>
			<form
				className='bg-secondary flex flex-col gap-5 px-5 py-10 rounded-2xl'
				onSubmit={handleSubmit}
			>
				<h5 className='font-medium text-xl pl-2'>Get in touch</h5>
				<div>
					<p className='text-red-500'>{errorMessage}</p>
					<input
						className='input'
						type='text'
						name='email'
						placeholder='E-mail'
					/>
				</div>
				<div>
					<p className='text-red-500 text-sm'>{errorMessage}</p>
					<textarea
						className='w-full h-20 p-2 rounded-lg outline-none'
						type='text'
						name='message'
						placeholder='Message'
					/>
				</div>
				<button
					className='bg-violet text-white rounded-lg w-40 h-10'
					type='submit'
				>
					Send
				</button>
			</form>
		</section>
	);
};

export default Contact;
