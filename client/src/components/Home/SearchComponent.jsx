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
    return (
        <Section>
            <Wrapper>
                <SearcherContainer>
                    <H2Title>Buscador de paises:</H2Title>
                    <Searcher>
                        <SearchInput
                            type="text"
                            placeholder="Escribe el nombre de un pais..."
                        />
                        <SearchButton type="submit">Buscar</SearchButton>
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