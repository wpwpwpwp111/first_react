import clsx from "clsx";
import css from './OfficerProfile.module.css'
export default function OfficerProfile({officer:{age,name,spec,status}})  
  {
  
   const containerClass = clsx(css.container, status === "Active" ? css.active : css.retired);

    return (<div className={containerClass}>
       <p>Name: {name}</p>
       <p>Specialization: {spec}</p>
       <p>Age: {age}</p>
        <p>
       <b>Status: {status == "Active" ? "is Active" : "is Retired"}</b>
       </p>
        </div>
    );
};