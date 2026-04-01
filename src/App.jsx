import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClassForm from "./components/ClassForm";
import ClassList from "./components/ClassList";
import About from "./components/About";
import "./App.css";

// App is the root component that holds all state and passes data to children via props
function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Load classes from localStorage on first render
  const [classes, setClasses] = useState(() => {
    const saved = localStorage.getItem("classes");
    return saved ? JSON.parse(saved) : [];
  });

  // Save classes to localStorage whenever the classes array changes
  useEffect(() => {
    localStorage.setItem("classes", JSON.stringify(classes));
  }, [classes]);

  // Add a new class to the top of the list
  const addClass = (newClass) => {
    setClasses([newClass, ...classes]);
  };

  // Delete a class by filtering out the matching id
  const deleteClass = (id) => {
    setClasses(classes.filter((c) => c.id !== id));
  };

  return (
    <div className="app">
      {/* Pass currentPage and setCurrentPage so Header can control navigation */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Conditionally render Home or About based on currentPage */}
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