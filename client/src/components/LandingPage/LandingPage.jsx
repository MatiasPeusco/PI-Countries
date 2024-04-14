import { Link } from "react-router-dom";
import background from "../../assets/countries.png";
import {
    Container,
    BackgroundImage,
    TextContainer,
    Title,
    Paragraph,
    Button,
} from "./StyledLandingPage";

const LandingPage = () => {
    return (
        <Container>
            <TextContainer>
                <Title>¡Bienvenido a la plataforma de búsqueda de países!</Title>
                <Paragraph>
                    Explora el mundo y descubre las fascinantes características de cada
                    nación.
                </Paragraph>
                <Paragraph>
                    ¿Listo para comenzar tu viaje? ¡Haz clic en el botón de abajo para
                    sumergirte en esta emocionante aventura!
                </Paragraph>
                <Link to="/home">
                    <Button>Comenzar</Button>
                </Link>
            </TextContainer>
            <BackgroundImage img={background} />
        </Container>
    );
};

export default LandingPage;