import React from 'react';
import "./output.css"
const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8a9cb451-9abb-4ae9-ac8d-3d27fe6817df");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className='flex justify-center items-center min-h-[100vh] bg-purple-600'>
      <form onSubmit={onSubmit} className='bg-white p-10 border-solide border-2 rounded-md w-[40%] '>
          <h2 className='text-center text-[30px] font-bold'>Contact Form</h2>
          <div className='flex flex-col'>
              <label>Full Name</label>
              <input name="name" type="text" required  className='border-2 rounded-sm'/>
          </div>

          <div  className='flex flex-col'>
              <label>Email</label>
              <input name="email" type="email" required className='border-2 rounded-sm' />
          </div>
          
          <div  className='flex flex-col'>
              <label>Type your message</label>
              <textarea name="message"  id='' required className='border-2 rounded-sm h-20'></textarea>
          </div>

          <div className='flex justify-center my-4'>
            <button className='bg-purple-600 text-white font-semibold p-[10px] text-center border-2 rounded-md' type='submit'>
              Sent Message 
            </button>
          </div>
      </form>
    </section>
  );
};

export default ContactUs;
