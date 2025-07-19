const express = require("express");
const router = express.Router();
const { 
  addIssue, 
  getAllIssues, 
  updateIssue, 
  deleteIssue 
} = require("../controllers/issueController");

router.post("/add", addIssue);
router.get("/all", getAllIssues);
router.put("/:id", updateIssue);
router.delete("/:id", deleteIssue);

module.exports = router;