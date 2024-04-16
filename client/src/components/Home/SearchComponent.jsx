import { useState } from "react";
// import { useDispatch } from "react-redux";
import { resetCountriesList, searchCountries } from "../../redux/actions";
import {
    Wrapper,
    SearcherContainer,
    H2Title,
    Section,
    Searcher,
    SearchInput,
    DeleteSearch,
    SearchButton,
} from "./StyledHome";
import { useDispatch, useSelector } from "react-redux";
import FilterAndSorting from "./FilterAndSorting";

const SearchComponent = ({ resetPagination }) => {

    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const allCountries = useSelector((state) => state.allCountries);

    const handleSearch = () => {
        dispatch(searchCountries(searchTerm));
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClear = () => {
        dispatch(resetCountriesList(allCountries)); // Restaurar la lista de países original
        setSearchTerm("");
        resetPagination();
    };

    return (
        <Section>
            <Wrapper>
                <SearcherContainer>
                    <H2Title>Buscador de paises:</H2Title>
                    <Searcher>
                        <SearchInput
                            type="text"
                            placeholder="Escribe el nombre de un pais..."
                            value={searchTerm}
                            onChange={handleChange}
                        />
                        {searchTerm && (
                            <DeleteSearch onClick={handleClear}>
                                &#x2715; {/* Icono de cruz */}
                            </DeleteSearch>
                        )}
                        <SearchButton type="button" onClick={handleSearch}>
                            Buscar
                        </SearchButton>
                    </Searcher>
                </SearcherContainer>
                <FilterAndSorting />
            </Wrapper>
        </Section>
    );
};

export default SearchComponent;