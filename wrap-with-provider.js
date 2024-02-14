import React from "react";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
// import createStore from "./src/state/createStore"
// import { persistor, store } from "./src/store/store";
import appTheme from "./src/theme/index";

// eslint-disable-next-line react/display-name,react/prop-types
const wrapWithProvider = ({ element }) => {
	// Instantiating store in `wrapRootElement` handler ensures:
	//  - there is fresh store for each SSR page
	//  - it will be called only once in browser, when React mounts

	return (
		// <Provider store={store}>
		//   <PersistGate persistor={persistor}>
		<ThemeProvider theme={appTheme}>
			<CssBaseline />
			{element}
		</ThemeProvider>
		//   </PersistGate>
		// </Provider>
	);
};

export default wrapWithProvider;
