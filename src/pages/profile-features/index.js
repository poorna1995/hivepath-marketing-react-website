import { Box } from "@mui/material";
import React from "react";

import Seo from "../../components/Seo";
import ProfileFeaturesPageSection from "../../sections/ProfileFeaturesPageSection";

const ProfileFeaturesPage = () => {
	return (
		<Box>
			<Seo title="Profile on Hivepath" />
			<ProfileFeaturesPageSection />
		</Box>
	);
};

export default ProfileFeaturesPage;
