import React from 'react';
import { animated } from 'react-spring';

function CardInfo(props) {

    //const style = useSpring({ opacity: 1, from: {opacity : 0}});

    return (
        <animated.div className=" d-flex justify-content-center flex-column j-card-info text-wrap" >
           
            <p className="j-card-title">{props.title}</p>
            <p className="j-card-sub-title">{props.subTitle}</p>
            <p className="j-card-sub-title">{props.subTitle2}</p>
            <p className="j-card-about">{props.stack}</p>
            <p className="j-card-about text-break ">{props.about1}</p>
            <a className="" href={props.link} target="_blank" rel="noopener noreferrer"><h5 className="link-color">Play Store</h5></a>
        </animated.div>
        
    );

}

export default CardInfo;







