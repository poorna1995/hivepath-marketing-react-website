import { useStaticQuery } from "gatsby";
import React from "react";

import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { styled } from "@mui/material";

const HivepathImage = ({ fileName, alt, style, ...props }) => {
	const { allFile } = useStaticQuery(graphql`
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
	`);
	const image = allFile?.nodes.find((n) => n.relativePath === fileName)
		?.childImageSharp?.gatsbyImageData;

	return <GatsbyImage image={image} alt={alt} style={style} {...props} />;
};

// export default HivepathImage;

const StyledHivepathImage = styled(HivepathImage)(({ theme, ...props }) => ({
	...props,
}));

export default StyledHivepathImage;
