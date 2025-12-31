import Index from "./pages/Index";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { useAutoTheme } from "@/hooks/useAutoTheme";
import { Analytics } from "@vercel/analytics/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

// Componente que ativa a troca automática de tema
const AutoThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  useAutoTheme();
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Analytics />
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <AutoThemeWrapper>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cotacao" element={<Quote />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AutoThemeWrapper>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
