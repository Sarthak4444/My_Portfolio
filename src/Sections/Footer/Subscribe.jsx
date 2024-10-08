import React, { useState } from "react";
import emailjs from 'emailjs-com';

function Subscribe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_4hfa24g',
      'template_7oen4ln', 
      formData,
      '0jdk1nCiC32UiGoQ9' 
    ).then((response) => {
      console.log('Message sent successfully!', response.status, response.text);
      setIsSent(true);
    }).catch((err) => {
      console.error('Failed to send message:', err);
    });
  };

  return (
    <>
      <div className="m-auto md:max-w-[1200px] max-w-full flex flex-col items-center justify-center">
        <span className="source-code-pro-500 text-2xl flex flex-row items-center justify-center text-white bg-[#115f3468] backdrop-blur-3xl w-fit px-5 mb-16 p-3 rounded-2xl">
          Let's Connect
          <i className="fa-regular fa-envelope text-[#14E956] ml-3"></i>
        </span>
        {isSent ? (
          <p className="text-[#14E956] source-code-pro-500 text-2xl">Message sent successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} name="contact" className="flex flex-col justify-center items-center">
            <input type="hidden" name="form-name" value="contact" />
            <div className="flex items-center justify-center md:flex-row flex-col gap-10">
              <div>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-72 md:w-96 bg-black text-[#14E956] source-code-pro-500 p-4 rounded-xl border-2 border-[#14E956] focus:outline-none focus:ring-2 focus:ring-[#14E956] focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-72 md:w-96 bg-black mt-10 text-[#14E956] source-code-pro-500 p-4 rounded-xl border-2 border-[#14E956] focus:outline-none focus:ring-2 focus:ring-[#14E956] focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Hi, I would like to connect with you..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-72 md:w-96 bg-black text-[#14E956] source-code-pro-500 p-4 rounded-xl border-2 border-[#14E956] focus:outline-none focus:ring-2 focus:ring-[#14E956] focus:border-transparent"
                  rows="5"
                />
              </div>
            </div>
            <div className="p-2 px-7 hover:scale-110 w-fit active:scale-100 active:bg-[#1d9744] text-xl cursorCustom-Pointer transition-all source-code-pro-700 rounded-full bg-black border-[2px] border-[#14E956] hover:bg-[#14E956] text-[#14E956] mt-14 hover:text-black">
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default Subscribe;
