import { Container, Typography } from "@mui/material";
import React from "react";
import CheckUsernameAvailability from "../../../components/CheckUsernameAvailability";
import ContentWithBackgroundImage from "../../../components/Common/ContentWithBackgroundImage";
import ContentWithBackgroundImageGrid from "../../../components/Common/ContentWithBackgroundImage/ContentWithBackgroundImageGrid";

const HomePageFooterSection = () => {
	return (
		<Container
			sx={{
				marginTop: "64px",
				marginBottom: "64px",
			}}
		>
			<ContentWithBackgroundImageGrid
				bgImageFileName={`homepage/footer-bg.png`}
				containerStyles={{
					maxHeight: "270px",
					overflow: "hidden",
				}}
				bgImageStyles={{
					borderRadius: "20px",
				}}
			>
				<div
				// style={{
				// 	position: "absolute",
				// 	top: "0px",
				// 	width: "100%",
				// 	height: "100%",
				// }}
				>
					<Container sx={{ textAlign: "center",
					//  paddingTop: "32px"
					  }}>
						<Typography
							sx={{
								fontWeight: 700,
								fontSize: "32px",
								lineHeight: "38px",
								letterSpacing: "0.02em",
								color: "#222222",
							}}
						>
							Claim your username today!
						</Typography>
						<Typography
							sx={{
								fontWeight: 400,
								fontSize: "21px",
								lineHeight: "29px",
								letterSpacing: "0.02em",
								color: "#000000",
							}}
						>
							Provide an impactful username and join our network
							of amazing minds.
						</Typography>
						<CheckUsernameAvailability />
					</Container>
				</div>
			</ContentWithBackgroundImageGrid>
		</Container>
	);
};

export default HomePageFooterSection;
