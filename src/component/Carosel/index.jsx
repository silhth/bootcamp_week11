import style from "./Carosel.module.scss";

import { useRef } from "react";

import { ImgCarosel } from "../ImgCarosel";


const Carosel =({arr, left, right, width, comp}) => {

    const caroselRef = useRef()
    const slideImg = (dir) => 
     {dir === 'right' ? caroselRef.current.scrollLeft += left : caroselRef.current.scrollLeft -= right;
    console.log(caroselRef.current.scrollLeft)}
    
    return (
        <div className={style.Carosel} style={{width: width}}>
            <div ref= {caroselRef}>
                {/* {arr.map((img, index)=><img src={img} key= {index} alt="photo"/>)} */}
            {comp}
            </div>
            <button onClick={() => slideImg("left")}>{'<'}</button>
            <button onClick={() => slideImg("right")}>{'>'}</button>
        </div>

    )
}

export { Carosel }