import IMGbanner from '../../assets/images/IMGbanner.png';

function Banner() {
    return (
        <div className="banner-container">
            <img className="banner-container__img" src={IMGbanner} alt="Paysage marin" />
            <div className="banner-container__text">Chez vous, partout et ailleurs</div>
        </div>
    );
}

export default Banner;
