import './DestinationsContainer.css'

const DestinationsContainer = ({ title, description , firstImage , secImage ,reverse }) => {
    return (
        <div  className= {`destinations-container ${reverse ? "reverse" :""}`}>
            <div className="text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="images">
                <img src={firstImage} alt="" />
                <img src={secImage} alt="" />
            </div>
        </div>
    )
}

export default DestinationsContainer