import { Typography } from "@mui/material";
import React from "react";
import GradientText from "../../../components/Common/Typography/GradientText";
import HeadingGradientTypography from "../../../components/Common/Typography/HeadingGradientTypography";
import SectionHeading from "../../../components/Common/Typography/SectionHeading";

const SectionTitle = () => {
	return (
		<div
			style={{ textAlign: "center", maxWidth: "1000px", margin: "auto" }}
		>
			<SectionHeading
				content={
					<div>
						Best things about becoming a{" "}
						<HeadingGradientTypography
							title={`Host!`}
							gradient={`linear-gradient(90.55deg, #AD336D 2.73%, #EB7957 99.65%)`}
						/>
					</div>
				}
			/>
			<Typography
				style={{
					fontWeight: " 400",
					fontSize: "21px",
					marginTop: "16px",
					marginBottom: "48px",
				}}
			>
				You get to share your knowledge & experiences to build a
				community of reliable networks who inspire one another to learn,
				adapt, and expand their digital footprint.
			</Typography>
		</div>
	);
};

export default SectionTitle;
