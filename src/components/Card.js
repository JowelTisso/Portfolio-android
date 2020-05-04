import React from 'react';
import CardInfo from './CardInfo';

function Card(props) {

    return (
        <div className=" justify-content-center j-card row mr-0  "  onClick={(e)=> props.click(props.item)}>
           
             <div className="j-card-img pt-0   ">



                <img className="j-card-image-left" src={props.item.imgSrcLeft} alt={props.item.imgSrcLeft} />
                <img className="j-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
                <img className="j-card-image-right" src={props.item.imgSrcRight} alt={props.item.imgSrcRight} />


            </div>
         
           
            
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