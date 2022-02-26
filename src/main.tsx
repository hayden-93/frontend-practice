import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./index.css";

import App from "./App";
import { Home, Projects, ProjectsHome } from "./routes";

import { NFTPreviewCard, StatsCard, TestimonialsGrid } from "./projects";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />}>
            <Route path="nft-preview-card" element={<NFTPreviewCard />} />
            <Route path="testimonials-grid" element={<TestimonialsGrid />} />
            <Route path="stats-card" element={<StatsCard />} />
            <Route path="order-summary-card-component" element={""} />

            <Route index element={<ProjectsHome />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <>
              <h1>Oops, looks like you can't find this page!</h1>
              <Link to="/">Go to Home</Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
