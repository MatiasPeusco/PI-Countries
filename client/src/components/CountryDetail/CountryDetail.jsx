import GoBackComponent from "../GoBack/goback";
import Navbar from "../Navbar/Navbar";
import DetailInfo from "./DetailInfo";
import { formatPopulation, formatArea } from "../../utils";
import {
    Section,
    DetailsContainer,
    ID,
    Name,
    DetailsWrapper,
    ImageContainer,
    Image,
    ActivitiesContainer,
    ActivitiesWrapper,
} from "./StyledCountryDetail";
import StyledLine from "../StyledLine";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CountryDetail = () => {
    const { id } = useParams();
    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3001/countries/${id}`
                );
                setCountryData(response.data);
            } catch (error) {
                console.error("Error al realizar la solicitud:", error);
            }
        };

        fetchCountryData();
    }, [id]);

    return (
        <>
            <Navbar />
            <GoBackComponent />
            <StyledLine />
            <Section>
                <DetailsContainer>
                    <div>
                        <ID>{countryData?.id}</ID>
                        <Name>{countryData?.name}</Name>
                    </div>
                    <DetailsWrapper>
                        <DetailInfo
                            itemName={"Continente:"}
                            detail={countryData?.continent}
                        />
                        <DetailInfo itemName={"Capital:"} detail={countryData?.capital} />
                        {countryData?.subregion && (
                            <DetailInfo
                                itemName={"Subregión:"}
                                detail={countryData?.subregion}
                            />
                        )}
                        {countryData?.area && (
                            <DetailInfo
                                itemName={"Área:"}
                                detail={formatArea(countryData?.area)}
                            />
                        )}
                        <DetailInfo
                            itemName={"Población:"}
                            detail={formatPopulation(countryData?.population)}
                        />
                    </DetailsWrapper>
                </DetailsContainer>
                <ImageContainer>
                    <Image src={countryData?.flagImage} />
                </ImageContainer>
            </Section>
            {countryData?.Activities.length > 0 && (
                <Section style={{ flexDirection: "column" }}>
                    <h3>Actividades disponibles:</h3>
                    <ActivitiesContainer>
                        {countryData.Activities.map((activity) => (
                            <ActivitiesWrapper key={activity.id}>
                                <h4>{activity.name}</h4>
                                <DetailInfo
                                    itemName={"Dificultad:"}
                                    detail={activity.difficulty}
                                />
                                <DetailInfo itemName={"Duración:"} detail={activity.duration} />
                                <DetailInfo itemName={"Temporada:"} detail={activity.season} />
                            </ActivitiesWrapper>
                        ))}
                    </ActivitiesContainer>
                </Section>
            )}
            <Footer />
        </>
    );
};

export default CountryDetail;