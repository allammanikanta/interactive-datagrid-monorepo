import './App.css';

import { Typography } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CustomDataGrid from "./components/DataGrid/DataGrid";

const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Typography
          variant="h5"
          component="h2"
          sx={{ m: 2, ml: 0, color: "#343c6a" }}
        >
          Interactive Data Grid
        </Typography>

        <CustomDataGrid />
      </div>
    </QueryClientProvider>
  );
}

export default App;
