const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router();

router.get(
  '/contacts',
    (req, res, next) => {
    req.appId = 'MeuAppID';
    next();
  },
  ContactController.index
);

router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);

router.get('/category', CategoryController.index);
router.post('/category', CategoryController.store);
router.delete('/category/:id', CategoryController.delete);

module.exports = router;
