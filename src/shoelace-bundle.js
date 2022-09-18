import { setDefaultAnimation } from "@shoelace-style/shoelace/dist/utilities/animation-registry";

import "@shoelace-style/shoelace/dist/components/tab/tab.js";
import "@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js";
import "@shoelace-style/shoelace/dist/components/tab-group/tab-group.js";

import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";

setDefaultAnimation("dialog.show", {
  keyframes: [
    { opacity: 0, transform: "translate3d(0px, -20px, 0px)" },
    { opacity: 1, transform: "translate3d(0px, 0px, 0px)" },
  ],
  options: { duration: 250, easing: "cubic-bezier(0.785, 0.135, 0.150, 0.860)" },
});
setDefaultAnimation("dialog.hide", {
  keyframes: [
    { opacity: 1, transform: "translate3d(0px, 0px, 0px)" },
    { opacity: 0, transform: "translate3d(0px, 20px, 0px)" },
  ],
  options: { duration: 250, easing: "cubic-bezier(0.785, 0.135, 0.150, 0.860)" },
});
