export default function OfficerProfile({officer:{age,name,spec,status}}){
    
    return (<div>
       <p>Name: {name}</p>
       <p>Specialization: {spec}</p>
       <p>Age: {age}</p>
       <p>Status: {status == "Active" ? "isActive" : "isRetired"}</p>
        </div>
    )
}