import { useState } from "react";
import Navbar from "../components/Navbar";
import emailjs from '@emailjs/browser';

export default function Customizer() {
  const [clothing, setClothing] = useState("");
  const [fabric, setFabric] = useState("");
  const [comments, setComments] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Template parameters for EmailJS
    const templateParams = {
      clothing,
      fabric,
      comments,
      image: image ? image.name : "None",
    };

    // Send email using EmailJS
    emailjs
      .send(
        'service_5c60034',       // Replace with your EmailJS service ID
        'template_cpvxxxh9',      // Replace with your EmailJS template ID
        templateParams,
        'aqUc55vcq16uFIf9m'        // Replace with your EmailJS public key
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
      <Navbar />
      <form
        onSubmit={handleSubmit}
        style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}
      >
        {/* Clothing Dropdown */}
        <label>
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




