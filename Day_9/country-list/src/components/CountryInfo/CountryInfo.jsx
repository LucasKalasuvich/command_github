import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { apiURL } from "../Util/api";
import {Link} from "react-router-dom";

const CountryInfo = () => {
    const [country, setCountry] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const { countryName } = useParams();

    useEffect(() => {
        const getCountryByName = async () => {
            try {
                const res = await fetch(`${apiURL}/name/${countryName}`);
                if (!res.ok) throw new Error('Not Found');
                const data = await res.json();

                setCountry(data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setError(error.message);
            }
        };

        getCountryByName();
    }, [countryName]);

    return (
        <div className="country_info">
            <button>
                <Link to="/">Back</Link>
            </button>

            <div className="country_container">
                <div className="country_img">
                    <img src={country.flags.png} alt="" />
                </div>
                <div className="country">
                    <div className="country_left">
                        <h5>
                            Native Name: <span>{country.name?.common}</span>
                        </h5>
                        <h5>
                            Population: <span>{country.population}</span>
                        </h5>
                        <h5>
                            Region: <span>{country.region}</span>
                        </h5>
                        <h5>
                            Sub Region: <span>{country.subregion}</span>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryInfo;