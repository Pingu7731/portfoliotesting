const fs = require("fs");
const path = require("path");

const TARGET_DIRS = ["./app", "./components"]; // 要掃的資料夾

// 要搜尋的關鍵字
const BROWSER_APIS = ["document", "window", "localStorage"];

function addUseClientIfNeeded(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  // 如果已經有 "use client"; 就跳過
  if (
    content.startsWith('"use client";') ||
    content.startsWith("'use client';")
  ) {
    return false;
  }

  const newContent = `"use client";\n\n${content}`;
  fs.writeFileSync(filePath, newContent, "utf8");
  console.log(`✨ Added "use client"; to ${filePath}`);
  return true;
}

function findBrowserApis(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const found = [];

  BROWSER_APIS.forEach((api) => {
    if (content.includes(api)) {
      found.push(api);
    }
  });

  if (found.length > 0) {
    console.log(`🚨 Found [${found.join(", ")}] in ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDir(fullPath); // 遞迴進資料夾
    } else if (file.endsWith(".tsx")) {
      addUseClientIfNeeded(fullPath);
      findBrowserApis(fullPath);
    }
  });
}

// 開始掃
TARGET_DIRS.forEach((dir) => {
  if (fs.existsSync(dir)) {
    walkDir(dir);
  } else {
    console.warn(`⚠️ Warning: ${dir} does not exist`);
  }
});

console.log("✅ Done fixing and scanning!");
