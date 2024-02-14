import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import HeadingGradientTypography from "../../../components/Common/Typography/HeadingGradientTypography";
import SectionHeading from "../../../components/Common/Typography/SectionHeading";
import DetailsIcon from "../../../svg-files/Components/ProfilePageIcons/DetailsIcon";
import NetworkIcon from "../../../svg-files/Components/ProfilePageIcons/NetworkIcon";
import PeopleIcon from "../../../svg-files/Components/ProfilePageIcons/PeopleIcon";

const ProfileFeaturesProcessSection = () => {
	return (
		<Container
			sx={{
				textAlign: "center",
				paddingTop: "64px",
				paddingBottom: "64px",
			}}
		>
			<SectionHeading
				content={
					<div>
						Create a profile in{" "}
						<HeadingGradientTypography
							title={` just a few clicks!`}
						/>
					</div>
				}
			/>

			<Grid container spacing={2} paddingTop="48px">
				{listData.map((item) => {
					return (
						<Grid
							item
							xs={12}
							md={4}
							sx={{
								textAlign: "center",
								padding: {
									md: "16px",
								},
								maxWidth: "200px",
							}}
						>
							{item.icon}
							{/* <BriefcaseIcon /> */}
							<Typography
								sx={{
									fontWeight: " 700",
									fontSize: "24px",
									lineHeight: "29px",
									textAlign: "center",
									color: "#222222",
									paddingTop: "32px",
									width: "inherit",
									maxWidth: "250px",
									margin: "auto",
								}}
							>
								{item.title}
							</Typography>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};

export default ProfileFeaturesProcessSection;

const listData = [
	{
		title: "Register & join the Hivepath network.",
		icon: <PeopleIcon />,
	},
	{
		title: "Provide basic details to complete your profile. ",
		icon: <DetailsIcon />,
	},
	{
		title: "Engage, share & expand your network.",
		icon: <NetworkIcon />,
	},
];
