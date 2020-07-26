import React from "react";
import "./App.css";
import bytemonk_logo from "./images/bytemonk_logo.png";
import bm_carousel_01 from "./images/bm_carousel_01.jpg";
import bm_carousel_02 from "./images/bm_carousel_02.jpg";
import bm_carousel_03 from "./images/bm_carousel_03.jpg";
import bm_carousel_04 from "./images/bm_carousel_04.jpg";
import bm_user_access from "./images/bm_user_access.png";
import bm_data_breach from "./images/bm_data_breach.png";
import bm_insider_threat from "./images/bm_insider_threat.png";
import bm_ip_protection from "./images/bm_ip_protection.png";
import bm_regulatory_compliance from "./images/bm_regulatory_compliance.png";
import bm_cloud_data from "./images/bm_cloud_data.png";
import bm_data_recovery from "./images/bm_data_recovery.png";
import bm_endpoint_usage from "./images/bm_endpoint_usage.png";
import bm_usb_device_control from "./images/bm_usb_device_control.png";
import bm_cloud_data_protection from "./images/bm_cloud_data_protection.png";
import bm_user_activity_monitoring from "./images/bm_user_activity_monitoring.png";
import bm_it_access_management from "./images/bm_it_access_management.png";
import bm_backup_icon from "./images/bm_backup_icon.svg";
import bm_sales_email from "./images/bm_sales_email.png";
import bm_sales_phone from "./images/bm_sales_phone.png";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ContactSubmissionForm from "./ContactSubmissionForm";

export default class App extends React.Component {
	render() {
		return (
			<div style={{ display: "flex", flexDirection: "column", backgroundColor: "white" }}>
				<div style={styles.headerLayout}>
					<img src={bytemonk_logo} style={{ height: "24px", paddingLeft: "8px" }} />
					<div style={{ display: "flex", flexDirection: "row", paddingRight: "8px" }}>
						<a href="#learn_more" style={styles.headerButton}>FREE TRIALS&nbsp;&nbsp;</a>
							|
							<a href="#learn_more" style={styles.headerButton}>&nbsp;&nbsp;GET PRICING&nbsp;&nbsp;</a>
							|
							<a href="#learn_more" style={styles.headerButton}>&nbsp;&nbsp;CONTACT US</a>
					</div>
				</div>

				<div style={styles.navLayout}>
					<a href="#home" style={styles.navButton}>HOME</a>
					<a href="#challenges" style={styles.navButton}>CHALLENGES</a>
					<a href="#solutions" style={styles.navButton}>SOLUTIONS</a>
					<a href="#about_us" style={styles.navButton}>ABOUT US</a>
				</div>

				<div style={{ marginTop: "80px" }} id="home">
					<Carousel interval={10000} controls={false}>
						{this.getCarouselItem(0, "black", "PROVIDING LASER-FOCUSSED DATA SECURITY", "Bytemonk provides laser-focussed security, regulatory compliance, and practical solutions tailored to your organization's needs - all from a partner you can trust.", bm_carousel_01)}
						{this.getCarouselItem(1, "#26272C", "ADDRESSING THE DATA SECURITY THREATS SUAVELY", "Bytemonk addresses the threat vectors originating from inside the organization by stopping critical data from leaving your organization and helps identify both malicious & negligent users.", bm_carousel_02)}
						{this.getCarouselItem(2, "#181F27", "REDUCING ATTACK SURFACE USING AI", "Bytemonk specializes in reducing attack surface by leveraging Machine Learning and AI capabilities that allow computers to learn from examples instead of predefined rules.", bm_carousel_03)}
						{this.getCarouselItem(3, "#222524", "STAYING AHEAD IN THE CYBER SECURITY GAME", "Our offerings help align with emerging security needs while keeping the business data completely safe by improving visibility into data loss risk and delivering tangible risk reduction.", bm_carousel_04)}
					</Carousel>
				</div>

				<div style={{ margin: "32px" }} id="challenges">
					<div style={{ fontSize: "48px" }}>
						Data Theft is an increasingly powerful and growing threat
						</div>
					<div style={{ marginTop: "24px", fontSize: "24px" }}>
						The main challenges before Small and Medium businesses in protecting business sensitive and confidential data are:
							<Row style={{ marginTop: "24px" }}>
							{this.getFeatureCards(bm_user_access, "USER ACCESS", ["Do you know who is accessing your data and when?", <br />, <br />, "Are you suspicious of your new hire who got onboarded from competition?"])}
							{this.getFeatureCards(bm_data_breach, "DATA BREACH", ["Do you know who mailed your file to your competition?", <br />, <br />, "Do you get to know when your company confidential file gets copied on USB?"])}
							{this.getFeatureCards(bm_insider_threat, "INSIDER THREAT", ["Do you have visibility of those risky insiders who have trusted access and could easily compromise your systems while remaining undetected?"])}
							{this.getFeatureCards(bm_ip_protection, "IP PROTECTION", ["Are you worried about safeguarding your Intellectual Property from theft or external disclosure?"])}
						</Row>
						<Row style={{ marginTop: "24px" }}>
							{this.getFeatureCards(bm_regulatory_compliance, "REGULATORY COMPLIANCE", ["Are you complying with GDPR, PCI, or the upcoming Personal Data Protection Act?", <br />, <br />, "Are you making sure that sesitive data is identified and controlled properly?"])}
							{this.getFeatureCards(bm_cloud_data, "CLOUD DATA", ["Do you know how much and what data you have in your cloud storage?", <br />, <br />, "Do you have means to protect your sensitive data stored in cloud?"])}
							{this.getFeatureCards(bm_data_recovery, "DATA RECOVERY", ["If your laptop gets stolen or crashed, do you know how you can recover your data?", <br />, <br />, "How easy it is to restore your data in such event?"])}
							{this.getFeatureCards(bm_endpoint_usage, "ENPOINT USAGE", ["Do you know the employee who browses social sites the most, affecting his productivity?", <br />, <br />, "Are you nagged by the threat of viruses and spyware due to non-updated systems?"])}
						</Row>
					</div>
				</div>

				<div style={{ padding: "32px", backgroundColor: "#D0CECE" }} id="solutions">
					<div style={{ color: "#002060", fontSize: "48px", textAlign: "center" }}>
						Secure Data with Bytemonk Insider Threat Detection and Response Program
						</div>
					<div style={{ padding: "32px", backgroundColor: "#E7E6E6", marginTop: "32px" }}>
						<div style={{ fontSize: "48px", color: "#0070c0" }}>
							Insider Threat Action Platform
							</div>
						<Row style={{ justifyContent: "space-between", marginTop: "16px" }}>
							{this.getPlatformFeaturesCard("#00a9d4", "Discover", "Remotely scan specified databases, servers, desktops and laptops, to discover confidential data stored there.")}
							{this.getPlatformFeaturesCard("#7030A0", "Monitor", "Monitor and identify WHAT customer data is at risk, WHO is using the data in real time, and WHERE this data is going.")}
							{this.getPlatformFeaturesCard("#F08A00", "Protect", "Mitigate the risks of a breach by stopping the critical data hosted within premises or in the cloud from leaving your organization.")}
						</Row>
						<Card style={{ marginTop: "32px" }}>
							<Card.Header style={{ backgroundColor: "#70ad47", color: "white", fontSize: "24px", textAlign: "center" }}>
								Additional Features
								</Card.Header>
							<Card.Body>
								<Row>
									{this.getAdditionalFeaturesView(bm_usb_device_control, "USB Device Control", "Enable safe and accountable USB device usage by implementing and managing security policies with ease.")}
									{this.getAdditionalFeaturesView(bm_cloud_data_protection, "Cloud Data Protection", "Extend your security to cloud applications like Microsoft Office 365, Google G Suite, and more.")}
									{this.getAdditionalFeaturesView(bm_user_activity_monitoring, "User Activity Monitoring (UAM)", "Stop malware, phishing attacks, and viruses from spreading via an infected website to organization's network.")}
									{this.getAdditionalFeaturesView(bm_it_access_management, "IT Asset Management", "Identify and plug system vulnerabilities arising due to firewall, antivirus and more.")}
									{this.getAdditionalFeaturesView(bm_backup_icon, "Automated Data Backup", "Create a policy-driven backup plan, monitor the status of on-going backups, and find/restore backups.")}
								</Row>
							</Card.Body>
						</Card>
					</div>
				</div>

				<div style={{ backgroundColor: "#259FDA", padding: "32px" }} id="learn_more">
					<div style={{ color: "white", fontSize: "32px", textAlign: "center" }}>
						Ready to learn more?
						</div>
					<Row>
						{this.getContactExpertView("Talk to a specialist", "FIND AN EXPERT")}
						{this.getContactExpertView("Try it now", "FREE TRIAL")}
						{this.getContactExpertView("Get pricing", "CONTACT SALES")}
					</Row>
				</div>

				<div style={{ backgroundColor: "#D9D9D9", padding: "32px" }}>
					<div style={{ color: "#0070c0", fontSize: "32px" }}>
						INNOVATING WITH A DIGITAL MINDSET
						</div>
					<div style={{ fontSize: "24px" }}>
						Bytemonk provides innovative solutions for small and medium businesses to protect from data breach which happens from within the organization.<br /><br />The Insider Threat Action platform combines advanced machine learning technology and business processes, enabling small and medium businesses to move from passive detection to active data theft protection.
						</div>
				</div>

				<div style={{ backgroundColor: "black", paddingTop: "32px", paddingBottom: "32px", paddingLeft: "16px", paddingRight: "16px" }}>
					<div style={{ marginLeft: "16px", marginBottom: "16px", fontSize: "32px", color: "#00b0f0", textAlign: "center" }}>
						OUR DIFFERENTIATORS
					</div>
					<Row>
						{this.getDifferentiators("Easy to Use", "The Bytemonk platform is designed to be simple to use, quick to deploy, and easy to maintain. Requiring no special training for users, the system can be set up in minutes.", { borderTopWidth: "0px", borderLeftWidth: "0px" })}
						{this.getDifferentiators("Purpose built", "As Bytemonk solutions are designed for small and medium businesses, the pre-packaged set of offerings are integrated, modular, and cost-effective, enabling quicker deployment.", { borderTopWidth: "0px" })}
						{this.getDifferentiators("Centralized reporting", "Bytemonk has just one dashboard for reporting and analytics; all activities such as sensitive data protection, risky users and activities monitoring, and business data recovery are combined and insights presented on a centralized console.", { borderTopWidth: "0px", borderRightWidth: "0px" })}
					</Row>
					<Row>
						{this.getDifferentiators("Pre-built configurations", "Bytemonk has wide set of out-of-the-box policy rules created just for the Indian market. Coupled with advance machine learning technologies, Bytemonk platform delivers unmatched data leak discovery.", { borderLeftWidth: "0px", borderBottomWidth: "0px" })}
						{this.getDifferentiators("Regulatory compliance", "Bytemonk solutions help automate the compliance process by locating the sensitive data in the network and by putting in place a robust protection mechanism.", { borderBottomWidth: "0px" })}
						{this.getDifferentiators("Lower TCO", "Bytemonk solutions are affordable for small and medium businesses. Harnessing cloud delivery model, businesses can save on additional hardware investment.", { borderBottomWidth: "0px", borderRightWidth: "0px" })}
					</Row>
				</div>

				<div style={{ backgroundColor: "#D9D9D9", padding: "32px" }} id="about_us">
					<Row>
						<Col>
							<div style={{ color: "#729FCF", fontSize: "32px" }}>
								Get in touch
								</div>
							<div style={{ color: "black", fontSize: "18px", marginTop: "16px" }}>
								If you're searching for a new partner in cybersecurity, we want to hear from you! Fill out this form, and one of our team members will contact you shortly. You can also find our direct contact information here.
								</div>
							<div style={{ color: "#729FCF", fontSize: "32px", marginTop: "16px" }}>
								Contact Information
								</div>
							<div style={{ color: "black", marginTop: "16px" }}>
								<Row>
									<Col>
										<div>
											US OFFICE
											</div>
										<div>
											10909 Eastridge Dr NE<br />Redmond, WA 98503
											</div>
									</Col>
									<Col>
										<div>
											INDIA OFFICE
											</div>
										<div>
											A3-801, Tuscan Estate<br />Kharadi, Pune
											</div>
									</Col>
								</Row>
							</div>
						</Col>
						<Col>
							<ContactSubmissionForm />
						</Col>
					</Row>
				</div>

				<div style={{ backgroundColor: "#259FDA", paddingTop: "16px", paddingBottom: "16px" }}>
					<Row>
						{this.getContactPanel(bm_sales_email, "sales@bytemonk.co")}
						{this.getContactPanel(bm_sales_phone, "+91-91759-20040")}
					</Row>
				</div>

				<div style={{ backgroundColor: "black", padding: "16px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
					<div style={{ paddingLeft: "16px" }}>
						<div style={{ color: "white", fontSize: "18px" }}>
							© 2020 Bytemonk&nbsp;&nbsp;|
								<a href="privacy.html" style={{ textDecoration: "none", color: "white" }}>&nbsp;&nbsp;Privacy Policy&nbsp;&nbsp;</a>
								|
								<a href="support.html" style={{ textDecoration: "none", color: "white" }}>&nbsp;&nbsp;Terms of Services</a>
						</div>
					</div>
				</div>

			</div>
		);
	}
	getContactPanel(srcImage, contactText) {
		return (
			<Col>
				<div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignConten: "center" }}>
					<Image src={srcImage} style={{ width: "60px", height: "60px" }} />
					<div style={{ fontSize: "18px", alignSelf: "center", marginLeft: "16px" }}>
						{contactText}
					</div>
				</div>
			</Col>
		);
	}

	getDifferentiators(headerText, bodyText, borderStyle) {
		return (
			<Col style={{ padding: "32px", borderColor: "grey", borderWidth: "1px", borderStyle: "dotted", ...borderStyle }}>
				<div style={{ fontSize: "32px", color: "white" }}>
					{headerText}
				</div>
				<div style={{ marginTop: "24px", color: "#0584AB" }}>
					{bodyText}
				</div>
			</Col>
		);
	}

	getContactExpertView(headingText, buttonText) {
		return (
			<Col style={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
				<div style={{ fontSize: "32px", textAlign: "center" }}>
					{headingText}
				</div>
				<Button style={{ width: "240px", alignSelf: "center", marginTop: "16px", background: "white", color: "black", fontSize: "24px", borderRadius: "8px" }}>
					{buttonText}
				</Button>
			</Col>
		);
	}

	getAdditionalFeaturesView(imgSrc, headerText, bodyText) {
		return (
			<Col style={{ marginLeft: "16px", marginRight: "16px" }}>
				<div style={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
					<img src={imgSrc} style={{ width: "70px", height: "70px", alignSelf: "center" }} />
					<div style={{ textAlign: "center", color: "#190061", fontSize: "24px" }}>
						{headerText}
					</div>
					<div style={{ textAlign: "center", fontSize: "18px" }}>
						{bodyText}
					</div>
				</div>
			</Col>
		);
	}

	getPlatformFeaturesCard(headerBackground, headerText, bodyText) {
		return (
			<Col style={{ alignContent: "center", flexGrow: "0" }}>
				<Card style={{ width: "360px", height: "340px" }}>
					<Card.Header style={{ backgroundColor: headerBackground, color: "white", fontSize: "32px", textAlign: "center" }}>
						{headerText}
					</Card.Header>
					<Card.Text style={{ color: "black", fontSize: "24px", padding: "24px" }}>
						{bodyText}
					</Card.Text>
				</Card>
			</Col>
		);
	}

	getFeatureCards(imgSrc, title, body) {
		return (
			<Col style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
				<div style={{ height: "8px", background: "#0070C0", width: "298px" }} />
				<Card style={{ padding: "8px", background: "#F2F2F2", borderRadius: "0px" }}>
					<div style={{ background: "white", height: "400px", width: "280px", alignItems: "center", padding: "32px" }}>
						<Card.Img style={{ height: "72px", width: "72px" }} variant="top" src={imgSrc} />
						<Card.Title style={{ fontSize: "24px", color: "#38ACEC", textAlign: "center", marginTop: "16px" }}>{title}</Card.Title>
						<Card.Text style={{ fontSize: "16px" }}>{body}</Card.Text>
					</div>
				</Card>
			</Col>
		);
	}

	getCarouselItem(key, backgroundColor, heading, body, carouselImage) {
		return (
			<Carousel.Item key={key}>
				<div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", height: "800px", backgroundColor: backgroundColor }}>
					<div style={styles.carouselTextLayout}>
						<div style={styles.carouselTextHeading}>{heading}</div>
						<div style={styles.carouselTextBody}>{body}</div>
						<Button style={styles.carouselButton}>GET A DEMO</Button>
					</div>
					<Image src={carouselImage} style={{ width: "60%" }} />
				</div>
			</Carousel.Item>);
	}

}

const styles = {
	headerLayout: { position: "fixed", paddingTop: "4px", paddingBottom: "4px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: "40px", width: "100%", backgroundColor: "#F2F2F2", zIndex: "1" },
	headerButton: { paddingLeft: "8px", paddingRight: "8px", textDecoration: "none" },
	navButton: { marginLeft: "32px", paddingLeft: "8px", paddingRight: "8px", textDecoration: "none", color: "white" },
	navLayout: { position: "fixed", top: "40px", paddingTop: "4px", paddingBottom: "4px", paddingRight: "8px", display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", height: "40px", width: "100%", backgroundColor: "#38ACEC", zIndex: "1" },
	carouselTextLayout: { width: "40%", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", marginLeft: "32px" },
	carouselTextHeading: { color: "white", fontSize: "32px" },
	carouselTextBody: { color: "white", marginTop: "16px", fontSize: "24px" },
	carouselButton: { marginTop: "24px", backgroundColor: "#38ACEC", fontSize: "20px", paddingLeft: "8px", paddingRight: "8px" }
}
