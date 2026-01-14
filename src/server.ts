import dotenv from "dotenv"; // .env faylini o'qish uchun maxsus package

dotenv.config(); // .env faylini yuklash:

// console.log("After:", process.env);

console.log("PORT:", process.env.PORT);

console.log("MONGO_URL:", process.env.MONGO_URL);
