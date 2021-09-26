import  throttle  from "lodash/throttle";
import { useEffect, useState } from "react";

const time = 500; // 스크롤 이벤트에 텀을 줘서 성능저하를 방지

const useInnerHeight = ( ) => {
    const [innerHeight, setinnerHeight] = useState<number>(0)

    useEffect(() => {
        //최초 innerheight 확인
        setinnerHeight(window.innerHeight)
    }, [])

    useEffect(() => {
        const resizeListener = throttle(() => {
            setinnerHeight(window.innerHeight)
        }, time) 
        window.addEventListener("resize", resizeListener)
        return () => {
          window.removeEventListener("resize", resizeListener)
        }
    }, [])
    return innerHeight
}

export default useInnerHeight