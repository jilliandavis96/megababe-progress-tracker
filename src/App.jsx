import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClassForm from "./components/ClassForm";
import ClassList from "./components/ClassList";
import About from "./components/About";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [classes, setClasses] = useState(() => {
    const saved = localStorage.getItem("classes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("classes", JSON.stringify(classes));
  }, [classes]);

  const addClass = (newClass) => {
    setClasses([newClass, ...classes]);
  };

  const deleteClass = (id) => {
    setClasses(classes.filter((c) => c.id !== id));
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" ? (
        <main>
          <ClassForm addClass={addClass} />
          <ClassList classes={classes} deleteClass={deleteClass} />
        </main>
      ) : (
        <About />
      )}

      <Footer />
    </div>
  );
}

export default App;