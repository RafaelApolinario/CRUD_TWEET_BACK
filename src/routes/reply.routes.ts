import { Router } from "express";
import { RepliesController } from "../controllers";
import { Auth, ValidarFormatoId, VerificarIdUsuario } from "../middlewares";

export function replyRoutes() {
  const router = Router();
  const controller = new RepliesController();
  const validarFormatoId = new ValidarFormatoId();
  const verificarIdUsuario = new VerificarIdUsuario();
  const auth = new Auth();

  //CRIAR
  router.post(
    "/:id",
    [auth.validar, validarFormatoId.validar, verificarIdUsuario.validar],
    controller.criar
  );

  //ATUALIZAR
  router.put(
    "/:id",
    [auth.validar, validarFormatoId.validar],
    controller.atualizar
  );

  //DELETAR
  router.delete(
    "/:id",
    [auth.validar, validarFormatoId.validar],
    controller.deletar
  );

  return router;
}
