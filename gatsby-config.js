module.exports = {
	siteMetadata: {
		title: "Hivepath",
		siteUrl: "https://hivepath.io",
		description: `Enter into the world of professional hives with Hivepath, an all-in-one networking platform for a hassle-free professional journey. `,
		author: "thenameismohit",
		keywords: ["Marketing", "Networking", "Professional", "Students"],
		image: `src/images/website-preview.png`,
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		`gatsby-plugin-material-ui`,
		`gatsby-plugin-emotion`,
		"gatsby-plugin-layout",
		`gatsby-plugin-no-sourcemaps`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Lato\:100,300,400,700,900`,
					// ``, // you can also specify font weights and styles
				],
				display: "swap",
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
	],
};
