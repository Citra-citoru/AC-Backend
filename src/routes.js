/** Simple routes only for calling the accial capital APIs */
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/api/borrowers',controller.createBorrower);
router.post('/api/:borrowerId/applications',controller.createApplication);
router.post('/api/loans',controller.createLoan);
router.post('/api/:loanId/payments',controller.createPayment);
router.get('/api/countries', controller.getCountries);
router.get('/api/products', controller.getProducts);
router.get('/api/currencies', controller.getCurrencies);

module.exports = router;