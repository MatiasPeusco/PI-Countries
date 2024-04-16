import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    filterCountriesByContinent,
    resetCountriesList,
    sortByPopulationAsc,
    sortByPopulationDesc,
    sortCountriesZA,
} from "../../redux/actions";
import { Chip, ButtonsContainer, Button } from "./StyledHome";
import { Wrapper, DropdownMenu, DropdownItem } from "./StyledFilterAndSorting";
import { CONTINENTS } from "../../constants";

const FilterAndSorting = () => {
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const [appliedFilter, setAppliedFilter] = useState(null);
    const [appliedSorting, setAppliedSorting] = useState(null);
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.allCountries);

    const toggleFilterDropdown = () => {
        setShowFilterDropdown(!showFilterDropdown);
    };

    const toggleSortDropdown = () => {
        setShowSortDropdown(!showSortDropdown);
    };

    const clearAppliedFilter = () => {
        dispatch(resetCountriesList(allCountries));
        setAppliedFilter(null);
    };

    const clearAppliedSorting = () => {
        dispatch(resetCountriesList(allCountries));
        setAppliedSorting(null);
    };

    const handleContinentFilter = (continent) => {
        dispatch(filterCountriesByContinent(continent));
        setShowFilterDropdown(false);
        setAppliedFilter(`${continent}`);
    };

    const handleSortAZ = () => {
        dispatch(resetCountriesList(allCountries));
        setShowSortDropdown(false);
        setAppliedSorting("A - Z");
    };

    const handleSortZA = () => {
        dispatch(sortCountriesZA());
        setShowSortDropdown(false);
        setAppliedSorting("Z - A");
    };

    const handleSortPopulationAsc = () => {
        dispatch(sortByPopulationAsc());
        setShowSortDropdown(false);
        setAppliedSorting("Población Asc.");
    };

    const handleSortPopulationDesc = () => {
        dispatch(sortByPopulationDesc());
        setShowSortDropdown(false);
        setAppliedSorting("Población Desc.");
    };

    return (
        <ButtonsContainer>
            {appliedFilter && (
                <Chip onClick={clearAppliedFilter}>{appliedFilter} &#x2715;</Chip>
            )}
            {appliedSorting && (
                <Chip onClick={clearAppliedSorting}>{appliedSorting} &#x2715;</Chip>
            )}
            <Wrapper>
                <Button type="button" onClick={() => toggleFilterDropdown()}>
                    Filtrar
                </Button>
                {showFilterDropdown && (
                    <DropdownMenu>
                        {CONTINENTS.map((continent, index) => (
                            <DropdownItem
                                key={index}
                                onClick={() => handleContinentFilter(continent.value)}
                            >
                                {continent.name}
                            </DropdownItem>
                        ))}
                        <DropdownItem
                            onClick={() =>
                                console.log("Filtrar por tipo de actividad turística")
                            }
                        >
                            Filtrar por tipo de actividad turística
                        </DropdownItem>
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