import { Container, Typography } from "@mui/material";
import React from "react";
import GradientText from "../../../components/Common/Typography/GradientText";
import SectionHeading from "../../../components/Common/Typography/SectionHeading";

const ProcessSectionTitle = () => {
	return (
		<Container
			style={{
				maxWidth: "1000px",
				marginTop: "64px",
				marginBottom: "64px",
				textAlign: "center",
			}}
		>
			<SectionHeading
				content={`	Experience sharing like never before!
			`}
			/>

			<Typography
				style={{
					fontSize: "24px",
					fontWeight: "700",
					color: "#333333",
				}}
			>
				Create your digital presence & build your network by becoming a
				Host.
			</Typography>
		</Container>
	);
};

export default ProcessSectionTitle;
