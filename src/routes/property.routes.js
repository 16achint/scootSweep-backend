import { Router } from "express";
import { verifyProperty } from "../middlewares/auth.middleware.js";
import propertyService from "../services/property.service.js";

const router = Router();

router.route("/feedback").post(verifyProperty, propertyService.feedback);
router.route("/").delete(verifyProperty, propertyService.deleteProperty);

export default router;
