import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "../../../components/Common/Buttons/PrimaryButton";
import StyledHivepathImage from "../../../components/Common/HivepathImage";
import HeadingGradientTypography from "../../../components/Common/Typography/HeadingGradientTypography";
import SectionHeading from "../../../components/Common/Typography/SectionHeading";
import HPExploreCard from "./HPExploreCard";
const HomePageExploreHostSection = () => {
	const data = [1, 2, 3, 4, 5];

	return (
		<Container
			maxWidth="xl"
			sx={{
				paddingBottom: "48px",
			}}
		>
			<Container
				sx={{
					textAlign: "center",
					marginTop: "24px",
					marginBottom: "24px",
				}}
			>
				<SectionHeading
					content={
						<div>
							Explore a{" "}
							<HeadingGradientTypography
								title={` new way of sharing!`}
								gradient={`linear-gradient(269.4deg, #145277 -8.79%, #83D0CB 118.54%)`}
							/>
						</div>
					}
				/>
				<Typography
					sx={{
						fontWeight: 400,
						fontSize: "22px",
						lineHeight: "26px",
						textAlign: "center",
						maxWidth: "850px",
						margin: "auto",
						paddingTop: "32px",
					}}
				>
					Presenting <strong> Knowledge Sessions</strong> - a brand
					new way to help you inspire others with your knowledge &
					experiences.
				</Typography>
			</Container>
			<Grid
				container
				spacing={2}
				// paddingTop="16px"
			>
				<Grid item xs={12} md={6}>
					<StyledHivepathImage
						fileName={`homepage/host-offering.png`}
						style={{
							borderRadius: "20px",
						}}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<Grid
						container
						spacing={2}
						sx={{
							paddingTop: { md: "80px", xs: "8px" },
						}}
					>
						{contentList.map((item) => (
							<Grid
								item
								md={6}
								xs={12}
								sx={{
									marginTop: {
										md: item.marginTop && item.marginTop,
										xs: "-8px",
									},
								}}
							>
								<HPExploreCard
									title={item.title}
									description={item.description}
									bgImg={item.bgImg}
								/>
							</Grid>
						))}
					</Grid>
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
				{" "}
				<PrimaryButton title={`Learn more`} />
			</div>
		</Container>
	);
};

export default HomePageExploreHostSection;

const contentList = [
	{
		title: `Title`,
		description: `Introduces you to the main topic & objective of the session.`,
		bgImg: "homepage/hosts/1.png",
	},
	{
		title: `Cover image`,
		description: `Offers you a visual representation of the session topic. `,
		marginTop: "48px",
		bgImg: "homepage/hosts/2.png",
	},
	{
		title: `Description`,
		description: `Takes you to the detailed version of the session and its various benefits.`,
		marginTop: "-32px",
		bgImg: "homepage/hosts/3.png",
	},
	{
		title: `Hashtags`,
		description: `Additional keywords related to the topic for wider reach & engagement.  `,
		bgImg: "homepage/hosts/4.png",
	},
	{
		title: `Prerequisites`,
		description: `A set of requirements to help you select an ideal session. `,
		bgImg: "homepage/hosts/5.png",
		marginTop: "-16px",
	},
];
