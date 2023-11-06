import AboutBanner from '../../AboutBanner/AboutBanner';
import Collapse from '../../Collapse/Collapse';
import aboutArray from '../../../datas/aboutArray.json';

function About() {
    return (
        <div>
            <AboutBanner />
            {aboutArray.map((rule, id) => (
                <Collapse key={id} aboutTitle={rule.aboutTitle} aboutText={rule.aboutText} aboutStyle="about-style" />
            ))}
        </div>
    );
}

export default About;
