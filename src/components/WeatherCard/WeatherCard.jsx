import './WeatherCard.css'
import sampleCard from '../../assets/day-sunny.svg'

export default function WeatherCard() {
    return (
        <section className="weather-card">
            <p className="weather-card__temp">75&deg;</p>
            <img src={sampleCard} alt="" className="weather-card__background" />
        </section>
    );
}