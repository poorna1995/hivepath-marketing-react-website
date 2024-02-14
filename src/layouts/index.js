import React from "react";
import { Box, Toolbar } from "@mui/material";
import AppHeader from "../components/AppHeader";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
	return (
		<Box>
			<AppHeader />
			{/* <Toolbar
            //  style={{ height: "80px" }} 
             /> */}
			{children}
			<Footer />
		</Box>
	);
};

export default MainLayout;
