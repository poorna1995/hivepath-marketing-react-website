import { Typography } from "@mui/material";
import React from "react";
import HivepathImage from "../../../components/Common/HivepathImage";

const FeatureCard = ({ imgSrc, title, description }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				padding: "16px",
				textAlign: "center",
			}}
		>
			<HivepathImage
				fileName={imgSrc}
				style={{
					borderRadius: "20px",
					height: "200px",
					width: "300px",
				}}
			/>
			<Typography
				style={{
					fontWeight: 700,
					fontSize: "32px",
					paddingTop: "16px",
					paddingBottom: "16px",
				}}
			>
				{title}
			</Typography>
			<Typography
				style={{
					fontWeight: 400,
					fontSize: "21px",
				}}
			>
				{description}
			</Typography>
		</div>
	);
};

export default FeatureCard;
