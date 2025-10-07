import { Box } from "@mui/material";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import { Sidebar } from "./Sidebar";

function App() {
	return (
		<Box sx={{ display: "flex", minHeight: "100vh" }}>
			<Sidebar />
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					marginLeft: "250px",
					display: "flex",
					flexDirection: "column",
					minHeight: "100vh",
				}}
			>
				<Header />
				<MainContent />
			</Box>
		</Box>
	);
}

export default App;
