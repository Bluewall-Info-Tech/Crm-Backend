const Issue = require("../models/Issue");

// Add new issue
exports.addIssue = async (req, res) => {
  try {
    const issue = await Issue.create(req.body);
    res.status(201).json(issue);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: error.message });
  }
};

// Get all issues
exports.getAllIssues = async (req, res) => {
  try {
    const issues = await Issue.findAll();
    res.status(200).json(issues);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Update issue status
exports.updateIssue = async (req, res) => {
  try {
    const { id } = req.params;
    const issue = await Issue.findByPk(id);
    
    if (!issue) {
      return res.status(404).json({ msg: "Issue not found" });
    }
    
    await issue.update(req.body);
    res.status(200).json(issue);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Delete issue
exports.deleteIssue = async (req, res) => {
  try {
    const { id } = req.params;
    const issue = await Issue.findByPk(id);
    
    if (!issue) {
      return res.status(404).json({ msg: "Issue not found" });
    }
    
    await issue.destroy();
    res.status(200).json({ msg: "Issue deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};