import React from 'react';

import karbiCalendar from '../assets/images/karbi-calendar.png';
import karbiCalendarLeft from '../assets/images/calendarLeft.png';
import karbiCalendarRight from '../assets/images/calendarRight.png';
import ttjcparticipants from '../assets/images/ttjcparticipants.png';
import ttjcparticipantsLeft from '../assets/images/participantLeft.png';
import ttjcparticipantsRight from '../assets/images/participantRight.png';
import Card from './Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class Carousel extends React.Component{

    constructor(props){
    super(props);
    this.state={
        items: [
            {
                id: 0,
                title: 'Karbi Calendar',
                subTitle: 'A simple calendar in karbi language',
                stack : 'Stack : Android Studio, java',
                featureTitle : 'Features : ',
                features : '1. Reminder 2. Notes with SQLite database 3. Notes',
                about1 : 'It is a simple calendar in karbi language with some features as '
                + 'reminder, notes with sqlite database, mini notes in date,'+
                'version check with httpRequest using AsyncTask',
                imgSrc: karbiCalendar,
                imgSrcLeft: karbiCalendarLeft,
                imgSrcRight: karbiCalendarRight,
                link: 'https://play.google.com/store/apps/details?id=com.jangphong.hem.karbicalender2&hl=en_IN',
                linkcolor:'primary',
                selected: false
            },
            {
                id: 1,
                title: 'TTJC Participants App',
                subTitle: 'An application for - ',
                subTitle2: 'TeamTanayJobChallenge related participants',
                stack : 'Stack : Android Studio, java',
                featuresTitle : 'Features',
                features : '1. Using api to fetch participants list',
                about1 : 'It displays the total number of participants '+
                'in the challenge, all the participants are '+
                'displayed in a list and it can be filtered '+
                'with respect to the selected skills. It '+
                ' uses firebase as a database. Project'+
                'planner is also available to keep track '+
                'of the overall and current project progress.',
                imgSrc: ttjcparticipants,
                imgSrcLeft: ttjcparticipantsLeft,
                imgSrcRight: ttjcparticipantsRight,
                link: 'https://play.google.com/store/apps/details?id=com.job.challenge.ttjcParticipantsApp',
                linkcolor:'primary',
                selected: false
            },
           
        ]
    }    
    }



    handleCardClick = (id) => {
        //Spread operator is used here for getting dynamic array
        let items = [...this.state.items];
        
        //This line of code is for toggling true and false for each click
        items[id].selected = items[id].selected ? false : true;
        
        //for looping through each item on each click to make sure only one item from the list is true for the is selected state.
        items.forEach(item => {

            if(item.id !== id){
                item.selected = false;
            }

        });

        this.setState({
            items
        });
    
    
    }

    makeItems = (items) => {
        return items.map((item, id)=> {
            return  <Card  key={id}  item={item} click={((e)=> this.handleCardClick(item.id, e)) } />
            
        });
        
    }



    render(){
        return(
            <Container fluid={true}>
                    <Row className="justify-content-center">
                        {this.makeItems(this.state.items)}
                    </Row>
            </Container>
        );
    }
}

export default Carousel;