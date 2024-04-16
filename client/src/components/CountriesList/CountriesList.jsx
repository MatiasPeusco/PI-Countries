import CountryCard from "../Card/Countrycard";
import { Section, H2Title, List } from "../Home/StyledHome";

const CountriesList = ({ countries }) => {
    return (
        <Section style={{ background: "#f9fafb" }}>
            <H2Title>Listado de paises:</H2Title>
            <List>
                {countries &&
                    countries.map((country) => (
                        <CountryCard
                            key={country.name}
                            id={country.id}
                            image={country.flagImage}
                            name={country.name}
                            continent={country.continent}
                        />
                    ))}
            </List>
        </Section>
    );
};

export default CountriesList;