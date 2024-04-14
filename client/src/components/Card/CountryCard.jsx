import {
    CardContainer,
    Card,
    ImageContainer,
    TextContainer,
    Text,
    Title,
} from "./StyledCountryCard";

const CountryCard = ({ image, name, continent }) => {
    return (
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
    );
};

export default CountryCard;