function loadScript(scriptUrl) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement("script");
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      scriptElement.onerror = reject;
      document.head.appendChild(scriptElement);
    });
  }
  
  async function loadAndDisplayScript() {
    const scriptUrl = "path/to/your/script.js"; 
  try {
    await loadScript(scriptUrl);
      document.getElementById("result").textContent = "Script loaded successfully!";
    } catch (error) {
      document.getElementById("result").textContent = "Error loading the script.";
    }
  }
  
  document.getElementById("loadScriptButton").addEventListener("click", loadAndDisplayScript);
  
