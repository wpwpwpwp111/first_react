import {useId} from 'react';
//import css from './UseForm.modules.css'
export default function UserForm({onAdd}) {

    const userNameId = useId();
        const RoleId = useId();

    const handleSubmit = (event) => {
        event.preventDefault()

        onAdd({
            username: event.target.elements.username.value,
            role: event.target.elements.role.value,
        });
        

        event.target.reset()
    };

    return(
          <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor = {userNameId}>Username</label>
                <input type="text" name="username" id={userNameId}/>
            </div>
        

            <div>
                <label htmlFor = {RoleId}>Role</label>
                <select id={RoleId} name = "role">
                    <option value = "guest">Guest</option>
                    <option value = "user">User</option>
                    <option value = "admin">Admin</option>
                </select>
            </div>
            <button type = "submit">Submit</button>
          </form>
    );

}