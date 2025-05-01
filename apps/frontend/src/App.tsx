import './App.css';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CustomDataGrid from "./components/DataGrid/DataGrid";
import Footer from "./components/Footer";
import Header from "./components/Header";

const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <CustomDataGrid />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
