import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import axios from "axios";


const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (name.trim() === "") return toast.error('Name is required');
        if (email.trim() === "") {
            return toast.error('Email is required');
        } else if (!validateEmail(email)) {
            return toast.error('Invalid format email');
        }
        if (message.trim() === "") return toast.error('Please write a somthing');
        setLoading(true);
        try {
            const { data } = await axios.post(
              "http://localhost:4000/api/send/email",
              {
                name,
                email,
                message,
              },
              {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
              }
            );
            setName("");
            setEmail("");
            setMessage("");
            toast.success(data.message);
            setLoading(false);
          } catch (error) {
            console.log(error)
            setLoading(false);
            toast.error("error");
          }
    }
    return (
        <section className="contact">
            <form onSubmit={handleSubmit}>
                <h1>CONTACT US</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <input type="text" name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button type="submit"
                    disabled={loading}
                    style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15" }}>
                    {loading ? <ClipLoader size={20} color="white" /> : "Send Message"}</button>
            </form>

        </section>);
}

export default Contact;