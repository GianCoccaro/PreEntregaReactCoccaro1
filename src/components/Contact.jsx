import { useForm } from "react-hook-form";
import '../App.css';

const Contact = () => {

    const { register, handleSubmit } = useForm();

    const send = (data) => {
        console.log(data);
    }

  return (

    <div className="contact-container">
        <h1 className="main-title">Contact</h1>
        <form className="form" onSubmit={handleSubmit(send)}>

            <input type="text" placeholder="Enter your name" {...register("name")} />
            <input type="email" placeholder="Enter your email" {...register("email")} />
            <input type="phone" placeholder="Enter your cellphone" {...register("cellphone")} />

            <button className="send" type="submit">SEND</button>

        </form>
    </div>

  )
}

export default Contact;