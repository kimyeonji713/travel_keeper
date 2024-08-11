import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";
import { PageNotFound } from "./pages/PageNotFound";
import { MainPage } from "./pages/main/MainPage";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Notice } from "./pages/Notice";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.main} element={<MainPage />} />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signup} element={<SignUp />} />
        <Route path={routes.notice} element={<Notice />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
