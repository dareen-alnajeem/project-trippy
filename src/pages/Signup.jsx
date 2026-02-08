
import Footer from "../component/footer/footer"
import { Form } from "../component/Form/Form"
import Hero from "../component/Hero/hero"
export const Signup = () => {
  return (
    <>
      <Hero
        image="/assets/img/contact.jpg"
        title="Signup"
      />
      <Form
        title="Create an account"
        inputs={["Your Name", "Your Email", "passward", "Repeat Passward"]}
        submit="Register"
        footer= "Have already an account?"
        link ={{
          content :" Login here",
          href :"/login"
        }}


      />
      <Footer />
    </>
  )
}
