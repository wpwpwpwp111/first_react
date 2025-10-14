import OfficerProfile from "./OfficerProfile.jsx"
import css from './App.module.css'
const firstOfficer = {name:"Jacob Mercer", spec:"Fighter Pilot", age:"42", satus:"Retired"};

const secondOfficer = {name:"Adrian Ross", spec:"Reconnaissance", age:"35", status:"Active"};

 const isModalOpen = false

function App() {
    const message=(2+2+2)
    return (
    <div>
        <h1>hello bro {message}</h1>
        <button>Click me!</button>
        <p>141551617687871661218287126212689732782739237823</p>
        <input type="texty"/>
        <h2>Available Officers</h2>
        {isModalOpen && <p>"Is Open"</p>}
        <p>{isModalOpen ? "Is Open" : "Closed"}</p>
        <OfficerProfile officer={firstOfficer} />
        <OfficerProfile officer={secondOfficer}/>
        <ul>
       {[1,2,7,10].map((value) => {
       return  <li>{value}</li>;
})}
        </ul>
    </div>
    );
};

export default App;