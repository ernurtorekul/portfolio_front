'use client';
import React from 'react';
import emailjs from 'emailjs-com';

const handleSubmit = e => {
	e.preventDefault();

	const message = e.target;
	emailjs
		.sendForm(
			'service_0fypdf2',
			'template_z1rtxeh',
			message,
			'3BzI2s1D0Zzh5WA4Q'
		)
		.then(
			result => {
				console.log(result.text);
				alert('Message sent successfully!');
				e.target.reset();
			},
			error => {
				console.log(error.text);
				alert('Failed to send the message, please try again.');
			}
		);
};

const Contact = () => {
	return (
		<section className='flex flex-col lg:flex-row items-center justify-center py-20 gap-20 p-0 lg:px-20'>
			<div className='flex flex-col gap-5 w-full lg:w-1/2 items-center lg:items-start text-center lg:text-start'>
				<h5 className='font-semibold text-3xl'>Contact with me</h5>
				<p className='w-full lg:w-3/4 text-lg'>
					I'm always open to discussing new projects, creative ideas, or
					opportunities to be part of your visions. If you're interested in
					working together or just want to say hi, feel free to reach out
					through the form below or email me directly. Let's make something
					amazing together!
				</p>
				<span className='text-secondary'>P.s anecdotes also accepts ;)</span>
			</div>
			<form
				className='bg-secondary flex flex-col gap-5 px-10 py-10 rounded-2xl'
				onSubmit={handleSubmit}
			>
				<h5 className='font-medium'>Contact with me</h5>
				<input
					className='input'
					type='text'
					name='email'
					placeholder='E-mail'
				/>
				<input
					className='input'
					type='text'
					name='message'
					placeholder='Message'
				/>
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
