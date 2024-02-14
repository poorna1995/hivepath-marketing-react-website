import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "../../../components/Common/Buttons/PrimaryButton";
import StyledHivepathImage from "../../../components/Common/HivepathImage";
import HeadingGradientTypography from "../../../components/Common/Typography/HeadingGradientTypography";
import ArrowPointingLeftIcon from "../../../svg-files/Components/HomepageIcons/ArrowPointingLeftIcon";
import ArrowPointingRightBigIcon from "../../../svg-files/Components/HomepageIcons/ArrowPointingRightBigIcon";
import ArrowPointingRightFromBottomIcon from "../../../svg-files/Components/HomepageIcons/ArrowPointingRightFromBottomIcon";
import ArrowPointingRightIcon from "../../../svg-files/Components/HomepageIcons/ArrowPointingRightIcon";

import { Link } from "gatsby";
import SectionHeading from "../../../components/Common/Typography/SectionHeading";

const HomePageExploreProfileSection = () => {
	const data = [1, 2, 3, 4];

	const leftData = [
		{
			title: `Upload or create a cover image! We have tons of presets for you. `,
			paddingTop: "96px",
			paddingRight: "",
			icon: <ArrowPointingRightIcon />,
		},
		{
			title: `Write about yourself. Share your jouney so far. `,
			paddingTop: "16px",
			paddingRight: "",
			icon: (
				<ArrowPointingRightFromBottomIcon
					style={{
						marginTop: "32px",
					}}
				/>
			),
		},
		{
			title: `Highlight your skills and level of expertise. `,
			paddingTop: "8px",
			paddingRight: "",
			icon: <ArrowPointingRightBigIcon />,
		},
		{
			title: `Provide work experiences & things you’ve learned. `,
			paddingTop: "0px",
			paddingRight: "",
			icon: <ArrowPointingRightBigIcon />,
		},
	];
	const rightData = [
		{
			title: `Track who follows you and expand your network.`,
			paddingTop: "160px",
			paddingLeft: "",
			icon: <ArrowPointingLeftIcon />,
		},
		{
			title: `List down the languages you know. It helps build connections.`,
			paddingTop: "0px",
			paddingLeft: "",
			icon: <ArrowPointingLeftIcon />,
		},
		{
			title: `Share your academic journey, all the way to the last one.`,
			paddingTop: "120px",
			paddingLeft: "",
			icon: <ArrowPointingLeftIcon />,
		},
	];

	return (
		<Container maxWidth="xl" sx={{ paddingBottom: "48px" }}>
			<Container
				sx={{
					textAlign: "center",
					marginTop: "32px",
					marginBottom: "48px",
				}}
			>
				<SectionHeading
					// sx={{
					// 	fontSize: "52px",
					// 	fontWeight: "800",
					// 	lineHeight: "80px",
					// 	color: "#364358",
					// }}
					content={
						<div>
							Building a{" "}
							<HeadingGradientTypography
								title={` website `}
								gradient={`linear-gradient(94.76deg, #45A0EA -27.84%, #F9658E 114.47%)`}
							/>{" "}
							like profile? Easy!
						</div>
					}
				/>
				<Typography
					sx={{
						fontWeight: 500,
						fontSize: "22px",
						lineHeight: "33px",
						/* or 150% */

						textAlign: "center",
						maxWidth: "800px",
						margin: "auto",
					}}
				>
					Transform your basic details into high-end professional
					profiles with our seamless features within minutes!
				</Typography>
			</Container>
			<Grid container spacing={2}>
				<Grid item md={3.5} xs={12}>
					{leftData.map((item) => (
						<Stack
							direction={"row"}
							sx={{
								paddingTop: {
									md: item.paddingTop && item.paddingTop,

									xs: "8px",
								},
							}}
						>
							<Typography
								sx={{
									padding: "16px",
									fontWeight: 700,
									fontSize: "22px",
									lineHeight: " 33px",
									paddingRight:
										item.paddingRight && item.paddingRight,
								}}
							>
								{item.title}
							</Typography>

							{item.icon && item.icon}
						</Stack>
					))}
				</Grid>
				<Grid item md={5} xs={12}>
					<StyledHivepathImage
						fileName={`homepage/profile.png`}
						style={{
							borderRadius: "20px",
						}}
					/>
				</Grid>
				<Grid item md={3.5} xs={12}>
					{rightData.map((item) => (
						<Stack
							direction={"row"}
							sx={{
								paddingTop: {
									md: item.paddingTop && item.paddingTop,

									xs: "8px",
								},
							}}
						>
							{item.icon && item.icon}
							<Typography
								sx={{
									padding: "16px",
									fontWeight: 700,
									fontSize: "22px",
									lineHeight: " 33px",
									paddingLeft:
										item.paddingLeft && item.paddingLeft,
								}}
							>
								{item.title}
							</Typography>
						</Stack>
					))}
				</Grid>
			</Grid>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "32px",
					marginBottom: "32px",
				}}
			>
				<PrimaryButton
					title={"Learn more"}
					component={Link}
					to="/profile-features"
				/>
			</div>
		</Container>
	);
};

export default HomePageExploreProfileSection;
