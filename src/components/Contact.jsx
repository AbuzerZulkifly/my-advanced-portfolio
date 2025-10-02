import React, {useState} from 'react'
import {LuMail, LuPhone, LuMapPin, LuHeart} from 'react-icons/lu'
import {toast} from 'react-hot-toast'

const Contact = ({mail, telNo, location}) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showCoolName, setShowCoolName] = useState(false);
  
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    
    event.preventDefault();
     if (!name || !country || !email || !message) {
    toast.error("Please fill in all the fields.");
    return;
  }
    setResult("Sending....");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("country", country);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("access_key", "5ce30beb-cf43-4c9d-9820-d5cbc335f4b3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Email Sent Successfully")
      event.target.reset();
      setName('');
      setCountry('');
      setEmail('');
      setMessage('');
      setShowCoolName(false);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    
  };
  
  return (
    <section id='contact' className='min-h-screen py-15 px-4 relative bg-secondary/30'>
      <div className="container mx-auto max-w-5xl">
        <h2 className='text-3xl md:text-4xl font-bold mb-10 text-center'>Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div>
            <h2 className='gradient-text text-2xl md:text-3xl font-semibold text-left'>Get in Touch</h2>
            
            <p className='text-foreground/70 my-6 text-left text-xl'>I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hello, feel free to reach out!</p>
          
            <div className="flex flex-col gap-10 mt-10 ">
              <div className="flex md:gap-5 gap-3 items-center">
                <LuMail className='md:text-3xl xsm:text-xl text-blue-400' />
                <p className='text-sm sm:text-xl'>{mail}</p>
              </div>
              <div className="flex md:gap-5 gap-3 items-center">
                <LuPhone className='md:text-3xl xsm:text-xl text-blue-400' />
                <p className='text-sm sm:text-xl'>{telNo}</p>
              </div>
              <div className="flex md:gap-5 gap-3 items-center">
                <LuMapPin className='md:text-3xl xsm:text-xl text-blue-400' />
                <p className='text-sm sm:text-xl'>{location}</p>
              </div>
            </div>
          </div>

          <div className='md:border-1 border-gray-400 md:p-2 rounded-2xl flex flex-col gap-5'>
            <h2 className='gradient-text hidden md:flex text-2xl md:text-3xl font-semibold text-center'>Drop Me a Message</h2>
            
            <form onSubmit={onSubmit} className='md:mt-6 mt-3 flex flex-col md:gap-6 gap-4 md:text-left md:p-1'>
                <label htmlFor="">Your Name</label>
                <div className="flex flex-col gap-0.5">
                  <input
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setNameValidaion(e.target.value);
                    }}
                    onBlur={() => setShowCoolName(!!name)}
                    onFocus={() => setShowCoolName(false)}
                  />
                  {showCoolName && (
                    <div className="flex justify-center gap-2 items-center">
                      <LuHeart fill="red" className="text-red-600" />
                      <p className="text-lg text-green-400">Cool Name</p>
                      <LuHeart fill="red" className="text-red-600" />
                    </div>
                  )}
                </div>

                <label htmlFor="">Your Country</label>
                <input
                  type="text"
                  name="country"
                  placeholder="United States of America"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />

                <label htmlFor="">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="johnsmith@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="">Your Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Write your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button className="gradient-button-dark" type="submit">
                  Send Message
                </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact