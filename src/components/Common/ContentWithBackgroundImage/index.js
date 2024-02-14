import { Box } from "@mui/material";
import React from "react";
import HivepathImage from "../HivepathImage";

const ContentWithBackgroundImage = ({
	containerStyles,
	bgImageFileName,
	children,
	bgImageStyles,
}) => {
	return (
		<Box
			sx={{
				position: {
					md: "relative",
				},
			}}
			style={{
				...containerStyles,
			}}
		>
			<HivepathImage
				fileName={bgImageFileName}
				style={{ maxHeight: "inherit", ...bgImageStyles }}
			/>
			{children}
		</Box>
	);
};

export default ContentWithBackgroundImage;
