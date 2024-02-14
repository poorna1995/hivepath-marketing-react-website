import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";

const GbiBridged = ({ fileName }) => {
	const { allFile } = useStaticQuery(
		graphql`
			query {
				allFile(filter: { sourceInstanceName: { eq: "images" } }) {
					nodes {
						relativePath
						childImageSharp {
							gatsbyImageData(
								layout: FULL_WIDTH
								formats: WEBP
								placeholder: BLURRED
							)
						}
					}
				}
			}
		`,
	);

	const file = allFile?.nodes.find((n) => n.relativePath === fileName)
		?.childImageSharp?.gatsbyImageData;

	const image = getImage(file);

	// Use like this:
	const bgImage = convertToBgImage(image);
	console.log({ image, bgImage, file });
	return (
		<BackgroundImage
			Tag="section"
			// Spread bgImage into BackgroundImage:
			{...bgImage}

			// fluid={file}
			// preserveStackingContext
			// backgroundColor="red"
			// {...file}
		>
            <div 	style={{
				background: `url(${file.images.fallback.src})`,
                height:'100%',
                width:'100%'
			}}
		>

            </div>
			{/* <div style={{ minHeight: "100%", minWidth: "100%" }}>
				<GatsbyImage image={image} alt={"testimage"} />
			</div> */}
		</BackgroundImage>
	);
};

const StyledBackground = styled(GbiBridged)(() => ({
	width: "100%",
	height: "100%",
	backgroundPosition: "bottom center",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
}));
export default StyledBackground;
