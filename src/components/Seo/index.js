import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
// import image from "../../images/website-preview.png";

function Seo({ description, lang, meta, title }) {
	const { site } = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					author
					keywords
					image
				}
			}
		}
	`);
	const metaDescription = description || site.siteMetadata.description;
	const keywords = site.siteMetadata?.keywords;
	const defaultTitle = site.siteMetadata?.title;
	const image = site.siteMetadata && site.siteMetadata.image;
	return (
		<Helmet
			htmlAttributes={{ lang }}
			title={title}
			defer={false}
			titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
			meta={[
				{
					name: "description",
					content: metaDescription,
				},
				{
					property: "og:title",
					content: title,
				},
				{
					property: "og:description",
					content: metaDescription,
				},
				{
					property: "og:type",
					content: "website",
				},
				{
					name: "twitter:card",
					content: "summary",
				},
				{
					name: "twitter:creator",
					content: site.siteMetadata?.author || "",
				},
				{
					name: "twitter:title",
					content: title,
				},
				{
					name: "image",

					content: `${image}`,
				},
				{
					property: `og:image`,
					content: `${image}`,
				},
				{
					name: "twitter:description",
					content: metaDescription,
				},
				{
					name: "keywords",
					content: keywords,
				},
			].concat(meta)}
		/>
	);
}

Seo.defaultProps = {
	lang: "en",
	meta: [],
	description: "",
};
Seo.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
};
export default Seo;
