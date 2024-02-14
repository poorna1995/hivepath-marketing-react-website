import { Container, Grid } from "@mui/material";
import React from "react";
import ContentWithBackgroundImageGrid from "../../../components/Common/ContentWithBackgroundImage/ContentWithBackgroundImageGrid";
import HivepathImage from "../../../components/Common/HivepathImage";
import MoreSectionTextContainer from "./MoreSectionTextContainer";
import RandomChipsContainer from "./RandomChipsContainer";

const MoreSection = () => {
	return (
		<ContentWithBackgroundImageGrid
			bgImageFileName={`become-host/5thSection_bg.png`}
			// style={{
			// 	position: "relative",
			// }}
		>
			<Container
				maxWidth="xl"
				style={
					{
						// paddingTop: "32px",
					}
				}
			>
				<Grid container>
					<Grid item md={6}>
						<MoreSectionTextContainer />
						<HivepathImage
							fileName={`become-host/more-section/more.png`}
							style={{ maxHeight: "400px", width: "600px" }}
						/>
					</Grid>
					<Grid
						item
						md={6}
						sx={{
							paddingBottom: {
								md: "inherit",
								sm: "32px",
							},
						}}
					>
						<RandomChipsContainer />
					</Grid>
				</Grid>
			</Container>
		</ContentWithBackgroundImageGrid>
	);
};

export default MoreSection;
