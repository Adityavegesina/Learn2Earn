import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/Login/LoginPage";
import RegisterPage from "./components/Register/RegisterPage";
import SchoolHome from "./components/School/SchoolHome";
import StudentHome from "./components/Student/StudentHome";
import Learning from "./components/Student/Learning";
import Quizzes from "./components/Student/Quizzes";
import QuizPage from "./components/Student/QuizPage";
import AddStudentPage from "./components/Student/AddStudentPage";
import GenerateQuizPage from "./components/School/GenerateQuizPage";
import Learning1 from "./components/HomePage/Learning1";
import Contact from "./components/HomePage/Contact";
import Learning2 from "./components/School/Learning2";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route exact path="/home" element={<HomePage />} />
      <Route exact path="/loginpage" element={<LoginPage />} />
      <Route exact path="/registerpage" element={<RegisterPage />} />
      <Route exact path="/schoolhome" element={<SchoolHome />} />
      <Route exact path="/studenthome" element={<StudentHome />}></Route>
      <Route exact path="/learning" element={<Learning />} />
      <Route exact path="/quizzes" element={<Quizzes />} />
      <Route exact path="/quizpage" element={<QuizPage />} />
      <Route exact path="/addstudentpage" element={<AddStudentPage />} />
      <Route exact path="/generatequiz" element={<GenerateQuizPage />} />
      <Route exact path="/learning1" element={<Learning1 />} />
      <Route exact path="/learning2" element={<Learning2 />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
