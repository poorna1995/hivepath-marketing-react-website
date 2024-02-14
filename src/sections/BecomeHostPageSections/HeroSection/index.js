import React from "react";
import ContentWithBackgroundImage from "../../../components/Common/ContentWithBackgroundImage";
import HivepathImage from "../../../components/Common/HivepathImage";
import HeroTextContainer from "./HeroTextContainer";

const HeroSection = () => {
	return (
		// <div
		// 	style={{
		// 		maxHeight: "800px",
		// 		overflow: "hidden",
		// 		position: "relative",
		// 	}}
		// >
		// 	<HivepathImage fileName={`become-host/landing-background.png`} />

		<ContentWithBackgroundImage
			containerStyles={{
				maxHeight: "800px",
				overflow: "hidden",
			}}
			bgImageFileName={`become-host/bg.png`}
		>
			<div
				style={{
					position: "absolute",
					top: "20vh",
					// left: "20%",
					width: "100%",
					height: "100%",
				}}
			>
				<HeroTextContainer />
			</div>

			{/* <HivepathImage
				fileName={`become-host/1st-section/people/1st.png`}
				style={{
					position: "absolute",
					top: "15vh",
					left: "20vh",
					height: "180px",
					width: "160px",
					objectFit: "contain",
				}}
			/>

			<HivepathImage
				fileName={`become-host/1st-section/people/3rd.png`}
				// style={{}}
				sx={{
					position: { md: "absolute", sm: "static" },
					display: {
						sm: "none",
						md: "block",
					},
					top: "15vh",
					right: "15vh",
					height: "150px",
					width: "235px",
				objectFit: "contain",
				}}
			/>

			<HivepathImage
				fileName={`become-host/1st-section/people/2nd.png`}
				style={{
					position: "absolute",
					top: "43vh",
					left: "18vw",
					height: "180px",
					width: "250px",
				objectFit: "contain",
				}}
			/>

			<HivepathImage
				fileName={`become-host/1st-section/people/4th.png`}
				style={{
					position: "absolute",
					top: "50vh",
					right: "18vw",
					height: "150px",
					width: "260px",
				objectFit: "contain",
				}}
			/> */}

			{/* <div
			style={{
				position: "absolute",
				bottom: "0vh",
				// left: "20%",
				width: "100%",
				height: "100%",
			}}
		> */}
			<HivepathImage
				fileName={`become-host/1st-section/1st.png`}
				style={{
					position: "absolute",
					bottom: "0vh",
					left: "8vw",
					// left: "20%",

					height: "300px",
					width: "300px",
				}}
			/>
			<HivepathImage
				fileName={`become-host/1st-section/2nd.png`}
				style={{
					position: "absolute",
					bottom: "0vh",
					left: "30vw",
					// left: "20%",

					height: "200px",
					width: "300px",
				}}
			/>
			<HivepathImage
				fileName={`become-host/1st-section/3rd.png`}
				style={{
					position: "absolute",
					bottom: "0vh",
					left: "52vw",
					// left: "20%",

					height: "280px",
					width: "300px",
					objectFit: "contain",
				}}
			/>
			<HivepathImage
				fileName={`become-host/1st-section/4th.png`}
				style={{
					position: "absolute",
					bottom: "0vh",
					left: "74vw",
					// left: "20%",

					height: "250px",
					width: "300px",
				}}
			/>
		</ContentWithBackgroundImage>

		// {/* </div> */}
		// </div>
	);
};

export default HeroSection;
