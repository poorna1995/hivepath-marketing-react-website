import { Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "../../../components/Common/Buttons/PrimaryButton";

const MoreSectionTextContainer = () => {
	return (
		<div>
			<Typography
				style={{
					fontSize: "52px",
					lineHeight: "80px",
					fontWeight: 700,
					paddingBottom: "32px",
				}}
			>
				And there is more!
			</Typography>
			<Typography
				style={{
					fontSize: "18px",
					fontWeight: "400",
					lineHeight: "22px",
				}}
			>
				We are redefining networking features, packed with a new way of
				smart technology and research from ground zero.
			</Typography>
			<Typography
				style={{
					fontSize: "18px",
					fontWeight: "400",
					lineHeight: "22px",
					paddingTop: "16px",
					paddingBottom: "32px",
				}}
			>
				We believe in a world of smooth engagements and strive to
				provide our users with the best solutions at Hivepath.
			</Typography>
			<div
				style={{
					marginTop: "16px",
					marginBottom: "32px",
					paddingBottom: "32px",
				}}
			>
				<PrimaryButton />
			</div>
		</div>
	);
};

export default MoreSectionTextContainer;
