import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ljoh9y5', 'template_otplmta', form.current, 'PzdRZTY7NJjFjHlRp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
    e.target.reset();
  };

  const contact_info = [
    {
      logo: 'mail' , text: 'shahsomething@gmail.com'
    },

    {
      logo: 'logo-whatsapp' , text: '03336667788'
    },

    {
      logo: 'location' , text: 'Gulbahar no.3'
    },
  ]
  return<>
   <section className=" contact-me py-10 px-5 text-black">
<div className="text-center my-8">
<h3 className="text-4xl font-semibold">
  Contact <span className="text-cyan-600">me</span>
</h3>
<p className="text-gray-400 mt-3 text-lg">Get in touch</p>
<div className="mt-8 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-200 p-6 rounded-lg mx-auto">
  <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5">
    <input type="text" placeholder="your name" />
    <input type="email" name='user_email'  placeholder="your email" />
    <textarea name='message' placeholder="your message" rows="10"></textarea>
    <button type="submit" value="Send" className="btn-primary w-fit">Send Message</button>
  </form>
  <div className=" flex flex-col gap-7">
   {
    contact_info?.map((contact,i) =>(
      <div key={i} className="flex gap-4 w-fit items-center">
      <div className="min-w-[3.5rem] min-h-[3.5rem] flex items-center justify-center bg-cyan-600 rounded-full text-white text-2xl">
        <ion-icon name={contact.logo}></ion-icon>
      </div>
      <p className="text-lg">{contact.text}</p>
    </div>
    ))
   }
  </div>
</div>
</div>
  </section>;
  </>
};

export default Contact;
