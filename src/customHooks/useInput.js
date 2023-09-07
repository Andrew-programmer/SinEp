import {useState} from "react";

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const changeValue = (e) => {
        const value = typeof(e) !== "string" ? e.target.value: e;
        setValue(value);
    }

    return [value, changeValue];
}
