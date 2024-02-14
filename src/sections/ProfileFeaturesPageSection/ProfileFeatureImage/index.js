import { Box } from "@mui/material";
import React from "react";
import StyledHivepathImage from "../../../components/Common/HivepathImage";

const ProfileFeatureImage = () => {
	return (
		<Box
			sx={{
				position: "relative",
				height: "800px",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					top: "-360px",
					width: "100%",
					height: "100%",
				}}
			>
				<StyledHivepathImage
					fileName={`profile/banner.png`}
				/>
			</Box>
		</Box>
	);
};

export default ProfileFeatureImage;
