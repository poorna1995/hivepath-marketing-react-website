import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import ContentWithBackgroundImageGrid from "../../../components/Common/ContentWithBackgroundImage/ContentWithBackgroundImageGrid";
const HPExploreCard = ({ title, description, bgImg }) => {
	return (
		<Card
			// bgImageFileName={bgImg}
			sx={{
				boxShadow: "none",
				background: "#F0F4FF",
				borderRadius: "20px",
				marginBottom: "24px",
				padding: "16px",
			}}
		>
			<CardContent>
				<Typography
					sx={{
						fontWeight: 700,
						fontSize: "24px",
						lineHeight: "29px",
						/* identical to box height */

						letterSpacing: "0.03em",

						color: "#222222",
					}}
				>
					{title}
				</Typography>
				<Typography
					sx={{
						fontWeight: 500,
						fontSize: "21px",
						lineHeight: "27px",
						/* identical to box height */

						letterSpacing: "0.03em",

						color: "#333333",
					}}
				>
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default HPExploreCard;
