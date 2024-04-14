import { Details, Item, DetailItem } from "./StyledCountryDetail";

const DetailInfo = ({ itemName, detail }) => {
    return (
        <Details>
            <Item>{itemName}</Item>
            <DetailItem>{detail}</DetailItem>
        </Details>
    );
};

export default DetailInfo;