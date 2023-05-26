import HeroContent from "./HeroContent";
import Controls from "./Controls";

function HeroDisplay() {
    return (
        <div className="hero-content">
            <h2>
                <img alt={HeroContent.title} src={HeroContent.imageUrl} />
            </h2>
            <h3>{HeroContent.subtitle}</h3>
            <p>{HeroContent.description}</p>
            <Controls />
        </div>
    );
}

export default HeroDisplay;
