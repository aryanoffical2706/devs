import React from "react";
import logo from "./logo.svg";
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
import bm_automated_data_backup from "./images/bm_automated_data_backup.png";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div style={{display: "flex", flexDirection: "column", backgroundColor: "white"}}>
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

			<div style={{ margin: "32px" }}>
				<div style={{ fontSize: "48px" }}>
					Data Theft is an increasingly powerful and growing threat
				</div>
				<div style={{ marginTop: "24px", fontSize: "24px" }}>
					The main challenges before Small and Medium businesses in protecting business sensitive and confidential data are:
					<Row style={{ marginTop: "24px" }}>
						{getFeatureCards(bm_user_access, "USER ACCESS", ["Do you know who is accessing your data and when?", <br/>, <br/>, "Are you suspicious of your new hire who got onboarded from competition"])}
						{getFeatureCards(bm_data_breach, "DATA BREACH", ["Do you know who mailed your file to your competition?", <br/>, <br/>, "Do you get to know when your company confidential file gets copied on USB?"])}
						{getFeatureCards(bm_insider_threat, "INSIDER THREAT", ["Do you have visibility of those risky insiders who have trusted access and could easily compromise your systems while remaining undetected?"])}
						{getFeatureCards(bm_ip_protection, "IP PROTECTION", ["Are you worried about safeguarding your Intellectual Property from theft or external disclosure?"])}
					</Row>
					<Row style={{ marginTop: "24px" }}>
						{getFeatureCards(bm_regulatory_compliance, "REGULATORY COMPLIANCE", ["Are you complying with GDPR, PCI, or the upcoming Personal Data Protection Act?", <br/>, <br/>, "Are you making sure that sesitive data is identified and controlled properly?"])}
						{getFeatureCards(bm_cloud_data, "CLOUD DATA", ["Do you know how much and what data you have in your cloud storage?", <br/>, <br/>, "Do you have means to protect your sensitive data stored in cloud?"])}
						{getFeatureCards(bm_data_recovery, "DATA RECOVERY", ["If your laptop gets stolen or crashed, do you know how you can recover your data?", <br/>, <br/>, "How easy it is to restore your data in such event?"])}
						{getFeatureCards(bm_endpoint_usage, "ENPOINT USAGE", ["Do you know the employee who browses social sites the most, affecting his productivity?", <br/>, <br/>, "Are you nagged by the threat of viruses and spyware due to non-updated systems?"])}
					</Row>
				</div>
			</div>

			<div style={{ padding: "32px", backgroundColor: "#D0CECE" }}>
				<div style={{ color: "#190061", fontSize: "48px", textAlign: "center" }}>
					Secure Data with Bytemonk Insider Threat Detection and Response Program
				</div>
				<div style={{ padding: "32px", backgroundColor: "#E7E6E6", marginTop: "16px" }}>
					<div style={{ fontSize: "48px", color: "#38ACEC" }}>
						Insider Threat Action Platform
					</div>
					<Row style={{ justifyContent: "space-between", marginTop: "16px" }}>
						{getPlatformFeaturesCard("#38ACEC", "Discover", "Remotely scan specified databases, servers, desktops and laptops, to discover confidential data stored there")}
						{getPlatformFeaturesCard("#7030A0", "Monitor", "Monitor and identify WHAT customer data is at risk, WHO is using the data in real time, and WHERE this data is going")}
						{getPlatformFeaturesCard("#F08A00", "Protect", "Mitigate the risks of a breach by stopping the critical data hosted within premises or in the cloud from leaving your organization")}
					</Row>
					<Card style={{ marginTop: "32px" }}>
						<Card.Header style={{ backgroundColor: "green", color: "white", fontSize: "24px", textAlign: "center" }}>
							Additional Features
						</Card.Header>
						<Card.Body>
							<Row>
								{getAdditionalFeaturesView(bm_usb_device_control, "USB Device Control", "Enable safe and accountable USB device usage by implementing and managing security policies with ease")}
								{getAdditionalFeaturesView(bm_cloud_data_protection, "Cloud Data Protection", "Extend your security to cloud applications like Microsoft Office 365, Google G Suite, and more")}
								{getAdditionalFeaturesView(bm_user_activity_monitoring, "User Activity Monitoring (UAM)", "Stop malware, phishing attacks, and viruses from spreading via an infected website to an organization's network")}
								{getAdditionalFeaturesView(bm_it_access_management, "IT Asset Management", "Identify and plug system vulnerabilities arising due to firewall, antivirus and more")}
								{getAdditionalFeaturesView(bm_automated_data_backup, "Automated Data Backup", "Create a policy-driven backup plan, monitor the status of on-going backups, and find/restore backups")}
							</Row>
						</Card.Body>
					</Card>
				</div>

			</div>

			<div style={{ backgroundColor: "#259FDA", padding: "32px" }}>
				<div style={{ color: "white", fontSize: "32px", textAlign: "center" }}>
					Ready to learn more?
				</div>
				<Row>
					<Col>
						<div style={{ fontSize: "24px", textAlign: "center" }}>
							Talk to a specialist
						</div>
						<Button style={{ width: "240px" }}>
							FIND AN EXPERT
						</Button>
					</Col>
				</Row>
			</div>
    </div>
  );

}

function getContactExpertView(headingText, buttonText) {
	return (
		<Col>
			<div style={{ fontSize: "24px", textAlign: "center" }}>
				{headingText}
			</div>
			<Button style={{ width: "240px" }}>
				{buttonText}
			</Button>
		</Col>
	);
}

function getAdditionalFeaturesView(imgSrc, headerText, bodyText) {
	return (
		<Col style={{ marginLeft: "16px", marginRight: "16px" }}>
			<div style={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
				<img src={imgSrc} style={{ width: "70px", height: "70px", alignSelf: "center" }}/>
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

function getPlatformFeaturesCard(headerBackground, headerText, bodyText) {
	return (
		<Col style={{ alignContent: "center", flexGrow: "0" }}>
			<Card style={{ width: "320px" }}>
				<Card.Header style={{ backgroundColor: headerBackground, color: "white", fontSize: "24px", textAlign: "center" }}>
					{headerText}
				</Card.Header>
				<Card.Text style={{ color: "black", fontSize: "18px", padding: "24px" }}>
					{bodyText}
				</Card.Text>
			</Card>
		</Col>
	);
}

function getFeatureCards(imgSrc, title, body) {
	return (
		<Col>
			<Card style={{ height: "400px", alignItems: "center", padding: "32px", width: "280px" }}>
				<Card.Img style={{ height: "72px", width: "72px" }} variant="top" src={imgSrc}/>
				<Card.Title style={{ fontSize: "24px", color: "#38ACEC", textAlign: "center", marginTop: "16px" }}>{title}</Card.Title>
				<Card.Text style={{ fontSize: "16px" }}>{body}</Card.Text>
			</Card>
		</Col>
	);
}

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
