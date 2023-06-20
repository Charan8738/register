import './App.css';
import FormInput from './components/FormInput';
import { useState } from 'react';
function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "", 
    confirmPassword: "",
    required: true,
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter the username",
      label: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special characters!",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter the email",
      label: "Email",
      errorMessage: "Please enter a valid email!",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Enter the password",
      label: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 number, 1 letter and 1 special character!",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Password and Confirm Password does not match!",
      required: true,
      pattern: values.password,
    },
  ]
  const handleSubmit = (e) => {
    e.preventDefault();
    // const data=new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()));
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="subtitles">
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
