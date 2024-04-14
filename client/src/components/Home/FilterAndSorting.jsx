import { useState } from "react";
import { ButtonsContainer, Button } from "./StyledHome";
import { Wrapper, DropdownMenu, DropdownItem } from "./StyledFilterAndSorting";
import { CONTINENTS } from "../../constants";

const FilterAndSorting = () => {
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);
    const [showSortDropdown, setShowSortDropdown] = useState(false);

    const toggleFilterDropdown = () => {
        setShowFilterDropdown(!showFilterDropdown);
    };

    const toggleSortDropdown = () => {
        setShowSortDropdown(!showSortDropdown);
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
                        <DropdownItem
                            onClick={() => console.log("Ordenar alfabéticamente ascendente")}
                        >
                            A - Z
                        </DropdownItem>
                        <DropdownItem
                            onClick={() => console.log("Ordenar alfabéticamente descendente")}
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