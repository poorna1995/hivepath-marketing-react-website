import { Container, Grid } from "@mui/material";
import React from "react";
import ContentWithBackgroundImageGrid from "../../../components/Common/ContentWithBackgroundImage/ContentWithBackgroundImageGrid";
import HivepathImage from "../../../components/Common/HivepathImage";
import StepCardTextContainer from "./StepCardTextContainer";

const StepCard = ({
	imgSrc: backgroundImg,
	sideImage,
	id,
	title,
	description,
	data,
	chipData,
}) => {
	return (
		<ContentWithBackgroundImageGrid
			bgImageFileName={backgroundImg}
			bgImageStyles={{
				borderRadius: "30px",
			}}
			// style={{
			// 	position: "relative",
			// 	marginTop: "16px",
			// 	marginBottom: "16px",
			// }}
		>
			{/* <HivepathImage
				fileName={backgroundImg}
				style={{
					borderRadius: "30px",
				}}
			/> */}
			<div
				style={
					{
						// position: "absolute",
						// top: "16px",
						// left: "16px",
						// width: "100%",
						// height: "100%",
					}
				}
			>
				<Container maxWidth="xl">
					<Grid
						container
						//  paddingTop="64px"
					>
						<Grid
							item
							md={6}
							sm={12}
							paddingRight="32px"
							paddingLeft={`32px`}
						>
							<StepCardTextContainer
								number={id}
								title={title}
								description={description}
								data={data}
								chipData={chipData}
							/>
						</Grid>
						<Grid
							item
							md={6}
							sm={12}
							sx={{
								paddingTop: {
									md: "inherit",
									sm: "32px",
								},
								paddingBottom: { md: "inherit", sm: "32px" },
							}}
						>
							<HivepathImage
								fileName={sideImage}
								sx={{
									borderRadius: {
										md: "20px 0px 0px 20px",
										sm: "20px",
									},
									marginRight: { md: "-24px", sm: "0px" },
								}}
							/>
						</Grid>
					</Grid>
				</Container>
			</div>
		</ContentWithBackgroundImageGrid>
	);
};

export default StepCard;
