import React from "react";
import SectionHeading from "../../../components/Common/Typography/SectionHeading";
import { Typography } from "@mui/material";
import ContactInfoCard from "./ContactInfoCard";
import EmailIcon from "../../../svg-files/Components/ContactUsIcons/EmailIcon";

const ContactUsContentSection = () => {
	return (
		<div style={{ padding: "5rem" }}>
			<SectionHeading content={`Get in touch with us`} />
			<Typography fontSize="21px">
				Looking for valid answers to your questions? Don't worry! Just drop us
				an email, and our team will make sure to find satisfactory solutions to
				all your problems instantly.
			</Typography>
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					marginTop: "40px",
				}}
			>
				<ContactInfoCard title="admin@hivepath.io" icon={<EmailIcon />} />

				{/* <ContactInfoCard
					icon={<ContactNumberIcon />}
					title="+91 8985400250"
					cardStyles={{ marginLeft: "30px" }}
				/> */}
			</div>
		</div>
	);
};

export default ContactUsContentSection;
