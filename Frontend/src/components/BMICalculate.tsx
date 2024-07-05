import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const BMICalculate = () => {
    const [height, setHeight] = useState<number | string>("");
    const [weight, setWeight] = useState<number | string>("");
    const [gender, setGender] = useState<string>("");
    const [bmi, setBmi] = useState<number | null>(null);

    const calculateBMI = (e: FormEvent) => {
        e.preventDefault();

        if (!height || !weight || !gender) {
            toast.error("Please enter valid height, weight and gender.");
            return;
        }

        const heightInMeters = parseFloat(height as string) / 100;
        const bmiValue = (parseFloat(weight as string) / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(parseFloat(bmiValue));

        if (parseFloat(bmiValue) < 18.5) {
            toast.warning("You are underweight. Consider seeking advice from a healthcare provider.");
        } else if (parseFloat(bmiValue) >= 18.5 && parseFloat(bmiValue) < 24.9) {
            toast.success("You have a normal weight. Keep maintaining a healthy lifestyle.");
        } else if (parseFloat(bmiValue) >= 25 && parseFloat(bmiValue) < 29.9) {
            toast.warning("You are overweight. Consider seeking advice from a healthcare provider.");
        } else {
            toast.error("You are in the obese range. It is recommended to seek advice from a healthcare specialist.");
        }

    }
    return (
        <section className="bmi">
            <h1>BMI CALCULATOR</h1>
            <div className="container">
                <div className="wrapper">
                    <form onSubmit={calculateBMI}>
                        <div>
                            <label>Height (cm)</label>
                            <input
                                type="number"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Weight (kg)</label>
                            <input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Gender</label>
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <button type="submit">Calculate BMI</button>
                    </form>
                </div>
                <div className="wrapper">
                    <img src="/images/bmi.jpg" alt="bmiImage" />
                </div>
            </div>
        </section>
    );
}

export default BMICalculate;