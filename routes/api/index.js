const router = require('express').Router();
const categoryRoutes = require('./catagory');
const productRoutes = require('./product');
const tagRoutes = require('./tag');

// Add a test route
router.get('/test', (req, res) => {
    res.json({ message: 'API is working!' });
  });

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;