import About from "./LandingPage/About";
import DeliveryInstruction from "./LandingPage/DeliveryInstruction";
import Hero from "./LandingPage/Hero";
import Popular from "./LandingPage/Popular";
import Menu from "./LandingPage/Menu";
import Testimonial from "./LandingPage/Testimonial";
import Newsletter from "./LandingPage/Newsletter";

const LandingPage = () => {
	return (
		<div>
			<Hero />
			<Popular />
			<DeliveryInstruction />
			<About />
			<Menu />
			<Testimonial />
			<Newsletter />
		</div>
	);
};

export default LandingPage;
