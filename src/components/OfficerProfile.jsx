import css from './OfficerProfile.module.css'
export default function OfficerProfile({officer:{age,name,spec,status}})  
  {
   const textClassnames = [css.text];

   if(status === "Active"){
   textClassnames.push(css.active);
   } else {
    textClassnames.push(css.retired);
   }

   console.log(textClassnames.join(" "));

    return (<div className={css.container}>
       <p>Name: {name}</p>
       <p>Specialization: {spec}</p>
       <p>Age: {age}</p>
       <p className={textClassnames.join(" ")}>
       <b>Status: {status == "Active" ? "is Active" : "is Retired"}</b>
       </p>
        </div>
    );
};