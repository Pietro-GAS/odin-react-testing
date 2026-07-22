import { useState } from "react";

export const Input = (props) => {
    const { handleChange, inputValue } = props;
    return <input onChange={handleChange} value={inputValue} />;
};

export const CustomInput = () => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return(
        <>
            <Input handleChange={handleChange} inputValue={inputValue} />
        </>
    );
};