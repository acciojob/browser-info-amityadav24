//your JS code here. If required.
const userAgent = navigator.userAgent;
let browserName = "Unknown Browser";
let version = "Unknown Version";

if (userAgent.includes("Chrome") && !userAgent.includes("Edge") && !userAgent.includes("OPR")) {
  browserName = "Chrome";
  version = userAgent.match(/Chrome\/([\d.]+)/)[1];
} else if (userAgent.includes("Firefox")) {
  browserName = "Firefox";
  version = userAgent.match(/Firefox\/([\d.]+)/)[1];
} else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
  browserName = "Safari";
  version = userAgent.match(/Version\/([\d.]+)/)[1];
} else if (userAgent.includes("Edge")) {
  browserName = "Edge";
  version = userAgent.match(/Edg\/([\d.]+)/)[1];
} else if (userAgent.includes("OPR")) {
  browserName = "Opera";
  version = userAgent.match(/OPR\/([\d.]+)/)[1];
}

const infoDiv = document.getElementById("browser-info");
infoDiv.innerText = `You are using ${browserName} version ${version}`;
