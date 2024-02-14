import { Container, Typography } from "@mui/material";
import React from "react";
import CheckUsernameAvailability from "../../../components/CheckUsernameAvailability";
import ContentWithBackgroundImageGrid from "../../../components/Common/ContentWithBackgroundImage/ContentWithBackgroundImageGrid";
import GradientText from "../../../components/Common/Typography/GradientText";
import HeadingGradientTypography from "../../../components/Common/Typography/HeadingGradientTypography";
import SectionHeading from "../../../components/Common/Typography/SectionHeading";

const ProfileFeaturesBannerSection = () => {
	return (
		<ContentWithBackgroundImageGrid
			bgImageFileName={`profile/banner-bg.png`}
			containerStyles={{
				maxHeight: "800px",
				overflow: "hidden",
			}}
		>
			<Container
				sx={{
					textAlign: "center",
				}}
			>
				<SectionHeading
					content={
						<div>
							Build the best{" "}
							<HeadingGradientTypography
								title={`professional profile!`}
							/>
						</div>
					}
				/>
				<Typography
					sx={{
						fontSize: "22px",
						fontWeight: "600",
						maxWidth: "850px",
						margin: "auto",
					}}
				>
					Dive into our highly interactive features to create an
					amazing profile defining your professional journey so far.
				</Typography>
				<CheckUsernameAvailability />
				<Typography
					sx={{
						fontSize: "48px !important",
						fontWeight: "800",
						paddingTop: "32px",
					}}
				>
					Desktop & Mobile{" "}
					<GradientText
						style={{
							fontSize: "48px ",
							fontWeight: "800",
						}}
					>
						Friendly!
					</GradientText>
				</Typography>
			</Container>
		</ContentWithBackgroundImageGrid>
	);
};

export default ProfileFeaturesBannerSection;
