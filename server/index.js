import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Elite Travel Consult Backend is running' });
});

// Create a new booking
app.post('/api/bookings', (req, res) => {
  try {
    const { tour_id, tour_title, passengers, extras, total_price } = req.body;

    // Validation
    if (!passengers || !Array.isArray(passengers) || passengers.length === 0) {
      return res.status(400).json({ error: 'At least one passenger is required' });
    }

    const stmt = db.prepare(`
      INSERT INTO bookings (tour_id, tour_title, passengers, extras, total_price)
      VALUES (?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      tour_id || 'default',
      tour_title || 'Unknown Tour',
      JSON.stringify(passengers),
      JSON.stringify(extras || []),
      total_price || 0
    );

    console.log(`Booking created with ID: ${result.lastInsertRowid}`);

    res.status(201).json({
      message: 'Booking successfully confirmed!',
      bookingId: `EL-${result.lastInsertRowid.toString().padStart(4, '0')}`,
      id: result.lastInsertRowid
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Internal server error while processing booking' });
  }
});

// Admin: Get all bookings
app.get('/api/bookings', (req, res) => {
  try {
    const bookings = db.prepare('SELECT * FROM bookings ORDER BY created_at DESC').all();
    
    // Parse JSON strings back to objects
    const formattedBookings = bookings.map(b => ({
      ...b,
      passengers: JSON.parse(b.passengers),
      extras: JSON.parse(b.extras)
    }));

    res.json(formattedBookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Internal server error while fetching bookings' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
