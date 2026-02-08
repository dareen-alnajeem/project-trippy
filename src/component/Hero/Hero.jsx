import './Hero.css'

const Hero = ({ image, title, description, button }) => {
    return (
        <div className="hero" style={{ backgroundImage: `URL(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
            {button && <p><button>{button}</button></p>}

        </div>
    )
}

export default Hero