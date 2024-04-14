import { useState } from "react";
// import { useDispatch } from "react-redux";
import { searchCountries } from "../../redux/actions";
import {
    Wrapper,
    SearcherContainer,
    H2Title,
    Section,
    Searcher,
    SearchInput,
    DeleteSearch,
    SearchButton,
    ButtonsContainer,
    Button,
} from "./StyledHome";

import { useDispatch, useSelector } from "react-redux";

const SearchComponent = ({ resetPagination }) => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const allCountries = useSelector((state) => state.allCountries);

    const handleSearch = () => {
        dispatch(searchCountries(searchTerm));
        setSearchTerm("");
    };
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClear = () => {
        setSearchTerm("");
        dispatch(searchCountries(allCountries)); // Restaurar la lista de países original
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
                <ButtonsContainer>
                    <Button type="button">Filtrar</Button>
                    <Button type="button">Ordenar</Button>
                </ButtonsContainer>
            </Wrapper>
        </Section>
    );
};

export default SearchComponent;