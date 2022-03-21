import { Aside } from "../../components/Aside"
import { Input } from "../../components/Input"
import { useLogin } from "../../hooks/useLogin"
import { Button } from "../../styled-components/Button"
import { MainTitle } from "../../styled-components/MainTitle"
import { LoginForm, LoginPage } from "./style"

export const Login = () =>{
    const { user, pass, handleChange, handleSubmit } = useLogin();
    return(
        <LoginPage>
            <Aside/>
            <LoginForm onSubmit={ handleSubmit }>
                <MainTitle>SAIIUT</MainTitle>
                <Input label="Usuario" type="text" placeholder="Ejemplo: 20192itir007" name="user" value={ user } onChange={ handleChange } />
                <Input label="Contraseña" type="password" placeholder="contraseña" name="pass" value={ pass } onChange={ handleChange } />
                <Button>Ingresar</Button>
            </LoginForm>
        </LoginPage>
    )
}