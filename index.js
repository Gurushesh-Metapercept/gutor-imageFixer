const fs = require("fs-extra");
const path = require("path");

const inputDir = "./input";
const outputDir = "./output";

fs.ensureDirSync(outputDir);

const renameAndMoveFiles = async () => {
  try {
    const files = await fs.readdir(inputDir);

    for (const file of files) {
      const oldPath = path.join(inputDir, file);
      const newFileName = file.replace(/[ ,()]/g, "_");
      const newPath = path.join(outputDir, newFileName);

      await fs.move(oldPath, newPath);
      console.log(`Moved: ${oldPath} -> ${newPath}`);
    }

    console.log("All files have been renamed and moved.");
  } catch (err) {
    console.error("Error renaming and moving files:", err);
  }
};

renameAndMoveFiles();
