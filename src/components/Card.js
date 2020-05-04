import React, {useState} from 'react';
import { useSpring, animated as a } from 'react-spring'
import CardInfo from './CardInfo';

function Card(props) {

    
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    const [flipped1, set1] = useState(false)
    const { transform1, opacity1 } = useSpring({
        opacity1: flipped1 ? 1 : 0,
        transform1: `perspective(600px) rotateX(${flipped1 ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    const [flipped2, set2] = useState(false)
    const { transform2, opacity2 } = useSpring({
        opacity2: flipped2 ? 1 : 0,
        transform2: `perspective(600px) rotateX(${flipped2 ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })

    return (
        <div className=" justify-content-center j-card row mr-0  "  onClick={(e)=> props.click(props.item)}>
           
             <div className="j-card-img pt-0   ">

{/*                 
                <div className=" j-card-image-left " onClick={() => set(state => !state)}  >
                    <a.img className=" j-card-image-left "  src={props.item.imgSrcLeft} alt={props.item.imgSrcLeft}
                    style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
                    <a.img
                        className=" j-card-image-left" 
                        style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
                </div>

                <div className="j-card-image " onClick={() => set1(state => !state)}>
                    <a.img className=" j-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}
                    style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
                    <a.img
                        className=" j-card-image" 
                        style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
                </div>

                 <div className="j-card-image-right " onClick={() => set2(state => !state)}>
                    <a.img className=" j-card-image-right " src={props.item.imgSrcRight} alt={props.item.imgSrcRight}
                    style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
                    <a.img
                        className=" j-card-image-right" 
                        style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
                </div> */}

                <img className="j-card-image-left" src={props.item.imgSrcLeft} alt={props.item.imgSrcLeft} />
                <img className="j-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
                <img className="j-card-image-right" src={props.item.imgSrcRight} alt={props.item.imgSrcRight} />


            </div>
            {/* {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>} */}
           
            
            <CardInfo 
            title={props.item.title} 
            subTitle={props.item.subTitle} 
            subTitle2={props.item.subTitle2} 
            stack={props.item.stack}
            about1={props.item.about1}
            link={props.item.link}
            linkcolor={props.item.linkcolor}
            />
        
        </div>
    );
}

export default Card;