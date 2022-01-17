
import style from "./TextCarosel.module.scss";
const TextCarosel = ({text}) => {

    return(
            <p className={style.TextCarosel}>{text}</p>
    )
}

export {TextCarosel}