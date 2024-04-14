import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCountries } from "../../redux/actions";
import {
    sortCountriesAZ,
    sortCountriesZA,
    sortCountriesByPopulationAsc,
    sortCountriesByPopulationDesc,
} from "../../utils";
import { Chip, ButtonsContainer, Button } from "./StyledHome";
import { Wrapper, DropdownMenu, DropdownItem } from "./StyledFilterAndSorting";
import { CONTINENTS } from "../../constants";

const FilterAndSorting = () => {
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const [appliedFilter, setAppliedFilter] = useState(null);
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.allCountries);
    const countries = useSelector((state) => state.countries);

    const toggleFilterDropdown = () => {
        setShowFilterDropdown(!showFilterDropdown);
    };

    const toggleSortDropdown = () => {
        setShowSortDropdown(!showSortDropdown);
    };

    const clearAppliedFilter = () => {
        dispatch(searchCountries(allCountries));
        setAppliedFilter(null);
    };

    const handleSortAZ = () => {
        sortCountriesAZ(dispatch, countries);
        setShowSortDropdown(false);
        setAppliedFilter("A - Z");
    };

    const handleSortZA = () => {
        sortCountriesZA(dispatch, countries);
        setShowSortDropdown(false);
        setAppliedFilter("Z - A");
    };

    const handleSortPopulationAsc = () => {
        sortCountriesByPopulationAsc(dispatch, countries);
        setShowSortDropdown(false);
        setAppliedFilter("Población Asc.");
    };

    const handleSortPopulationDesc = () => {
        sortCountriesByPopulationDesc(dispatch, countries);
        setShowSortDropdown(false);
        setAppliedFilter("Población Desc.");
    };

    return (
        <ButtonsContainer>
            {appliedFilter && (
                <Chip onClick={clearAppliedFilter}>{appliedFilter} &#x2715;</Chip>
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
                                onClick={() => console.log(continent.value)}
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