import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import SearchComponent from "./SearchComponent";
import { Section, H2Title } from "./StyledHome";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";

const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const [currentPage, setCurrentPage] = useState(1);
    const countriesPerPage = 10;

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    // Calcular el índice del último país de la página actual
    const indexOfLastCountry = currentPage * countriesPerPage;
    // Calcular el índice del primer país de la página actual
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    // Obtener los países de la página actual
    const currentCountries = countries.slice(
        indexOfFirstCountry,
        indexOfLastCountry
    );

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Navbar />
            <SearchComponent />
            <Section>
                <H2Title>Listado de paises:</H2Title>
                <div>
                    {currentCountries &&
                        currentCountries.map((country) => (
                            <div key={country.name.common}>
                                <p>{country.name.common}</p>
                            </div>
                        ))}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(countries.length / countriesPerPage)}
                    onPageChange={paginate}
                />
            </Section>
        </>
    );
};

export default Home;