import { Box } from "@mui/material";
import React from "react";
import HivepathImage from "../HivepathImage";

const ContentWithBackgroundImageGrid = ({
	containerStyles,
	bgImageFileName,
	children,
	bgImageStyles,
}) => {
	return (
		<Box
			sx={{
				display: "grid",
				...containerStyles,
			}}
			// style={{
			// 	...containerStyles,
			// }}
		>
			<HivepathImage
				fileName={bgImageFileName}
				style={{
					maxHeight: "inherit",
					gridArea: "1/1",
					...bgImageStyles,
				}}
			/>
			<Box
				sx={{
					gridArea: "1/1",
					position: "relative",
					// This centers the other elements inside the hero component
					placeItems: "center",
					display: "grid",
				}}
			>
				{children}
			</Box>
			{/* {children} */}
		</Box>
	);
};

export default ContentWithBackgroundImageGrid;
