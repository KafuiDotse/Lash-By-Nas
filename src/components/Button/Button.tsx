import './Button.css'

interface Prop{
    children:string;
}

function Button(prop:Prop){
    return(
        <>
        <button className='btn'>{prop.children}</button>
        </>
    )
}
export default Button;