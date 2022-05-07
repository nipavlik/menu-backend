import express from "express";

import menuRouter from "./routes/menu.route";
import categoryRouter from "./routes/category.route";

const app = express();

app.use(express.json());

app.use("/menu", menuRouter);
app.use("/category", categoryRouter);

app.listen(3000, () => console.log("Сервер запущен на: http://localhost:3000"));
