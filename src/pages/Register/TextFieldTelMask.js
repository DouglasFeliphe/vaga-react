import React from "react";
import MaskedInput from "react-text-mask";

export const TextFieldInput = ({ inputRef, ...other }) => {

    return (
        <MaskedInput
            style={{ borderWidth: 22}}
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholder="Telefone"
        />
    );

}
