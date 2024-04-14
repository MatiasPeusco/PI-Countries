import { useNavigate } from "react-router-dom";
import { Wrapper, GoBack, ArrowIcon } from "./StyledGoBack";
import arrow from "../../assets/images/arrow-back.svg";

const GoBackComponent = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <GoBack onClick={() => navigate(-1)}>
                <ArrowIcon src={arrow} />
                Volver
            </GoBack>
        </Wrapper>
    );
};

export default GoBackComponent;