
import Card from '../Card/Card'
import Title from '../title/title'
import './RecentTrips.css'

const RecentTrips = () => {
    const cards = [
        {
            image: "/assets/img/1.jpg",
            title: "Trip in Indonesia",
            description: "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"

        },
        {
            image: "/assets/img/2.jpg",
            title: "Trip in Malaysia",
            description: "Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia"

        },
        {
            image: "/assets/img/5.jpg",
            title: "Trip in France",
            description: "France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans."

        }
    ]
    return (
        <section className="recent-trips">

            <Title
                title="Recent Trips"
                subTitle="You can discover unique destination using Google Maps."
            />
            <div className="cards-container">
                {cards.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            image={card.image}
                            title={card.title}
                            description={card.description}
                        />
                    )
                })}
            </div>

        </section>
    )
}

export default RecentTrips