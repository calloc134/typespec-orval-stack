import { Header } from "./Header";
import { Footer } from "./Footer";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">
        <ErrorBoundary fallback={<div>Something went wrong!</div>}>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
