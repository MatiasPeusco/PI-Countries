import CountryCard from "../Card/Countrycard";
import { Section, H2Title, List } from "../Home/StyledHome";

const CountriesList = ({ countries }) => {
    return (
        <Section>
            <H2Title>Listado de paises:</H2Title>
            <List>
                {countries &&
                    countries.map((country) => (
                        <CountryCard
                            key={country.name.common}
                            image={country.flags.png}
                            name={country.name.common}
                            continent={country.continents[0]}
                        />
                    ))}
            </List>
        </Section>
    );
};

export default CountriesList;