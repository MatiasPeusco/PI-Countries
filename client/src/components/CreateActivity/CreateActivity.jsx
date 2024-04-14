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
} from "./StyledCreateActivity";
import SelectInputComponent from "./SelectInputComponent";

const CreateActivity = () => {
    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState("0");
    const [duration, setDuration] = useState("");
    const [season, setSeason] = useState("");
    const [countries, setCountries] = useState([]);
    const [errors, setErrors] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: "",
    });

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

        if (season === "") {
            newErrors.season = "*Por favor selecciona la temporada";
            isValid = false;
        } else {
            newErrors.season = "";
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Aquí enviarías los datos del formulario
            console.log("Formulario válido. Enviando datos...");
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

                    <h4>Aqui va el input / select de Duración</h4>

                    <SelectInputComponent
                        id="season"
                        name="season"
                        label="Temporada"
                        value={season}
                        onChange={handleChange}
                        options={[
                            { value: "", label: "Elige una temporada:" },
                            { value: "spring", label: "Primavera" },
                            { value: "summer", label: "Verano" },
                            { value: "autumn", label: "Otoño" },
                            { value: "winter", label: "Invierno" },
                        ]}
                        error={errors.season}
                    />

                    <h4>Aqui va el input / select para seleccionar Paises</h4>

                    <Button type="submit">Crear Actividad Turística</Button>
                </FormContainer>
            </Section>
            <Footer />
        </>
    );
};

export default CreateActivity;