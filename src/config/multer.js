import multer from "multer";
import { __dirname } from "../path.js";

//Configuracion guardado imgs
const storageProducts = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/public/img/products`);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

//Middlware
export const uploadProds = multer({ storage: storageProducts });
