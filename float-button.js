window.addEventListener("load", function () {
  setTimeout(function () {
    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
    if (!isMobile) return;

    const isOnHAUT = location.hostname.includes("haut.ai");
    if (isOnHAUT) return;

    if (document.getElementById('hautBackButton')) return;

    const wrapper = document.createElement("div");
    wrapper.id = "hautBackButton";
    wrapper.style.position = "fixed";
    wrapper.style.bottom = "20px";
    wrapper.style.left = "20px";
    wrapper.style.zIndex = "9999";

    const button = document.createElement("button");
    button.innerText = "🔙";
    button.title = "Back to analysis";

    button.onclick = function () {
      const iframeContainer = document.querySelector('#iframe-window');
      if (iframeContainer) {
        iframeContainer.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert("The skin analysis section isn't currently visible.");
      }
    };

    Object.assign(button.style, {
      width: "56px",
      height: "56px",
      border: "none",
      borderRadius: "50%",
      backgroundColor: "#2c75d9",
      color: "#fff",
      fontSize: "20px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    });

    wrapper.appendChild(button);
    document.body.appendChild(wrapper);
  }, 1000);
});
