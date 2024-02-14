import React from "react";
import BecomeHostFooterSection from "./BecomeHostFooterSection";
import HeroSection from "./HeroSection";
import HostFeaturesSection from "./HostFeaturesSection";
import MoreSection from "./MoreSection";
import ProcessSection from "./ProcessSection";
import UserLevelsSection from "./UserLevelsSection";

const BecomeHostPageSections = () => {
	return (
		<div>
			<HeroSection />
			<HostFeaturesSection />
			<UserLevelsSection />
			<ProcessSection />
			<MoreSection />
			<BecomeHostFooterSection />
		</div>
	);
};

export default BecomeHostPageSections;
