import React, {useState } from 'react';
import countries from '../Countries';
import List from './Layout';
import City from './Layout';
import CityClicked from './CityClicked';
import keys from '../CountriesKey';

function Cityy(props){

    const [isClicked, setClick] = useState(false);
    const [chooseCity, chosenCity] = useState('Choose city');

    function City(props){
        return(
            <li onClick={cityClicked}>{props.cityName}</li>
        )
    }

    function cityClicked(event){
        setClick(false);
        chosenCity(event.target.textContent);
        props.cityChosenn(event.target.textContent);
    }

    function handleClick(){
        setClick(true); 
    }
    
    function createList(city){
        return <City 
        key={countries.id}
        cityName={city} />
    }

    let x = '';
 
    switch (props.countryyName){
        case "Angola":
             x = countries[0];
            break;
        case 'Brasil':
             x = countries[1];
            break;
        case 'Cabo Verde':
             x = countries[2];
            break;
        case 'Guiné Bissau':
             x = countries[3];
            break;
        case 'Macau':
             x = countries[4];
            break;
        case 'Moçambique':
             x = countries[5];
            break;
        case 'Portugal':
             x = countries[6];
        break;
        case 'São Tomé e Príncipe':
             x = countries[7];
            break;
        case 'Timor Leste':
             x = countries[8];
            break;
    }

    return  (
    <div className="city">
        <button type="button" className="clickCity" onClick={handleClick}>{chooseCity}</button>  
            <div className="chooseCity" style={{display: isClicked ? "block" : "none"}}>
            <ul>
                {x.states.map(createList)}
            </ul>
            </div>
    </div>
    )
}

export default Cityy;