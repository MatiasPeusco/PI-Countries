import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortCountriesAZ } from "../../utils";
import { ButtonsContainer, Button } from "./StyledHome";
import { Wrapper, DropdownMenu, DropdownItem } from "./StyledFilterAndSorting";
import { CONTINENTS } from "../../constants";

const FilterAndSorting = () => {

    const [showFilterDropdown, setShowFilterDropdown] = useState(false);
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);

    const toggleFilterDropdown = () => {
        setShowFilterDropdown(!showFilterDropdown);
    };
    const toggleSortDropdown = () => {
        setShowSortDropdown(!showSortDropdown);
    };

    const handleSortAZ = () => {
        sortCountriesAZ(dispatch, countries);
    };

    return (
        <ButtonsContainer>
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
                        <DropdownItem
                            onClick={() => console.log("Ordenar alfabéticamente ascendente")}
                        >
                            Z - A
                        </DropdownItem>
                        <DropdownItem
                            onClick={() =>
                                console.log("Ordenar por cantidad de población ascendente")
                            }
                        >
                            Población asc.
                        </DropdownItem>
                        <DropdownItem
                            onClick={() =>
                                console.log("Ordenar por cantidad de población descendente")
                            }
                        >
                            Población desc.
                        </DropdownItem>
                    </DropdownMenu>
                )}
            </Wrapper>
        </ButtonsContainer>
    );
};

export default FilterAndSorting;