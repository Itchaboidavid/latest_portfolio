import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiSend } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';
import {motion} from 'framer-motion'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]: value
        });
    }

    const validate = () => {
        let errors = {};
        if(!formData.name) errors.name = "Name is required";
        if(!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid"
        }
        if(!formData.message) errors.message = "Message is required";

        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationError = validate();
        if (Object.keys(validationError).length > 0) {
            setErrors(validationError);
        } else {
            setErrors({});
            setIsSending(true);

            emailjs.send(
                "service_xa279nb",
                "template_es5ekwm",
                formData,
                "YeJSbVctKotxCt3iQ"
            ).then((response) => {
                toast.success('Email sent successfully.');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                })
            }).catch((error) => {
                console.error(error);
                toast.error('We encounter a problem sending the email. Please try again later.')
            }).finally(() => setIsSending(false)) 
        }
    }
    
  return (
    <div className='p-4 lg:w-3/4' id='contact'>
        <motion.h2 initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} className='text-center font-semibold text-3xl mb-10'>Let's Connect</motion.h2>
        <Toaster />
        <motion.form onSubmit={handleSubmit} initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8, delay: 0.7}}>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 lg:pe-5'>
                <input type="text" onChange={handleChange} name='name' id='name' value={formData.name} placeholder='Name' className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'/>
                {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                </div>

                 <div className='w-full lg:w-1/2'>
                <input type="email" onChange={handleChange} name='email' id='email' value={formData.email} placeholder='Email' className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'/>
                {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                </div>
            
                <div className='w-full'>
                <textarea onChange={handleChange} name='message' id='message' value={formData.message} placeholder='Enter your message here...' className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none' rows={10}></textarea>
                {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
                </div>
            </div>
            <button type='submit' className={`w-full mb-8 rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm uppercase font-semibold text-stone-900 hover:bg-stone-200 ${isSending ? 'cursor-wait' : ''}`} disabled={isSending}>
                <div className='flex items-center justify-center gap-2'>
                    {isSending ? 'Sending...' : 'Send'}
                    <FiSend />
                </div>
            </button>
            
        </motion.form>
    </div>
  )
}

export default Contact