import { useState } from 'react';
import left from '../../assets/images/vector-left.svg';
import right from '../../assets/images/vector-right.svg';

function Carrousel({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <section id="carrousel-container">
            {length > 1 && <img src={left} alt="gauche" onClick={prevSlide} className="leftArrow" />}
            {length > 1 && <img src={right} alt="droite" onClick={nextSlide} className="rightArrow" />}
            {slides.map((slide, index) => (
                <div
                    key={index} // mise en place du slider avec affichage conditionnel et opacity=1 quand le slide en cours vaut l'index
                    className={current === index ? 'slider bl-msk wh-msk active-anim' : 'slider bl-msk wh-msk'}
                >
                    {index === current && <img src={slide} alt="appartement à louer" />}
                    {index === current && (
                        <span className="slider__number">
                            {current + 1}/{length}
                        </span>
                    )}
                </div>
            ))}
        </section>
    );
}

export default Carrousel;
