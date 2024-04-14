import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountries } from "../../redux/actions";
import {
    Wrapper,
    SearcherContainer,
    H2Title,
    Section,
    Searcher,
    SearchInput,
    SearchButton,
    ButtonsContainer,
    Button,
} from "./StyledHome";

const SearchComponent = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        dispatch(searchCountries(searchTerm));
        setSearchTerm("");
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
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