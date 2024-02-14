import { Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "../../../components/Common/Buttons/PrimaryButton";
import GradientText from "../../../components/Common/Typography/GradientText";
import HeadingGradientTypography from "../../../components/Common/Typography/HeadingGradientTypography";
import SectionHeading from "../../../components/Common/Typography/SectionHeading";

const UserLevelTitle = () => {
	return (
		<div
			style={{
				position: "sticky",
				top: "300px",
			}}
		>
			<SectionHeading
				content={
					<div>
						Everyone has something to
						<br />
						<HeadingGradientTypography
							title={`share!`}
							gradient={`linear-gradient(90.27deg, #FFA8BD 0.12%, #242ACF 113.4%)`}
						/>
					</div>
				}
			/>
			<Typography
				style={{
					fontSize: "22px",
					fontWeight: "500",
					lineHeight: "30px",
					paddingBottom: "32px",
					// position: "sticky",
					// top: "300px",
				}}
			>
				We believe everyone has something unique to share and offer our
				platform to help them inspire others.
			</Typography>

			<PrimaryButton
				style={
					{
						// position: "sticky",
						// top: "700px",
					}
				}
			/>
		</div>
	);
};

export default UserLevelTitle;
