import './App.css';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CustomDataGrid from "./components/DataGrid/DataGrid";

const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Interactive Data Grid</h1>
        <CustomDataGrid />
      </div>
    </QueryClientProvider>
  );
}

export default App;
