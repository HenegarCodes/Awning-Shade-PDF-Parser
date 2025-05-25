import express from 'express';
import multer from 'multer';
import xlsx from 'xlsx';
import Price from '../models/Price.js';  // Your Price schema

const router = express.Router();

// multer middleware to handle file upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload route
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    // Read the uploaded Excel file buffer
    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];  // Get the first sheet name
    const worksheet = workbook.Sheets[sheetName];
    
    // Convert sheet to JSON data
    const jsonData = xlsx.utils.sheet_to_json(worksheet, { header: 1 }); // header: 1 means we use the first row as keys

    // Process the data into a more structured format
    const formattedData = [];

    let group = '';
    for (let i = 1; i < jsonData.length; i++) {  // Start from the second row (assuming first row is headers)
      const row = jsonData[i];
      if (row[0] && row[0].includes('Group')) {
        group = row[0]; // Update group name when we encounter a new group
      } else {
        // Each row corresponds to an item, so we map over the data
        const item = {
          group,
          item: row[0],
          prices: {}
        };

        for (let j = 1; j < row.length; j++) {
          item.prices[j + 3] = row[j]; // Add prices for the respective columns
        }
        
        formattedData.push(item);
      }
    }

    // Insert into MongoDB
    await Price.insertMany(formattedData);

    res.status(200).json({ message: 'File processed and data inserted into MongoDB' });
  } catch (error) {
    console.error('Error processing file:', error);
    res.status(500).json({ error: 'Failed to upload and process data' });
  }
});

export default router;
