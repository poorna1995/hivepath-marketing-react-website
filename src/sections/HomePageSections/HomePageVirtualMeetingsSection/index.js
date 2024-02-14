import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ContentWithBackgroundImage from "../../../components/Common/ContentWithBackgroundImage";
import ContentWithBackgroundImageGrid from "../../../components/Common/ContentWithBackgroundImage/ContentWithBackgroundImageGrid";
import StyledHivepathImage from "../../../components/Common/HivepathImage";
import HeadingGradientTypography from "../../../components/Common/Typography/HeadingGradientTypography";
import SectionHeading from "../../../components/Common/Typography/SectionHeading";

const HomePageVirtualMeetingsSection = () => {
	const data = [1, 2, 3, 4];
	return (
		<ContentWithBackgroundImageGrid
			bgImageFileName={`homepage/3rd-section-bg.png`}
		>
			<div
			// style={{
			// 	position: "absolute",
			// 	top: "0px",
			// 	width: "100%",
			// 	height: "100%",
			// }}
			>
				<Container
					sx={{
						// paddingTop: "32px",
						textAlign: "center",
					}}
				>
					<SectionHeading
						content={
							<div>
								Schedule smooth{" "}
								<HeadingGradientTypography
									title={` 1:1 virtual `}
									gradient={`linear-gradient(92.16deg, #5460F9 3.69%, #12B3EB 116.87%)`}
								/>{" "}
								sessions.
							</div>
						}
					/>
					<Typography
						sx={{
							fontWeight: 400,
							fontSize: "22px",
							lineHeight: "26px",
							textAlign: "center",
							paddingBottom: "64px",
							maxWidth: "700px",
							margin: "auto",
						}}
					>
						Explore our networks, find interesting topics, and
						schedule 1:1 virtual meetings from anywhere around the
						world.{" "}
					</Typography>

					<Grid container spacing={2} paddingBottom="64px">
						{listData.map((item) => (
							<Grid
								item
								xs={12}
								md={6}
								padding="16px"
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									paddingBottom:'32px'
								}}
							>
								<StyledHivepathImage
									fileName={item.imgUrl}
									style={{
										height: "300px",
										width: "100%",
										// objectFit: "contain",
										borderRadius: "20px",
									}}
								/>
								<Typography
									sx={{
										fontWeight: 700,
										fontSize: "24px",
										lineHeight: "29px",
										// textAlign: "center",
										color: "#0F0F0F",
										paddingTop: "16px",
									}}
								>
									{item.title}
								</Typography>
							</Grid>
						))}
					</Grid>
				</Container>
			</div>
		</ContentWithBackgroundImageGrid>
	);
};

export default HomePageVirtualMeetingsSection;

const listData = [
	{
		title: "Select your preferred time slot or join a waitlist.",
		imgUrl: "homepage/sessions/first.png",
	},
	{
		title: "Ask questions & add a note for the Host.",
		imgUrl: "homepage/sessions/second.png",
	},
	{
		title: "Send your request & easily track its status. ",
		imgUrl: "homepage/sessions/third.png",
	},
	{
		title: "Post reviews & receive feedback from your network. ",
		imgUrl: "homepage/sessions/fourth.png",
	},
];
