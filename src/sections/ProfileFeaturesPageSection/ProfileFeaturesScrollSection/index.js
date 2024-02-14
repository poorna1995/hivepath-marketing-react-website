import { Container } from "@mui/material";
import React from "react";
import HeadingGradientTypography from "../../../components/Common/Typography/HeadingGradientTypography";
import SectionHeading from "../../../components/Common/Typography/SectionHeading";
import ScrollFeaturePageSection from "../../ScrollFeaturePageSections";

const ProfileFeaturesScrollSection = () => {
	return (
		<Container maxWidth="xl" paddingBottom={"48px"}>
			<Container
				sx={{
					textAlign: "center",
					paddingTop: "32px",
					paddingBottom: "64px",
				}}
			>
				<SectionHeading
					content={
						<div>
							Epic Features -{" "}
							<HeadingGradientTypography
								title={` New & Effective!`}
								gradient={``}
							/>
						</div>
					}
				/>
			</Container>

			<ScrollFeaturePageSection />
		</Container>
	);
};

export default ProfileFeaturesScrollSection;
