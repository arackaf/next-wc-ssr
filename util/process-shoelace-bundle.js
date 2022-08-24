const fs = require("fs");
const path = require("path");

const shoelaceOutputPath = path.join(process.cwd(), "shoelace-dir");
const publicShoelacePath = path.join(process.cwd(), "public", "shoelace");

const files = fs.readdirSync(shoelaceOutputPath);

const shoelaceBundleFile = files.find((name) => /^shoelace-bundle/.test(name));

fs.rmSync(publicShoelacePath, { force: true, recursive: true });

fs.mkdirSync(publicShoelacePath, { recursive: true });
fs.renameSync(path.join(shoelaceOutputPath, shoelaceBundleFile), path.join(publicShoelacePath, shoelaceBundleFile));
fs.rmSync(shoelaceOutputPath, { force: true, recursive: true });

fs.writeFileSync(path.join(process.cwd(), "util", "shoelace-bundle-info.js"), `export const shoelacePath = "/shoelace/${shoelaceBundleFile}";`);
