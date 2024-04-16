import { useState } from "react";
import Footer from "../Footer/Footer";
import GoBackComponent from "../GoBack/goback";
import Navbar from "../Navbar/Navbar";
import StyledLine from "../StyledLine";
import {
    Section,
    Title,
    Paragraph,
    FormContainer,
    InputWrapper,
    Label,
    Input,
    Button,
    ErrorMessage,
    SelectedCountriesList,
    CountrySelected,
    SuggestedCountriesList,
    SuggestedCountriesItem,
} from "./StyledCreateActivity";
import SelectInputComponent from "./SelectInputComponent";
import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../../redux/actions";

const CreateActivity = () => {
    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState("0");
    const [duration, setDuration] = useState("");
    const [season, setSeason] = useState("");
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [errors, setErrors] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: "",
    });

    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const countries = useSelector((state) => state.allCountries);
    const dispatch = useDispatch();

    const clearAllInputs = () => {
        setName("");
        setDifficulty("");
        setDuration("");
        setSeason("");
        setSelectedCountries([]);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "difficulty") {
            setDifficulty(value);
        } else if (name === "duration") {
            setDuration(value);
        } else if (name === "season") {
            setSeason(value);
        }
    };

    const handleCountryChange = (e) => {
        setInputValue(e.target.value);

        const suggestions = countries.filter(
            (country) =>
                country.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
        );
        setSuggestions(suggestions);
    };

    const handleCountrySelect = (selectedCountry) => {
        const isCountrySelected = selectedCountries.some(
            (country) => country.name === selectedCountry.name
        );

        if (!isCountrySelected)
            setSelectedCountries([...selectedCountries, selectedCountry]);

        setInputValue("");
        setSuggestions([]);
    };

    const handleCountryRemove = (countryIndex) => {
        const newSelectedCountries = [...selectedCountries];
        newSelectedCountries.splice(countryIndex, 1);
        setSelectedCountries(newSelectedCountries);
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (!name.match(/^[a-zA-Z\s]+$/)) {
            newErrors.name = "*El nombre solo puede contener letras y espacios";
            isValid = false;
        } else {
            newErrors.name = "";
        }

        if (difficulty === "0") {
            newErrors.difficulty = "*Por favor selecciona la dificultad";
            isValid = false;
        } else {
            newErrors.difficulty = "";
        }

        if (!duration.match(/^\d+(\.\d+)?$/)) {
            newErrors.duration = "*La duración debe ser un número válido";
            isValid = false;
        } else {
            newErrors.duration = "";
        }

        if (season === "") {
            newErrors.season = "*Por favor selecciona la temporada";
            isValid = false;
        } else {
            newErrors.season = "";
        }

        if (!selectedCountries.length > 0) {
            newErrors.countries = "*Por favor selecciona al menos un país";
            isValid = false;
        } else {
            newErrors.countries = "";
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const countriesIds = selectedCountries.map((country) => country.id);
            const newActivity = {
                name: name,
                difficulty: difficulty,
                duration: duration,
                season: season,
                countries: countriesIds,
            };

            dispatch(createActivity(newActivity));
            clearAllInputs();
        } else {
            console.log("Formulario inválido. Por favor, revisa los campos.");
        }
    };

    return (
        <>
            <Navbar />
            <GoBackComponent />
            <StyledLine />
            <Section>
                <Title>Formulario de Creación de Actividad Turística</Title>
                <Paragraph>
                    Completa los siguientes campos para crear una nueva actividad
                    turística:
                </Paragraph>
                <FormContainer onSubmit={handleSubmit}>
                    <InputWrapper>
                        <Label htmlFor="name">Nombre:</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Escribe el nombre de la actividad"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                    </InputWrapper>

                    <SelectInputComponent
                        id="difficulty"
                        name="difficulty"
                        label="Dificultad"
                        value={difficulty}
                        onChange={handleChange}
                        options={[
                            { value: "0", label: "Elige una dificultad:" },
                            { value: "1", label: "1" },
                            { value: "2", label: "2" },
                            { value: "3", label: "3" },
                            { value: "4", label: "4" },
                            { value: "5", label: "5" },
                        ]}
                        error={errors.difficulty}
                    />

                    <InputWrapper>
                        <Label htmlFor="duration">Duración (en horas):</Label>
                        <Input
                            type="text"
                            id="duration"
                            name="duration"
                            placeholder="Escribe la duración en horas"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                        {errors.duration && <ErrorMessage>{errors.duration}</ErrorMessage>}
                    </InputWrapper>

                    <SelectInputComponent
                        id="season"
                        name="season"
                        label="Temporada"
                        value={season}
                        onChange={handleChange}
                        options={[
                            { value: "", label: "Elige una temporada:" },
                            { value: "Spring", label: "Primavera" },
                            { value: "Summer", label: "Verano" },
                            { value: "Autumn", label: "Otoño" },
                            { value: "Winter", label: "Invierno" },
                        ]}
                        error={errors.season}
                    />

                    <InputWrapper>
                        <Label>Pais:</Label>
                        <Input
                            type="text"
                            id="country"
                            name="country"
                            placeholder="Escribe el nombre de un país"
                            value={inputValue}
                            onChange={handleCountryChange}
                        />
                        {errors.countries && (
                            <ErrorMessage>{errors.countries}</ErrorMessage>
                        )}
                    </InputWrapper>
                    <SelectedCountriesList>
                        {selectedCountries.map((country, index) => (
                            <CountrySelected
                                key={country.code}
                                onClick={() => handleCountryRemove(index)}
                            >
                                {country.name} &#x2715;
                            </CountrySelected>
                        ))}
                    </SelectedCountriesList>
                    {inputValue.length > 0 && suggestions.length > 0 && (
                        <SuggestedCountriesList>
                            {suggestions.map((country) => (
                                <SuggestedCountriesItem
                                    key={country.name}
                                    onClick={() => handleCountrySelect(country)}
                                >
                                    {country.name}
                                </SuggestedCountriesItem>
                            ))}
                        </SuggestedCountriesList>
                    )}

                    <Button type="submit">Crear Actividad Turística</Button>
                </FormContainer>
            </Section>
            <Footer />
        </>
    );
};

export default CreateActivity;