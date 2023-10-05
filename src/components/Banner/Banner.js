import IMGbanner from '../../assets/images/IMGbanner.png';

function Banner() {
    return (
        <div className="banner-container">
            <div className="banner-container__img">
                <img src={IMGbanner} alt="Paysage marin" />
            </div>
            <div className="banner-container__text">Chez vous, partout et ailleurs</div>
        </div>
    );
}

export default Banner;
