import multer from "multer";
import path from "path";

// // Define storage configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Upload directory
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
//   }
// });

// // Export upload middleware
// export const upload = multer({ storage: storage });

export const upload = multer({ storage: multer.diskStorage({}) });
