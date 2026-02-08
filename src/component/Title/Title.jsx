import './Title.css'

const Title = ({ title, subTitle }) => {
    return (
        <section>
            <h1>{title}</h1>
            <p className="subTitle">{subTitle}</p>
        </section>
    )
}

export default Title
