import { useState } from "react";
import Navbar from "../components/Navbar";
import emailjs from '@emailjs/browser';
import Joyride from 'react-joyride';
import { useTour } from '../context/TourContext';
import { useNavigate } from 'react-router-dom';

export default function Customizer() {
  const [clothing, setClothing] = useState("");
  const [fabric, setFabric] = useState("");
  const [comments, setComments] = useState("");
  const [image, setImage] = useState(null);

  const { runTour, stepIndex, setStepIndex, setRunTour } = useTour();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      clothing,
      fabric,
      comments,
      image: image ? image.name : "None",
    };

    emailjs
      .send(
        'service_5c60034',
        'template_cpvxxxh9',
        templateParams,
        'aqUc55vcq16uFIf9m'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert("Email sent successfully!");
        },
        (err) => {
          console.error('FAILED...', err);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <div>
      <Joyride
        steps={[
          {
            target: '.customizer-step',
            content: 'Start your custom design by picking the type of clothing you want!',
          }
        ]}
        run={runTour}
        stepIndex={stepIndex === 3 ? 0 : -1}
        continuous
        showProgress
        showSkipButton
        scrollToFirstStep
        scrollToSteps
        callback={(data) => {
          const { status, type } = data;

          if (type === 'step:after' && stepIndex === 3) {
            setStepIndex(4); // advance to final step
            navigate('/products');
          }

          if (['finished', 'skipped'].includes(status)) {
            setRunTour(false);
            setStepIndex(0);
          }
        }}
        styles={{
          options: {
            zIndex: 10000,
            primaryColor: '#ff914d',
          },
        }}
        locale={{
          back: 'Back',
          close: 'Close',
          last: 'Done',
          next: 'Next',
          skip: 'Skip',
        }}
      />

      <Navbar />
      <form
        onSubmit={handleSubmit}
        style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}
      >
        {/* Clothing Dropdown */}
        <label className="customizer-step">
          <strong>Choose Clothing Type:</strong>
          <select
            value={clothing}
            onChange={(e) => setClothing(e.target.value)}
            style={{
              display: "block",
              margin: "1rem 0",
              width: "100%",
              padding: "0.5rem",
            }}
          >
            <option value="">-- Select --</option>
            <option value="T-Shirt">T-Shirt</option>
            <option value="Hoodie">Hoodie</option>
            <option value="Jacket">Jacket</option>
            <option value="Hat">Hat</option>
          </select>
        </label>

        {/* Fabric Dropdown */}
        <label>
          <strong>Choose Fabric:</strong>
          <select
            value={fabric}
            onChange={(e) => setFabric(e.target.value)}
            style={{
              display: "block",
              margin: "1rem 0",
              width: "100%",
              padding: "0.5rem",
            }}
          >
            <option value="">-- Select --</option>
            <option value="Cotton">Cotton</option>
            <option value="Polyester">Polyester</option>
            <option value="Nylon">Nylon</option>
            <option value="Wool">Wool</option>
          </select>
        </label>

        {/* Comment Box */}
        <label htmlFor="comments">
          <strong>Tell us more about your design:</strong>
          <textarea
            id="comments"
            placeholder="Tell us more about your design..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            style={{ display: "block", margin: "1rem 0", width: "100%", padding: "0.5rem" }}
          />
        </label>

        {/* Image Upload */}
        <label>
          <strong>Upload an Image (Optional):</strong>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            style={{ display: "block", margin: "1rem 0" }}
          />
        </label>

        <button type="submit" style={{ padding: "0.75rem 1.5rem", marginTop: "1rem" }}>
          Submit
        </button>
      </form>
    </div>
  );
}





