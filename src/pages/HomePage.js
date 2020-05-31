import React from 'react';
import Hero from '../components/Hero';
import android from '../assets/images/android.png';
import reacticon from '../assets/images/react.png';


function Homepage(props){



    return(
        <div className=" homepage-container "  id={props.id}>
           
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} color=""/>
            
            <img className="icon mr-3" src={android} alt={android}/>
            <img className="icon ml-2" src={reacticon} alt={reacticon}/>
          
        </div>
    );
}

export default Homepage;