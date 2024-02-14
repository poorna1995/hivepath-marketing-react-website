import { Card, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import StyledHivepathImage from "../../../components/Common/HivepathImage";
import HeadingGradientTypography from "../../../components/Common/Typography/HeadingGradientTypography";
import SectionHeading from "../../../components/Common/Typography/SectionHeading";
const ProfileFeaturesGridSection = () => {
	return (
		<Container
			maxWidth="xl"
			sx={{ textAlign: "center", marginTop: "48px" }}
		>
			<SectionHeading
				content={
					<div>
						But wait,{" "}
						<HeadingGradientTypography
							title={` here’s some more.. `}
						/>
					</div>
				}
			/>

			<Grid container spacing={2} marginTop="48px">
				{listData.map((item, index) => {
					return (
						<Grid
							item
							xs={12}
							md={item.md && item.md}
							sx={{
								// maxHeight: "400px",
								// overflow: "hidden",
								// background: "#F8FAFF",
								padding: "16px",
								// borderRadius: "20px",
								marginTop: "16px",
							}}
							alignItems="stretch"
						>
							<Card
								sx={{
									boxShadow: "none",
									background: item.bgColor,
									borderRadius: "20px",
									paddingTop: "16px",
									height: "inherit",
									padding: "16px",
									// maxHeight: "400px",
								}}
							>
								<Typography
									sx={{
										fontWeight: 800,
										fontSize: "32px",
										lineHeight: " 52px",
										paddingBottom: "16px",
									}}
								>
									{item.title}
								</Typography>

								<CardMedia
									component={StyledHivepathImage}
									fileName={item.imgUrl}
									style={{}}
								/>
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};

export default ProfileFeaturesGridSection;

const listData = [
	{
		md: "7",
		title: "Bookmarks to group favorites.",
		imgUrl: "profile/more-section/first.png",
		bgImg: "profile/more-section/1.png",
		bgColor: "#E1EAFF",
	},
	{
		md: "5",
		title: "Customized URLs.",
		imgUrl: "profile/more-section/second.png",
		bgImg: "profile/more-section/2.png",
		bgColor: "#FFEADE",
	},
	{
		md: "4.4",
		title: "Tracking followers.",
		imgUrl: "profile/more-section/third.png",
		bgImg: "profile/more-section/3.png",
		bgColor: "#F3FFD9",
	},
	{
		md: "7.6",
		title: "Easy profile editing & more!",
		imgUrl: "profile/more-section/fourth.png",
		bgImg: "profile/more-section/4.png",
		bgColor: "#FDF4D4",
	},
];
