import { useEffect, useState } from "react";
// import "./App.css";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Dashboard from "./components/Dashboard/Dashboard";
import Animations from "./components/Animations";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate user login
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setShowSplash(true);
      // splash screen duration
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 7000); // Splash screen shows for 7 seconds
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [isLoggedIn]);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!isLoggedIn ? (
        <button
          style={{ width: "300px", height: "100px", backgroundColor: "blue" ,color:"white",fontSize:"40px"}}
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      ) : showSplash ? (
        <SplashScreen />
      ) : (
        <Dashboard />
      )}
    </div>
    
  );
}

export default App;
