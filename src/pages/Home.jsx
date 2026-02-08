import Footer from "../component/footer/footer"
import Hero from "../component/Hero/hero"
import PopularDestinations from "../component/PopularDestinations/PopularDestinations"
import RecentTrips from  "../component/RecentTrips/RecentTrips"

const Home = () => {
  return (
    <>
        <Hero
        image="/assets/img/home.jpg"
        title =" Your Journey Your Story"
        description ="Choose Your Favourite Destination."
        button ="Travel Now"
        />
        <PopularDestinations/>
        <RecentTrips/>
        <Footer/>
    </>
  )
}

export default Home