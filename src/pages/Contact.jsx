
import { Form } from "../component/Form/Form"
import Hero from "../component/Hero/hero"
import Footer from "../component/footer/footer"

const Contact = () => {
  return (
    <>
      <Hero
        image="/assets/img/contact.jpg"
        title="Contact"
      />
      <Form
      title ="Send a message to us!"
      inputs={["Name"  ,"Email" , "Subject"]}
      textarea="massege"
      submit="Send massege"
      
      />
      <Footer/>
    </>
  )
}

export default Contact