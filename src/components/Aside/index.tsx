import { AsideLogin, Overlay, UttText } from "./styled";

export const Aside = () =>{

    let utt:any = []
    const createUTT = () =>{
        for (let i = 0; i < 30; i++) {
            utt.push(i)
        }
    }
    createUTT()

    return(
        <AsideLogin>
            <UttText>
                {utt.map((i:number)=><p key={i} >UTT</p>)}
            </UttText>
            <Overlay/>
        </AsideLogin>
    )
}