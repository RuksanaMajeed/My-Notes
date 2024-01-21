import * as React from "react";
import "./App.css";
import IconButton from "@mui/material/IconButton";
import { Menu } from "@mui/icons-material";
import { useCallback, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import SideNav from "./components/NavBar/SideVav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CreateTodo from "./components/Pages/CreateTodo";
import About from "./components/Pages/About";
import Trash from "./components/Pages/Trash";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateTodo />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
