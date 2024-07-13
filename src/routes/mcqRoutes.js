const express = require('express');
const router = express.Router();
const mcqController = require('../controllers/mcqController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/insert', authMiddleware, mcqController.insertMcqData);
router.get('/get_mcq_data', authMiddleware, mcqController.getMcqData);
router.get('/leader_board', authMiddleware, mcqController.getLeaderboard);

module.exports = router;
