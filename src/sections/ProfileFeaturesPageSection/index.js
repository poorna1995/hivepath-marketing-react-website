import React from "react";
import { Box } from "@mui/material";
import ProfileFeaturesBannerSection from './ProfileFeaturesBannerSection'
import ProfileFeaturesScrollSection from "./ProfileFeaturesScrollSection";
import ProfileFeaturesGridSection from "./ProfileFeaturesGridSection";
import ProfileFeaturesProcessSection from "./ProfileFeaturesProcessSection";
import HomePageFooterSection from "../HomePageSections/HomePageFooterSection";
import ProfileFeatureImage from "./ProfileFeatureImage";


const ProfileFeaturesPageSection = () => {
	return <Box>
        <ProfileFeaturesBannerSection />
        <ProfileFeatureImage />
        <ProfileFeaturesScrollSection />
        <ProfileFeaturesGridSection />
        <ProfileFeaturesProcessSection />
        <HomePageFooterSection />
    </Box>;
};

export default ProfileFeaturesPageSection;
