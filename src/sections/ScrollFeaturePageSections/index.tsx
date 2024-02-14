import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Scrollspy from "react-scrollspy";
import { Scrollspy } from "@makotot/ghostui";
import { useRef } from "react";

import { makeStyles } from "@mui/styles";
import StyledHivepathImage from "../../components/Common/HivepathImage";
const useStyles = makeStyles((theme) => ({
	root: {
		// width: "50%",
		// height: "400px",
		// overflow: "scroll",
		// position: "sticky",
	},
}));

const SIZE = 5;
const list = new Array(SIZE).fill(0);

const ScrollFeaturePageSection = () => {
	const classes = useStyles();
	const containerRef = useRef();

	const sectionRefs = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
	];

	return (
		<div
			className={classes.root}
			style={
				{
					// paddingTop: "64px",
				}
			}
		>
			<Scrollspy sectionRefs={sectionRefs} offset={-300}>
				{({ currentElementIndexInViewport }) => (
					<div
						style={{
							display: "flex",
							// alignItems:''
							width: "100%",
							justifyContent: "space-between",
							alignItems: "stretch",
							flex: 1,
						}}
					>
						<div
							style={{
								flex: 0.5,
								paddingLeft: "64px",
								paddingRight: "64px",
							}}
						>
							<ul
								data-cy="nav-wrapper"
								style={{
									listStyle: "none",
									// position: "fixed",
									// top: 0,
									// right: 0,
									backgroundColor: "#fff",
									padding: "1rem",
									position: "sticky",
									top: "50px",
								}}
							>
								{linkTitles.map((item, i) => {
									const isInViewPort =
										currentElementIndexInViewport === i;

									return (
										<li
											key={i}
											className={
												isInViewPort ? "active" : ""
											}
											style={{
												marginTop: "32px",
												marginBottom: "32px",
											}}
										>
											<a
												href={`#section-${i}`}
												style={{
													color: isInViewPort
														? "black"
														: "rgba(34, 34, 34, 0.3)",
													fontSize: "32px",
													fontWeight: "700",
													textDecoration: "none",
												}}
											>
												{item.title}
											</a>
										</li>
									);
								})}
							</ul>
						</div>

						<div
							data-cy="section-wrapper"
							style={{
								flex: 0.5,
								// position: "sticky",
								// top: "200px",
								// position: "relative",
								// height: "800px",
							}}
						>
							{linkTitles.map((item, i) => {
								const isInViewPort =
									currentElementIndexInViewport === i;

								return (
									<div
										id={`section-${i}`}
										key={i}
										ref={sectionRefs[i]}
										className={isInViewPort ? "active" : ""}
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											height: "400px",
											width: "100%",
											marginTop: "32px",

											// backgroundColor:
											// isInViewPort
											// ?
											// "red",
											// : "transparent",
											// color: "#fff",
											// fontSize: "2rem",
											// opacity: isInViewPort ? 1 : 0,
											// transition: "opacity .4s ease .5s",
											// transform: isInViewPort
											// 	? "none"
											// 	: "translateY(-50%)",
											// transformOrigin: "bottom right",
											// position: "absolute",
											// top: "0",
											// left: 0,
										}}
									>
										{/* {i} */}
										<StyledHivepathImage
											fileName={item.imgUrl}
											style={{
												height: "inherit",
												width: "inherit",
												borderRadius: "20px",
												objectFit: "contain",
											}}
										/>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</Scrollspy>
		</div>
	);
};

export default ScrollFeaturePageSection;

const linkTitles = [
	{
		title: "Customize Headlines to express yourself. ",
		imgUrl: "profile/features/img1.png",
	},
	{
		title: "Upload & change cover images from our presets.",
		imgUrl: "profile/features/img2.png",
	},
	{
		title: "Share your work & academic journey. ",
		imgUrl: "profile/features/img3.png",
	},
	{
		title: "Highlight your skills and level of expertise.",
		imgUrl: "profile/features/img4.png",
	},

	{
		title: "Let people know what languages you speak.",
		imgUrl: "profile/features/img5.png",
	},
];
