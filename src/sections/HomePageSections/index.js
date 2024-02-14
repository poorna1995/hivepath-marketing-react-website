import { Box } from "@mui/material";
import React from "react";
import HomePageBannerSection from "./HomePageBannerSection";
import HomePageExploreHostSection from "./HomePageExploreHostSection";
import HomePageExploreProfileSection from "./HomePageExploreProfileSection";
import HomePageFooterSection from "./HomePageFooterSection";
import HomePageVirtualMeetingsSection from "./HomePageVirtualMeetingsSection";

const HomePageSections = () => {
	return (
		<Box>
			<HomePageBannerSection />
			<HomePageExploreProfileSection />
			<HomePageExploreHostSection />
			<HomePageVirtualMeetingsSection />
			<HomePageFooterSection />
		</Box>
	);
};

export default HomePageSections;
