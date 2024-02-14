import { Box } from "@mui/material";
import React from "react";

import Seo from "../../components/Seo";
import BecomeHostPageSections from "../../sections/BecomeHostPageSections";

const BecomeHostPage = () => {
	return (
		<Box>
			
			<Seo title="Become a Host with Hivepath" />
			<BecomeHostPageSections />
		</Box>
	);
};

export default BecomeHostPage;
