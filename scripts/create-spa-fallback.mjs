import { access, copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, "..");
const indexPath = path.join(projectDirectory, "dist", "index.html");
const fallbackPath = path.join(projectDirectory, "dist", "404.html");

await access(indexPath);
await copyFile(indexPath, fallbackPath);

console.log("SPA fallback criado em dist/404.html.");
