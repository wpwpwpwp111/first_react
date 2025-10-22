import {useState} from 'react';
import { HiThumbUp } from "react-icons/hi";
import { FaBeer } from 'react-icons/fa';
import OfficerProfile from "../OfficerProfile/OfficerProfile.jsx";
import css from './App.module.css';
import Reader from '../Reader/Reader.jsx';
import clsx from 'clsx';
import articles from '../../articles.json';
import Timer from '../../Timer/timer.jsx';
//import ClickTracker from '../ClickTracker/ClickTracker.jsx';
import UseForm from '../UseForm/UseForm.jsx'



//useEffect = (() => {
// console.log("congratulations", clicks);
 //}, [clicks]);


const ClickCounter = ({ value, onCount }) => {

    return <button onClick={onCount}>click me:{value}</button>

};

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
    const [values, setValues]=useState({a: 1, b: 2, c: 3, d: 4,});
    
    const handleClick = () => {
        setClicks(clicks + 1);
};

    const handleReset = () => {
        setClicks(0);
    };

    const handleChangeValue = () => {
        setValues({...values, b: 7,});
    }

    const total = values.a + values.b + values.c + values.d;


    const message=(2+2+2)

    const AddNewUser = (newUser) => {
        console.log(newUser);
    };

    return (
    <div>

     <UseForm onAdd={AddNewUser}/>

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
        
       
        <ClickCounter value={clicks} onCount = {handleClick}/>
        <ClickCounter value={clicks} onCount = {handleClick}/>
        <ClickCounter value={clicks} onCount = {handleClick}/> 
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleChangeValue}>ChangeValue:{total}</button>

        <Reader articles = {articles}/>

        <p>141551617687871661218287126212689732782739237823</p>
        <input type="text"/>
        <h2>Available Officers</h2> 

        <FaBeer className={css.icon}/>
        {isModalOpen && <p>"Is Open"</p>}
        <p>{isModalOpen ? "Is Open" : "Closed"}</p>
        <OfficerProfile officer={firstOfficer} />
        <OfficerProfile officer={secondOfficer}/>
        <HiThumbUp className={css.icon2} />
        <ul>
       {[1,2,7,10].map((value) => {
       return  <li key={value}></li>;
})}
        </ul>
    </div>
    );
};

export default App;

// edf+tab snipet 