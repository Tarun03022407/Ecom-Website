import { Input } from "@chakra-ui/react";
import "./Contact.css"

const Contact = () => {


  return (
    <div>
      <h2 className="common-heading" >Contact Page</h2>



      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224611.8036088062!2d77.17898457661389!3d28.402371870422577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc15f5a424b1%3A0xe4f50576c850e0f2!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1668589144369!5m2!1sen!2sin" width="100%" height="400" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>



      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mpznbyel" className="contact-input" method="POST">
            <Input  type={"text"} required autoComplete="off" name="username"  placeholder="username" />
            <Input  type={"email"} required autoComplete="off" name="email"  placeholder="Email" />

            <textarea className="textarea" name="message" required  autoComplete="off" placeholder="Enter Your Message" ></textarea>

            <Input type="submit" />
          </form>
        </div>


      </div>


    </div>
  )
};

export default Contact;
