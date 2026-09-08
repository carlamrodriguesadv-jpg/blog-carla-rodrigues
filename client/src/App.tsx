import ArticleDetail from "@/pages/ArticleDetail";
import Articles from "@/pages/Articles";
import About from "@/pages/About";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/artigos" component={Articles} /><Route path="/artigos/:slug" component={ArticleDetail} /><Route path="/sobre" component={About} /><Route component={NotFound} /></Switch>;
}

export default function App() {
  const base = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL.replace(/\/$/, "");
  return <ErrorBoundary><WouterRouter base={base}><Router /></WouterRouter></ErrorBoundary>;
}
