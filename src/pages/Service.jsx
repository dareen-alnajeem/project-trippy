import Hero from "../component/Hero/hero"
import Footer from "../component/footer/footer"
import RecentTrips from "../component/recentTrips/recentTrips"

const Service = () => {
  return (
    <>
      <Hero
        image="/assets/img/service.jpg"
        title="Services"
      />
      <RecentTrips/>
      <Footer/>
    </>
  )
}

export default Service