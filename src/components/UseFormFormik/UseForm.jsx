import * as Yup from 'yup';
import styles from "./UseFormf.module.css";
import {Formik, Form, Field, ErrorMessage} from "formik";

const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });

const UserSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too short! minimal is 3 symbols!").required("complete this place!"),
    Email: Yup.string().email("should be in postal format!").required("complete this place!"),
    Role: Yup.string().oneOf(["guest", "admin", "user",]).required("this option doesnt exist"),
    Comment: Yup.string().min(3, "minimal count is 3 symbols!").max(20, "maximum 20 symbols!"),
   })

export default function UseFormFormik ({onAdd}) {
   const fieldId = useId();
   const handleSubmit = (values, actions) => {
      onAdd(values);
      console.log("SUBMIT", values);
      actions.resetForm();
   };
   return (
      <Formik initialValues = {{ username: "", Email: "", Role: "", Comment: "" }} validationSchema={UserSchema} onSubmit = {handleSubmit}>
         <Form className={styles.form}>
            <div>
      <label htmlFor={`${fieldId}-username`}>Username</label>
      <Field className={styles.input} type="text" name="username"></Field>
      <ErrorMessage className={styles.errort} name= "username" component="span" />
            </div>

               <div>
           <label htmlFor={`${fieldId}-Email`}>Email</label>
            <Field type="Email" name="Email"/>
            <ErrorMessage className={styles.errort} name="Email" component="span"/>
               </div>

            <div>
               <label htmlFor={`${fieldId}-Role`}>Role</label>
               <Field as="select" name="Role" id={`${fieldId}-Role`}>
                  <option  value="user">User</option>
                  <option  value="admin">Admin</option>
                  <option  value="guest">Guest</option>  
               </Field>
                  <ErrorMessage name= "Role" />
            </div>

            <div>
               <label htmlFor={`${fieldId}-Comment`}>Comment</label>
               <Field as="textarea" name="Comment" id={`${fieldId}-Comment`} />
               <ErrorMessage className={styles.errort} name= "Comment" component="span"/>
            </div>

      <button type = "submit">Submit</button>
         </Form>
      </Formik>
   )
};

