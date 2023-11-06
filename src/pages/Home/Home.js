import Banner from '../../Banner/Banner';
import Card from '../../Cards/Card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/data/bdd.json').then((res) => setData(res.data));
    }, []);

    return (
        <div>
            <Banner />
            <div className="cards-container">
                {data.map((appart, id) => (
                    <div className="card_logement" key={id}>
                        <Link className="link_card_logement" to={`/logement/${appart.id}`}>
                            <Card cover={appart.cover} title={appart.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
