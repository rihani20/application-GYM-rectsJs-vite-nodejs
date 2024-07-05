import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
    const pricings = [
        {
            imgUrl: "/images/pricing.jpg",
            title: "QUARTERLY",
            price: 18000,
            length: 3
        },
        {
            imgUrl: "/images/pricing.jpg",
            title: "HEAL_YEARL",
            price: 34000,
            length: 6
        },
        {
            imgUrl: "/images/pricing.jpg",
            title: "YEARLY",
            price: 67000,
            length: 12
        },
    ];
    return (
        <section className="pricing">
            <h1>JET CLUB FITNESS PLANS</h1>
            <div className="wrapper">
                {pricings.map((pricing) => {
                    return (
                        <div className="card" key={pricing.title}>
                            <img src={pricing.imgUrl} alt={pricing.title} />
                            <div className="title">
                                <h1>{pricing.title}</h1>
                                <h1>PACKAGE</h1>
                                <h3>Rs {pricing.price}</h3>
                                <p>For {pricing.length} Months</p>
                            </div>
                            <div className="description">
                                <p><Check/> Equipment</p>
                                <p><Check/> All Day Free Training</p>
                                <p><Check/> Free Restroom</p>
                                <p><Check/> 24/7 Skilled Support</p>
                                <p><Check/> 20 Days Freezing Option</p>
                                <Link to="/" >Join Now</Link>
                            </div>
                        </div>
                    )
                })}
            </div>


        </section>
    );
}

export default Pricing;