const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool(); // Requires standard PG* environment variables

app.use(express.json());

app.get('/getUserDetails', async (req, res) => {
  try {
    const userId = req.query.id;
    if (!userId) {
      return res.status(400).send('Missing user ID parameter');
    }
    
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
    
    if (result.rows.length === 0) {
      return res.status(404).send('User document not found');
    }
    
    return res.status(200).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Database read error:', error);
    return res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
