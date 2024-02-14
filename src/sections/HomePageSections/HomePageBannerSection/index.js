import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import CheckUsernameAvailability from "../../../components/CheckUsernameAvailability";
import ContentWithBackgroundImage from "../../../components/Common/ContentWithBackgroundImage";
import ContentWithBackgroundImageGrid from "../../../components/Common/ContentWithBackgroundImage/ContentWithBackgroundImageGrid";
import StyledHivepathImage from "../../../components/Common/HivepathImage";
import TextSlideAnimation from "../../../components/Common/TextSlideAnimation";
import HeadingGradientTypography from "../../../components/Common/Typography/HeadingGradientTypography";
import SectionHeading from "../../../components/Common/Typography/SectionHeading";

const HomePageBannerSection = () => {
	return (
		<ContentWithBackgroundImageGrid
			bgImageFileName={"homepage/banner-bg.png"}
			containerStyles={{
				maxHeight: { md: "800px", xs: "auto" },
				overflow: "hidden",
			}}
		>
			<Container
				maxWidth="xl"
				sx={{
					minWidth: {
						md: "1200px",
					},
				}}
			>
				<Grid container paddingTop="128px">
					<Grid item md={6} xs={12} paddingRight="32px">
						<SectionHeading
							// sx={{
							// 	fontSize: "52px",
							// 	lineHeight: "80px",
							// 	fontWeight: 800,
							// 	color: "#364358",
							// }}
							content={
								<div>
									A New Way of
									<br />
									<HeadingGradientTypography
										title={` Networking!`}
									/>
								</div>
							}
						/>
						<Typography
							sx={{
								fontSize: "22px",
								fontWeight: 600,
								lineHeight: " 160%",

								letterSpacing: "0.02em",
								color: "#333333",
								marginTop: "16px",
								marginBottom: "32px",
							}}
						>
							Step into Hivepath to build your network in no time!
							<br />
							Connect, share experiences, and explore the joy of
							meaningful networking.{" "}
						</Typography>
						<TextSlideAnimation />
						<CheckUsernameAvailability />
					</Grid>
					<Grid item md={6} xs={12}>
						<StyledHivepathImage
							fileName={"homepage/hero-section.png"}
							style={{
								borderRadius: "20px",
							}}
						/>
					</Grid>
				</Grid>
			</Container>
		</ContentWithBackgroundImageGrid>
	);
};

export default HomePageBannerSection;
