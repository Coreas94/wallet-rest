const express = require("express");
const router = express.Router();
const walletController = require("../controllers/walletController");

router.post("/registrar", walletController.registrar);
router.post("/recargar", walletController.recargar);
router.post("/pagar", walletController.pagar);
router.post("/confirmar", walletController.confirmar);
router.get("/consultar", walletController.consultar);

module.exports = router;
