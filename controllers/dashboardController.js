// File: controllers/dashboardController.js
const Dashboard = require("../models/Dashboard");

exports.getDashboard = async (req, res) => {
  try {
    const data = await Dashboard.findOne();
    if (!data) {
      return res.status(404).json({ message: "Dashboard data not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching dashboard", error });
  }
};

exports.updateDashboard = async (req, res) => {
  try {
    const { activeProjects, tasks, financials, projectProgress, taskCompletion, budgetAllocation } = req.body;
    let dashboard = await Dashboard.findOne();

    if (!dashboard) {
      dashboard = await Dashboard.create({ activeProjects, tasks, financials, projectProgress, taskCompletion, budgetAllocation });
    } else {
      await dashboard.update({ activeProjects, tasks, financials, projectProgress, taskCompletion, budgetAllocation });
    }

    res.status(200).json(dashboard);
  } catch (error) {
    res.status(500).json({ message: "Error updating dashboard", error });
  }
};