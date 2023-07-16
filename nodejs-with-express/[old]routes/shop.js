const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');
const adminData = require('./admin');
const router = express.Router();

router.get("/", (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = adminData.products;
    res.render('shop', { docTitle: 'Shop', prods: products });
});


module.exports = router;