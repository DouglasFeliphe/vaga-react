import bodymovin from "react-bodymovin";

export const animation = bodymovin.loadAnimation({
  // animationData: { /* ... */ },
  container: document.getElementById("icon-container"), // required
  path: "1818-success-animation.json", // required
  renderer: "svg", // required
  loop: true, // optional
  autoplay: true, // optional
  name: "Demo Animation", // optional
});
