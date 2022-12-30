import express from 'express';
import homeController from '../controllers/homeController.';
<<<<<<< HEAD
import userControler from '../controllers/userController';
=======
import productController from '../controllers/productController';
>>>>>>> 5bd4c28af7e8158f5561786e16f3868de5704bba
let router = express.Router();

let initWebRoutes = (app) => {

    router.get('/', homeController.getHomePage);
    router.get('/getcrud', homeController.getCRUD)
    router.post('/post-crud', homeController.postCRUD)
    router.get('/display-crud', homeController.displayGetCRUD )

    router.get('/edit-crud', homeController.getEditCRUD)
    router.post('/put-crud', homeController.putCRUD)

<<<<<<< HEAD
    router.post('/api/login', userControler.handleLogin)
=======
    router.get('/get-all-product', productController.handleGetAllProduct)


>>>>>>> 5bd4c28af7e8158f5561786e16f3868de5704bba
    return app.use("/", router)

}

module.exports = initWebRoutes;