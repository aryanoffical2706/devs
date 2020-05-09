import React from "react";
import { Form, Row, Col, Button, Modal, Spinner } from "react-bootstrap";
import { submitMarketingLeadDetails } from "./api/bytemonkApi.js";

export default class ContactSubmissionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			company: "",
			country: "",
			message: "",
			showSubmissionSuccessModal: false,
			showLoader: false,
		};
	}

	resetState() {
		this.setState({
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			company: "",
			country: "",
			message: ""
		});
	}

	submitContactDetails() {
		this.setState({ showLoader: true });
		let contactDetails = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			phone: this.state.phone,
			company: this.state.company,
			country: this.state.country,
			message: this.state.message,
		};
		submitMarketingLeadDetails(contactDetails).then(result => {
			console.log("marketing lead: " + result);
			this.setState({ showLoader: false });
			this.setState({ showSubmissionSuccessModal: true });
		}).catch(e => {
			console.log(e.message)
			this.setState({ showLoader: false });
		});
		this.resetState();
		return true;
	}

	render() {
		return (
			<div>
				{this.state.showSubmissionSuccessModal ?
					<Modal show={true} onHide={() => { this.setState({ showSubmissionSuccessModal: false }) }}>
						<Modal.Header closeButton>
							<Modal.Title>Submission successful</Modal.Title>
						</Modal.Header>

						<Modal.Body>
							<p>Your data has been subitted successfully. Our sales team will contact you!</p>
						</Modal.Body>

						<Modal.Footer>
							<Button variant="secondary" onClick={() => { this.setState({ showSubmissionSuccessModal: false }) }}>Close</Button>
						</Modal.Footer>
					</Modal>
					: <div></div>
				}

				<div style={{ backgroundColor: "white", paddingTop: "16px", paddingBottom: "16px", paddingLeft: "32px", paddingRight: "32px" }}>
					<div style={{ color: "#729FCF", fontSize: "32px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
						Contact
					<div style={{ fontSize: "15px", color: "black" }}>
							*All fields are required
					</div>
					</div>
					<Form>
						<Row style={{ marginTop: "16px" }}>
							<Col>
								<Form.Control required placeholder="First Name"
									style={styles.contactSubmissionFormControl}
									onChange={(e) => {
										this.setState({ firstName: e.target.value });
									}} />
							</Col>
							<Col>
								<Form.Control required placeholder="Last Name" style={styles.contactSubmissionFormControl} onChange={(e) => {
									this.setState({ lastName: e.target.value });
								}} />
							</Col>
						</Row>
						<Row style={{ marginTop: "16px" }}>
							<Col>
								<Form.Control required placeholder="Email" type="email" style={styles.contactSubmissionFormControl} onChange={(e) => {
									this.setState({ email: e.target.value });
								}} />
							</Col>
							<Col>
								<Form.Control required placeholder="Phone" style={styles.contactSubmissionFormControl} onChange={(e) => {
									this.setState({ phone: e.target.value });
								}} />
							</Col>
						</Row>
						<Row style={{ marginTop: "16px" }}>
							<Col>
								<Form.Control required placeholder="Company" style={styles.contactSubmissionFormControl} onChange={(e) => {
									this.setState({ company: e.target.value });
								}} />
							</Col>
							<Col>
								<Form.Control required placeholder="Country" style={styles.contactSubmissionFormControl} onChange={(e) => {
									this.setState({ country: e.target.value });
								}} />
							</Col>
						</Row>
						<Row style={{ marginTop: "16px" }}>
							<Col>
								<Form.Control required placeholder="Message" style={styles.contactSubmissionFormControl} onChange={(e) => {
									this.setState({ message: e.target.value });
								}} />
							</Col>
						</Row>
						<Row style={{ marginTop: "16px", marginLeft: "0px" }}>
							<Button
								style={{ backgroundColor: "#0070C0", width: "160px" }}
								type="reset"
								disabled={this.state.showLoader}
								onClick={() => {
									return this.submitContactDetails();
								}}>
								Submit
							</Button>
							{this.state.showLoader ?
								<Spinner style={{ marginLeft: "16px" }} animation="border" /> : <div></div>
							}
						</Row>
					</Form>
				</div>
			</div>
		);
	}
}

const styles = {
	contactSubmissionFormControl: { backgroundColor: "#F2F2F2" },
	messageFormField: { backgroundColor: "#F2F2F2", height: "100px" }
}