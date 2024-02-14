import { Box } from "@mui/system";
import React from "react";
import Seo from "../../components/Seo";
import ContactUsPageSections from "../../sections/ContactUsPageSections";

const ContactUsPage = () => {
	return (
		<Box>
			<Seo title="Contact us" />
			<ContactUsPageSections />
		</Box>
	);
};

export default ContactUsPage;
