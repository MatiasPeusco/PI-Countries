import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    filterCountriesByActivity,
    filterCountriesByContinent,
    resetCountriesList,
    sortByPopulationAsc,
    sortByPopulationDesc,
    sortCountriesZA,
} from "../../redux/actions";
import { Chip, ButtonsContainer, Button } from "./StyledHome";
import {
    Wrapper,
    DropdownMenu,
    DropdownItem,
    ItemSeparator,
} from "./StyledFilterAndSorting";
import { CONTINENTS } from "../../constants";

const FilterAndSorting = () => {
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const [label, setLabel] = useState(null);
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.allCountries);
    const activities = useSelector((state) => state.activities);

    const toggleFilterDropdown = () => {
        setShowFilterDropdown(!showFilterDropdown);
    };

    const toggleSortDropdown = () => {
        setShowSortDropdown(!showSortDropdown);
    };

    const clearAppliedLabel = () => {
        dispatch(resetCountriesList(allCountries));
        setLabel(null);
    };

    const handleContinentFilter = (continent) => {
        dispatch(filterCountriesByContinent(continent));
        setShowFilterDropdown(false);
        setLabel(`${continent}`);
    };

    const handleActivityFilter = (activity) => {
        dispatch(filterCountriesByActivity(activity));
        setShowFilterDropdown(false);
        setLabel(`${activity}`);
    };

    const handleSortAZ = () => {
        dispatch(resetCountriesList(allCountries));
        setShowSortDropdown(false);
        setLabel("A - Z");
    };

    const handleSortZA = () => {
        dispatch(sortCountriesZA());
        setShowSortDropdown(false);
        setLabel("Z - A");
    };

    const handleSortPopulationAsc = () => {
        dispatch(sortByPopulationAsc());
        setShowSortDropdown(false);
        setLabel("Población Asc.");
    };

    const handleSortPopulationDesc = () => {
        dispatch(sortByPopulationDesc());
        setShowSortDropdown(false);
        setLabel("Población Desc.");
    };

    return (
        <ButtonsContainer>
            {label && <Chip onClick={clearAppliedLabel}>{label} &#x2715;</Chip>}
            <Wrapper>
                <Button type="button" onClick={() => toggleFilterDropdown()}>
                    Filtrar
                </Button>
                {showFilterDropdown && (
                    <DropdownMenu>
                        <>
                            {CONTINENTS && <ItemSeparator>Continente</ItemSeparator>}
                            {CONTINENTS.map((continent, index) => (
                                <DropdownItem
                                    key={index}
                                    onClick={() => handleContinentFilter(continent.value)}
                                >
                                    {continent.name}
                                </DropdownItem>
                            ))}
                            {activities && (
                                <ItemSeparator style={{ marginTop: "5px" }}>
                                    Actividad
                                </ItemSeparator>
                            )}
                            {activities.length > 0 &&
                                activities.map((activity) => (
                                    <DropdownItem
                                        key={activity.id}
                                        onClick={() => handleActivityFilter(activity.name)}
                                    >
                                        {activity.name}
                                    </DropdownItem>
                                ))}
                        </>
                    </DropdownMenu>
                )}
            </Wrapper>
            <Wrapper>
                <Button type="button" onClick={() => toggleSortDropdown()}>
                    Ordenar
                </Button>
                {showSortDropdown && (
                    <DropdownMenu>
                        <DropdownItem onClick={handleSortAZ}>A - Z</DropdownItem>
                        <DropdownItem onClick={handleSortZA}>Z - A</DropdownItem>
                        <DropdownItem onClick={handleSortPopulationAsc}>
                            Población asc.
                        </DropdownItem>
                        <DropdownItem onClick={handleSortPopulationDesc}>
                            Población desc.
                        </DropdownItem>
                    </DropdownMenu>
                )}
            </Wrapper>
        </ButtonsContainer>
    );
};

export default FilterAndSorting;