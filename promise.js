function loadScript(scriptUrl) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement("script");
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      scriptElement.onerror = reject;
      document.head.appendChild(scriptElement);
    });
  }
  
  document.getElementById("loadScriptButton").addEventListener("click", () => {
    const scriptUrl = "path/to/your/script.js"; 
  
    loadScript(scriptUrl)
      .then(() => {
        
        document.getElementById("result").textContent = "Script loaded successfully!";
      })
      .catch(() => {
        
        document.getElementById("result").textContent = "Error loading the script.";
      });
  });
  
