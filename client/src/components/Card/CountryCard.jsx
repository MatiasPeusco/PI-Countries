import {
    CardContainer,
    Card,
    ImageContainer,
    TextContainer,
    Text,
    Title,
} from "./StyledCountryCard";
import { Link } from "react-router-dom";

const CountryCard = ({ id, image, name, continent }) => {
    return (
        <Link to={`/countries/${id}`} style={{ textDecoration: 'none' }}>
            <CardContainer>
                <Card>
                    <ImageContainer>
                        <img src={image} alt="" width={250} height={150} />
                    </ImageContainer>
                    <TextContainer>
                        <Text>{continent}</Text>
                        <Title>{name}</Title>
                    </TextContainer>
                </Card>
            </CardContainer>
        </Link>
    );
};

export default CountryCard;