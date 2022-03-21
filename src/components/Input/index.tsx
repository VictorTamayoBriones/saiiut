import { InputBox } from "./style"

export const Input = ({label, type, placeholder, name, value, onChange}:any) =>{
    return(
        <InputBox>
            <label htmlFor={name}>{label}</label>
            <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
        </InputBox>
    )
}