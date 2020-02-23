import React from "react";
import logo from "./logo.svg";
import "./App.css";
import bytemonk_logo from "./images/bytemonk_logo.png";
import bm_carousel_01 from "./images/bm_carousel_01.jpg";
import bm_carousel_02 from "./images/bm_carousel_02.jpg";
import bm_carousel_03 from "./images/bm_carousel_03.jpg";
import bm_carousel_04 from "./images/bm_carousel_04.jpg";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
			<div style={styles.headerLayout}>
				<img src={bytemonk_logo} style={{ height: "24px", paddingLeft: "8px" }} />
				<div style={{ display: "flex", flexDirection: "row", paddingRight: "4px" }}>
					<a href="" style={styles.headerButton}>FREE TRIALS</a>
					|
					<a href="" style={styles.headerButton}>GET PRICING</a>
					|
					<a href="" style={styles.headerButton}>CONTACT US</a>
				</div>
			</div>

			<div style={styles.navLayout}>
				<a href="" style={styles.navButton}>HOME</a>
				<a href="" style={styles.navButton}>CHALLENGES</a>
				<a href="" style={styles.navButton}>SOLUTIONS</a>
				<a href="" style={styles.navButton}>ABOUT US</a>
			</div>

			<div style={{ marginTop: "64px" }}>
				<Carousel interval={300000} controls={false}>
					{getCarouselItem(0, "black", "PROVIDING LASER-FOCUSSED DATA SECURITY", "Bytemonk provides laser-focussed security, regulatory compliance, and practical solutions tailored to your organization's needs - all from a partner you can trust", bm_carousel_01)}
					{getCarouselItem(1, "#26272C", "ADDRESSING THE DATA SECURITY THREATS SUAVELY", "Bytemonk addresses the threate vectors originating from inside the organization by stopping critical data from leaving your organization and helps identify both malicious & negligent users.", bm_carousel_02)}
					{getCarouselItem(2, "#181F27", "REDUCING ATTACK SURFACE USING AI", "Bytemonk specializes in reducing attack surface by leveraging Machine Learning and AI capabilities that allow computers to learn from examples instead of predefined rules", bm_carousel_03)}
					{getCarouselItem(3, "#222524", "STAYING AHEAD IN THE CYBER SECURITY GAME", "Our offerings help align with emerging security needs while keeping the business data completely safe by improving visibility into data loss risk and delivering tangible risk reduction", bm_carousel_04)}
				</Carousel>
			</div>

    </div>
  );
	
	function getCarouselItem(key, backgroundColor, heading, body, carouselImage) {
		return (
			<Carousel.Item key={key}>
				<div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", height: "800px", backgroundColor: backgroundColor }}>
					<div style={styles.carouselTextLayout}>
						<div style={styles.carouselTextHeading}>{heading}</div>	
						<div style={styles.carouselTextBody}>{body}</div>
						<Button style={{ marginTop: "8px", backgroundColor: "#38ACEC" }}>GET A DEMO</Button>
					</div>
					<Image src={carouselImage} style={{ width: "60%" }}/>
				</div>
			</Carousel.Item>);
	}
}

const styles = {
	headerLayout: { position: "fixed", paddingTop: "4px", paddingBottom: "4px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: "32px", width: "100%", backgroundColor: "#F2F2F2", zIndex: "1" },
	headerButton: { paddingLeft: "4px", paddingRight: "4px", textDecoration: "none" },
	navButton: { paddingLeft: "8px", paddingRight: "8px", textDecoration: "none", color: "white" },
	navLayout: { position: "fixed", top: "32px", paddingTop: "4px", paddingBottom: "4px", paddingRight: "8px", display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", height: "32px", width: "100%", backgroundColor: "#38ACEC", zIndex: "1" },
	carouselTextLayout: { width: "40%", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContents: "flex-start", marginLeft: "32px" },
	carouselTextHeading: { color: "white", fontSize: "32px" },
	carouselTextBody: { color: "white", marginTop: "8px", fontSize: "24px" },
}

export default App;
