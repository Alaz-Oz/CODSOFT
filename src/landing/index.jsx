import React from 'react';
import { createRoot } from "react-dom/client";


function LandingPage() {
  return (
    <div>
      <h1>Welcome to the landing page</h1>
      <p>Click on the links above to navigate</p>
    </div>
  );
}


const root = document.createElement("div");
document.body.appendChild(root);
createRoot(root).render(<LandingPage />)