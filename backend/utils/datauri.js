import DataUriParser from "datauri/parser.js";
import path from "path";

// This function converts a file object (with originalname and buffer) to a Data URI format
const getDataUri = (file) => {
  const parser = new DataUriParser();
  // Extracts the file extension (e.g., .png, .jpg) from the original file name
  const extName = path.extname(file.originalname).toString();
  // Formats the file buffer into a Data URI string with the correct file extension
  return parser.format(extName, file.buffer);
};

export default getDataUri;
