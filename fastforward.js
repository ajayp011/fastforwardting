(function () {
  const btn = document.createElement("button");
  btn.textContent = "16x boost";
  Object.assign(btn.style, {
    position: "fixed", top: "50%", right: "10px", zIndex: "9999",
    padding: "10px 15px", backgroundColor: "#1e88e5", color: "white",
    border: "none", borderRadius: "5px", fontSize: "16px", cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.3)", transform: "translateY(-50%)"
  });
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    const iframe = document.querySelector("iframe");
    if (!iframe) {
      alert("go to a page with a video assignment first");
      return;
    }

    try {
      const video = iframe.contentDocument?.querySelector("video");
      if (!video) {
        alert("go to a page with a video assignment first");
        return;
      }

      const speedInterval = setInterval(() => {
        video.playbackRate = 16;
        video.muted = true;
        video.play().catch(() => {});
        console.log("16x speed running...", video.currentTime.toFixed(2));
      }, 300);

      video.addEventListener("ended", () => {
        clearInterval(speedInterval);
        alert("video is done");
      });

      alert("fast-forwarding started");

    } catch (e) {
      alert("could not access the video");
    }
  });
})();
