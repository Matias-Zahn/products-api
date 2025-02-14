import express from "express";
import cors from "cors";
import { router } from "./routes";
import { envs } from "./config/enviroments";
import dbConnect from "./config/mongoDb";

const app = express();

app.use(cors()); // Habilita el uso de nuestra API para diferetes direcciones ip, es dcir para otras computadoras
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

dbConnect()
  .then(() => {
    console.log("Conexion a la base de datos exitosa");
    app.listen(envs.PORT, () =>
      console.log(`Servidor corriendo en el puerto ${envs.PORT}`)
    );
  })
  .catch((error) => {
    console.log("Hubo un error con la conexion a la base de datos");
    console.error(error);
  });

app.all("/*", (req, res) => {
  res.status(404).json({
    error: `Direccion: ${req.originalUrl} no fue encontrada dentro de esta API`,
  });
});

export default app;
