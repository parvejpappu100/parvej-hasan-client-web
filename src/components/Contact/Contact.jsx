import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [sending, setSending] = useState(false);

    const onSubmit = async (data) => {
        setSending(true);
        try {
            await fetch('https://parvej-hasan-server.vercel.app/send-email', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
            reset();
            setSending(false);
            Swal.fire(
                'Thank You!',
                'I will response your message as soon as possible!',
                'success'
            )
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: error.message
            })
            setSending(false)
        }
    }

    return (
        <div className='max-w-[1244px] mx-auto px-4 mt-36 mb-32'>
            <div className='text-center max-w-[800px] mx-auto'>
                <div className='flex items-center justify-center gap-4'>
                    <div className='w-[10px] h-[10px] rounded-full bg-[#C9F31D]'></div>
                    <p className='text-[#A7A7A7] font-semibold'>Contact</p>
                </div>
                <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='text-white font-semibold text-2xl md:text-3xl lg:text-5xl mt-5'>Let’s Talk For your <span className='text-[#C9F31D]'>Next Projects</span></h3>
            </div>
            <div className='mt-12 md:mt-20 lg:mt-32'>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='flex flex-col md:flex-row gap-10 px-2 lg:px-0'>
                    <div className='text-xl '>
                        <p className='text-[#A7A7A7] font-semibold'>Get In Touch</p>
                        <h3 className="text-2xl font-semibold  mt-4 text-[#C9F31D] uppercase">Address</h3>
                        <p className='text-[#A7A7A7] font-semibold my-4'>Dhaka , Bangladesh</p>
                        <div className='flex items-center gap-4 my-4'>
                            <div className='text-[#C9F31D]'>
                                <FaEnvelope></FaEnvelope>
                            </div>
                            <p className='text-[#A7A7A7] font-semibold'>parvejhasanpappu100@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-4 '>
                            <div className='text-[#C9F31D]'>
                                <FaPhoneAlt></FaPhoneAlt>
                            </div>
                            <p className='text-[#A7A7A7] font-semibold'>01974190770 (What's Up , Telegram) <br /> 01608190770</p>
                        </div>
                        <div className='mt-5'>
                            <h3 className="text-2xl font-semibold mb-4 duration-700 text-white" >Follow Me</h3>
                            <div className='flex gap-4'>
                                <div className='tooltip bg-[#C9F31D] w-[44px] h-[44px] flex items-center justify-center rounded-full text-black' data-tip="Facebook">
                                    <a href="https://www.facebook.com/pappu.parvejhasan/" target='_blank'><FaFacebookF></FaFacebookF></a>
                                </div>
                                <div className='tooltip bg-[#C9F31D] w-[44px] h-[44px] flex items-center justify-center rounded-full text-black' data-tip="GitHub">
                                    <a href="https://github.com/parvejpappu100" target='_blank'><FaGithub></FaGithub></a>
                                </div>
                                <div className='tooltip bg-[#C9F31D] w-[44px] h-[44px] flex items-center justify-center rounded-full text-black' data-tip="Linkedin">
                                    <a href="https://www.linkedin.com/in/parvej-hasan-pappu-569730278/" target='_blank'><FaLinkedinIn></FaLinkedinIn></a>
                                </div>
                                <div className='tooltip bg-[#C9F31D] w-[44px] h-[44px] flex items-center justify-center rounded-full text-black' data-tip="Instagram">
                                    <a href="https://www.instagram.com/parvej_pappu_404/" target='_blank'><FaInstagramSquare></FaInstagramSquare></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <h3 className='text-2xl font-semibold text-[#C9F31D] uppercase'>Send Me a Message</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
                            <div className='flex flex-col md:flex-row gap-5'>
                                <div className='w-full'>
                                    <label className="label">
                                        <span className="label-text text-xl text-white font-semibold mb-3">Full Name</span>
                                    </label>
                                    <input {...register("name", { required: true })} className="bg-[#1F1F1F] w-full py-4  px-3 border border-[#515255] rounded-2xl text-white pl-10 font-semibold" placeholder='Jone Doe' type="text" />
                                    {errors.name && <span className='text-red-600'>Name is required</span>}
                                </div>
                                <div className='w-full'>
                                    <label className="label">
                                        <span className="label-text text-xl text-white font-semibold mb-3">Email Address</span>
                                    </label>
                                    <input {...register("email", { required: true })} className="bg-[#1F1F1F] w-full py-4  px-3 border border-[#515255] rounded-2xl text-white pl-10 font-semibold" placeholder='support@gmail.com' type="email" name="email" id="" />
                                    {errors.email && <span className='text-red-600'>Email is required</span>}
                                </div>
                            </div>
                            <label className="label mt-4">
                                <span className="label-text text-xl text-white font-semibold ">Email Address</span>
                            </label>
                            <textarea {...register("message", { required: true })} className="bg-[#1F1F1F] w-full mt-5 p-5 text-xl border border-[#515255] rounded-2xl text-white pl-10 font-semibold" name="message" placeholder='Tell me more about your needs...' id="" cols="30" rows="5"></textarea>
                            {errors.message && <span className='text-red-600'>Please write something</span>}
                            <div className='mt-5'>
                                <input disabled={sending} className='bg-[#C9F31D] text-black px-2 lg:px-5 py-2 rounded-xl lg:text-xl font-semibold flex items-center gap-1 hover:gap-2 duration-500' type="submit" value={sending ? "Sending..." : "Send Me Message >"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;