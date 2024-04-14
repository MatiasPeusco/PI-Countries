import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import SearchComponent from "./SearchComponent";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import CountriesList from "../CountriesList/CountriesList";
import Footer from "../Footer/Footer";

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

    const resetPagination = () => {
        setCurrentPage(1);
    };

    return (
        <>
            <Navbar />
            <SearchComponent resetPagination={resetPagination} />
            <CountriesList countries={currentCountries} />
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(countries.length / countriesPerPage)}
                onPageChange={paginate}
            />
            <Footer />
        </>
    );
};

export default Home;