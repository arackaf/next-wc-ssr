const fs = require("fs");
const path = require("path");

const shoelaceOutputPath = path.join(process.cwd(), "shoelace-dir");
const publicShoelacePath = path.join(process.cwd(), "public", "shoelace");

const files = fs.readdirSync(shoelaceOutputPath);

const shoelaceBundlePath = files.find((name) => /^shoelace-bundle/.test(name));

fs.rmSync(publicShoelacePath, { force: true, recursive: true });

fs.mkdirSync(publicShoelacePath, { recursive: true });
fs.renameSync(path.join(shoelaceOutputPath, shoelaceBundlePath), path.join(publicShoelacePath, shoelaceBundlePath));
fs.rmSync(shoelaceOutputPath, { force: true, recursive: true });
