import { Container } from "@mui/material";
import React from "react";
import CardsGrid from "./CardsGrid";
import SectionTitle from "./SectionTitle";

const HostFeaturesSection = () => {
	return (
		<Container
			maxWidth="xl"
			style={{ marginTop: "64px", marginBottom: "64px" }}
		>
			<SectionTitle />
			<CardsGrid />
		</Container>
	);
};

export default HostFeaturesSection;
