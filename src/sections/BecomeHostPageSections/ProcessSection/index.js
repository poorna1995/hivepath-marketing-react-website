import { Container } from "@mui/material";
import React from "react";
import ProcessSectionTitle from "./ProcessSectionTitle";
import StepsList from "./StepsList";

const ProcessSection = () => {
	return (
		<Container maxWidth="xl">
			<ProcessSectionTitle />
			<StepsList />
		</Container>
	);
};

export default ProcessSection;
