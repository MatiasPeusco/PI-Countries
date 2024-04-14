import {
    InputWrapper,
    Select,
    Label,
    ErrorMessage,
} from "./StyledCreateActivity";

const SelectInputComponent = ({
    id,
    name,
    label,
    value,
    onChange,
    options,
    error,
}) => {
    return (
        <InputWrapper>
            <Label htmlFor={name}>{label}:</Label>
            <Select id={id} name={name} value={value} onChange={onChange} required>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Select>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputWrapper>
    );
};

export default SelectInputComponent;