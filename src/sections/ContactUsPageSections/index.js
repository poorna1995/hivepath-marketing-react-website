import React from "react";
import { Container, Grid } from "@mui/material";
import ContentWithBackgroundImageGrid from "../../components/Common/ContentWithBackgroundImage/ContentWithBackgroundImageGrid";

import ContactUsContentSection from "./ContactUsContentSection";
import ContactUsFormSection from "./ContactUsFormSection";

const ContactUsPageSections = () => {
	return (
		<ContentWithBackgroundImageGrid
			bgImageFileName={`contact-us/contact-us-background.png`}
			containerStyles={{
				// maxHeight: "700px",
				overflow: "hidden",
			}}
		>
			<Container
				maxWidth="xl"
				// sx={{
				// 	minWidth: {
				// 		md: "1200px",
				// 	},
				// }}
			>
				<Grid
					container
					sx={{
						paddingTop: {
							md: "inherit",
							sm: "32px",
						},
						paddingBottom: {
							md: "",
							sm: "32px",
						},
					}}
				>
					<Grid
						item
						md={6}
						sm={12}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<ContactUsContentSection />
					</Grid>
					<Grid item md={6} sm={12}>
						<ContactUsFormSection />
					</Grid>
				</Grid>
			</Container>
		</ContentWithBackgroundImageGrid>
	);
};

export default ContactUsPageSections;
