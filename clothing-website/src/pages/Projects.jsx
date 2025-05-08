import Navbar from "../components/Navbar";

export default function Projects() {
  const projects = [
    {
      title: "Custom Hoodie",
      description: "A warm, oversized hoodie made with organic cotton.",
      status: "Completed",
      image: "https://via.placeholder.com/300x200?text=Hoodie"
    },
    {
      title: "Denim Jacket",
      description: "Stylish, fitted denim jacket with custom embroidery.",
      status: "In Progress",
      image: "https://via.placeholder.com/300x200?text=Denim+Jacket"
    },
    {
      title: "Linen Pants",
      description: "Breezy linen pants, perfect for summer.",
      status: "Completed",
      image: "https://via.placeholder.com/300x200?text=Linen+Pants"
    }
  ];

  return (
    <div>
      <Navbar />
      <h2 style={{ textAlign: "center", marginTop: "1rem" }}>🧵 My Projects</h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "2rem"
      }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
            backgroundColor: "#fff"
          }}>
            <img src={project.image} alt={project.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{ padding: "1rem" }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span style={{
                display: "inline-block",
                marginTop: "0.5rem",
                padding: "0.3rem 0.6rem",
                backgroundColor: project.status === "Completed" ? "#4caf50" : "#ffc107",
                color: "#fff",
                borderRadius: "5px",
                fontSize: "0.85rem"
              }}>
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
