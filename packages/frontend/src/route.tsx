import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import { Layout } from "./components/Layout";
import { Hello } from "./features/hello/pages/Hello";
import { Index } from "./features/index/pages/Index";

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Index />,
});

const helloRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/hello",
  component: () => <Hello />,
});

const routeTree = rootRoute.addChildren([indexRoute, helloRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
