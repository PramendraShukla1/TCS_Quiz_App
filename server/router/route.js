import { Router } from "express";
import * as  controller from "../controllers/controller.js"

const router = Router();

/**Questions Routes */
router.route('/questions')
.get(controller.getQuestions)
.post(controller.insertQuestions)
.delete(controller.dropQuestion)

/**Result Routes */
router.route('/result')
.get(controller.getResult)
.post(controller.storeResult)
.delete(controller.dropResult)





export default router