const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.get('/api/users', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok',
        metadata: [
            {
                name: 'drkhaik',
                age: 24
            },
            {
                name: 'ronaldo',
                age: 41
            },
            {
                name: 'messi',
                age: 39
            }
        ]
    })
})

module.exports = router;