// src/pages/Home.jsx
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Joyride from "react-joyride";
import { useNavigate } from "react-router-dom";
import { useTour } from "../context/TourContext";
import "/Users/josh/Desktop/Pernell Project/clothing-website/src/App.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [tutorialDone, setTutorialDone] = useState(false);
  const [ready, setReady] = useState(false);

  const { runTour, setRunTour, stepIndex, setStepIndex, steps } = useTour();
  const navigate = useNavigate();

  // Wait for .submit-button to exist before launching Joyride
  useEffect(() => {
    const check = setInterval(() => {
      const btn = document.querySelector('.submit-button');
      if (btn) {
        console.log("✅ Found .submit-button");
        setReady(true);
        clearInterval(check);
      }
    }, 100);
    return () => clearInterval(check);
  }, []);

  // Start Joyride once ready
  useEffect(() => {
    if (ready && runTour) {
      console.log("🎯 Joyride is ready to start");
    }
  }, [ready, runTour]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email submitted: ${email}`);
  };

  return (
    <div className="full-background">
      {ready && (
        <>
          {console.log("🎯 Joyride mounted")}
          <Joyride
            steps={steps}
            run={runTour}
            stepIndex={stepIndex}
            continuous
            showProgress
            showSkipButton
            scrollToFirstStep
            scrollToSteps
            callback={(data) => {
              const { status, index, type } = data;

              if (type === 'step:after') {
                const next = index + 1;
                setStepIndex(next);
                if (next === 2) navigate('/projects');
                if (next === 3) navigate('/customizer');
                if (next === 4) navigate('/products');
              }

              if (['finished', 'skipped'].includes(status)) {
                setRunTour(false);
                setStepIndex(0);
                setTutorialDone(true);
              }
            }}
            styles={{
              options: {
                zIndex: 10000,
                primaryColor: "#ff914d",
              },
            }}
            locale={{
              back: "Back",
              close: "Close",
              last: "Done",
              next: "Next",
              skip: "Skip",
            }}
          />
        </>
      )}

      {!tutorialDone && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            pointerEvents: "all",
            cursor: "not-allowed",
          }}
        />
      )}

      <Navbar />

      <div
        style={{
          position: "absolute",
          top: "90.5%",
          left: "48.5%",
          transform: "translate(-50%, -50%)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <form onSubmit={handleSubmit} className="email-container">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="email-input"
          />
          <br />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
