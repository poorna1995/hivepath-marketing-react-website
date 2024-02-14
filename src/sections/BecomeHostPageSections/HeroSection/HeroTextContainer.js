import { Container, Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "../../../components/Common/Buttons/PrimaryButton";
import GradientText from "../../../components/Common/Typography/GradientText";

const HeroTextContainer = () => {
	return (
		<Container sx={{ textAlign: "center" }} maxWidth="xl">
			<Typography
				sx={{
					fontSize: "48px",
					fontWeight: "800",
					lineHeight: "80px",
					color:'#364358'
				}}
			>
				Make Efficient Connections With
			</Typography>
			<GradientText
				style={{
					fontSize: "46px",
					fontWeight: "800",
					lineHeight: "80px",
				}}
				gradient={`linear-gradient(90.8deg, #696EFF 3.43%, #FF8957 85.88%)
                `}
			>
				Your Professional Journey
			</GradientText>
			<Typography
				sx={{
					fontWeight: 700,
					fontSize: "24px",
					lineHeight: "55px",
					textAlign: "center",
					color: "#141414",
				}}
			>
				In Hivepath's new way of sharing by becoming a Host!
			</Typography>

			<div
				style={{
					marginTop: "32px",
				}}
			>
				<PrimaryButton />
			</div>
		</Container>
	);
};

export default HeroTextContainer;
