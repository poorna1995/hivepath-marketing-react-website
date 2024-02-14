import { Box } from "@mui/material";
import * as React from "react";
import Seo from "../components/Seo";
import HomePageSections from "../sections/HomePageSections";

// styles
const IndexPage = () => {
	return (
		<Box>
			<Seo title="Explore hivepath | A new way of networking" />
			<HomePageSections />
		</Box>
	);
};

export default IndexPage;
