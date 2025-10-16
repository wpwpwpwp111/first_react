import {useState} from 'react';
import { HiThumbUp } from "react-icons/hi";
import { FaBeer } from 'react-icons/fa';
import OfficerProfile from "./OfficerProfile/OfficerProfile.jsx";
import css from './App.module.css';
import clsx from 'clsx'

const firstOfficer = {name:"Jacob Mercer", spec:"Fighter Pilot", age:"42", satus:"Retired"};

const secondOfficer = {name:"Adrian Ross", spec:"Reconnaissance", age:"35", status:"Active"};

const ProfileSection = ({title, children}) => {
    return (
        <section>
        <h2>{title}</h2>
        {children}
        </section>
    )
}

 const isModalOpen = false

function App() {

    const [clicks, setClicks]=useState(0);

    const handleClick = () =>{

        setClicks(clicks + 1);

        console.log(clicks);
    }

    const message=(2+2+2)
    return (
    <div>
        <ProfileSection title="Rating">
            <div>component of user</div>
        </ProfileSection>

        <ProfileSection title="what is a point of expirience?">
            <p>component list of points</p>
        </ProfileSection>

        <ProfileSection title="how can i get more??">
            <span>component of list of expirience</span>
        </ProfileSection>
        <h1>hello bro {message}</h1>
        
        <button onClick={handleClick}>Click me:{clicks}</button>

        <p>141551617687871661218287126212689732782739237823</p>
        <input type="texty"/>
        <h2>Available Officers</h2> 

        <FaBeer className={css.icon}/>
        {isModalOpen && <p>"Is Open"</p>}
        <p>{isModalOpen ? "Is Open" : "Closed"}</p>
        <OfficerProfile officer={firstOfficer} />
        <OfficerProfile officer={secondOfficer}/>
        <HiThumbUp className={css.icon2} />
        <ul>
       {[1,2,7,10].map((value) => {
       return  <li>{value}</li>;
})}
        </ul>
    </div>
    );
};

export default App;