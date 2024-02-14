import { Container, Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "../../../components/Common/Buttons/PrimaryButton";
import ContentWithBackgroundImageGrid from "../../../components/Common/ContentWithBackgroundImage/ContentWithBackgroundImageGrid";
import HivepathImage from "../../../components/Common/HivepathImage";
import GradientText from "../../../components/Common/Typography/GradientText";

const BecomeHostFooterSection = () => {
	return (
		<Container
			style={{
				textAlign: "center",
				paddingBottom: "48px",
			}}
		>
			<GradientText
				style={{
					fontSize: "36px",
					fontWeight: "700",
					lineHeight: "70px",
					paddingTop: "32px",
					paddingBottom: "32px",
				}}
				gradient={`linear-gradient(90.8deg, #0645AD 3.43%, #C92424 85.88%)`}
			>
				You are just a click away!
			</GradientText>
			<ContentWithBackgroundImageGrid
				bgImageFileName={`become-host/6thsection_bg.png`}
				bgImageStyles={{
					height: "280px",
					borderRadius: "20px",
				}}
				containerStyles={{
					height: "280px",
					borderRadius: "20px",
				}}

				// style={{
				// 	position: "relative",
				// }}
			>
				{/* <HivepathImage
					fileName={`become-host/6thsection_bg.png`}
					style={{
						height: "280px",
						borderRadius: "20px",
					}}
				/> */}

				<div
					style={
						{
							// position: "absolute",
							// top: "0px",
							// width: "100%",
							// height: "100%",
						}
					}
				>
					<Container
						style={{
							textAlign: "center",
							// paddingTop: "32px",
							maxWidth: "900px",
						}}
					>
						<Typography
							style={{
								fontSize: "32px",
								lineHeight: "38px",
								fontWeight: "700",
							}}
						>
							Become a Host!
						</Typography>
						<Typography
							style={{
								fontSize: "21px",
								lineHeight: "38px",
								fontWeight: "400",
							}}
						>
							Share unique experiences & knowledge on your
							professional journey, expertise, academic growth,
							and anything you see fit with Hivepath’s new way of
							sharing by becoming a Host!
						</Typography>
						<div
							style={{
								marginTop: "16px",
							}}
						>
							<PrimaryButton />
						</div>
					</Container>
				</div>
			</ContentWithBackgroundImageGrid>
		</Container>
	);
};

export default BecomeHostFooterSection;
