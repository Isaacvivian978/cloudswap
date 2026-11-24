const express = require('express');

// Mock Firebase Emulator
const appEmulator = express();
appEmulator.get('/getUserDetails', (req, res) => {
  res.json({ success: true, data: { name: "CloudSwap QA User", role: "admin" } });
});
appEmulator.listen(5001, () => console.log('Emulator started on port 5001'));

// Mock Cloud Run Container
const appCloudRun = express();
appCloudRun.get('/getUserDetails', (req, res) => {
  res.json({ success: true, data: { name: "CloudSwap QA User", role: "admin" } });
});
appCloudRun.listen(8080, () => console.log('Cloud Run container started on port 8080'));
