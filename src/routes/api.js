import express from "express";
import contactController from "../controller/contact-controller.js";
import authMiddleware from "../middleware/auth-middleware.js";
import addressController from "../controller/address-controller.js";
const userRouter =  new express.Router();
userRouter.use(authMiddleware)

// Contact API
userRouter.post("/api/contact", contactController.createContactController);
userRouter.get("/api/contact/:contactId", contactController.getContactController);
userRouter.put("/api/contact/:contactId", contactController.updateContactController);
userRouter.delete("/api/contact/:contactId", contactController.deleteContactController);

// Address API
userRouter.post("/api/contact/:contactId/address", addressController.createAddressController);
userRouter.get("/api/contact/:contactId/address/:addressId", addressController.getAddressByIdController);
userRouter.put("/api/contact/:contactId/address/:addressId", addressController.updateAddressController);
userRouter.delete("/api/contact/:contactId/address/:addressId", addressController.deleteAddressController);

export default userRouter;