const express = require("express");
const router = express.Router();

const hotels = [
  {
    hotelId: 1,
    hotelName: "Oceanview Palace",
    location: "Barcelona, Spain",
    roomsAvailable: 12,
    rating: 4.6,
    pricePerNight: 145,
  },
  {
    hotelId: 2,
    hotelName: "Nordic Aurora Hotel",
    location: "Reykjavik, Iceland",
    roomsAvailable: 8,
    rating: 4.8,
    pricePerNight: 220,
  },
  {
    hotelId: 3,
    hotelName: "Royal Garden Suites",
    location: "Lisbon, Portugal",
    roomsAvailable: 5,
    rating: 4.4,
    pricePerNight: 130,
  },
  {
    hotelId: 4,
    hotelName: "Alpine Retreat",
    location: "Innsbruck, Austria",
    roomsAvailable: 9,
    rating: 4.7,
    pricePerNight: 175,
  },
];

const bookings = [
  {
    bookingId: 1,
    hotelId: 1,
    guestName: "Isla Green",
    nationality: "Irish",
    roomType: "Deluxe Suite",
    checkIn: "2026-08-10",
    checkOut: "2026-08-14",
    totalPrice: 580,
    status: "confirmed",
  },
  {
    bookingId: 2,
    hotelId: 2,
    guestName: "Noah Kim",
    nationality: "Swedish",
    roomType: "Standard Room",
    checkIn: "2026-09-06",
    checkOut: "2026-09-09",
    totalPrice: 660,
    status: "confirmed",
  },
];

router.get("/hotels", (req, res) => {
  res.json(hotels);
});

router.get("/bookings", (req, res) => {
  res.json(bookings);
});

router.post("/bookings", (req, res) => {
  const { hotelId, guestName, nationality, roomType, checkIn, checkOut } = req.body;

  if (!hotelId || !guestName || !nationality || !roomType || !checkIn || !checkOut) {
    return res.status(400).json({ error: "Missing required booking fields." });
  }

  const hotel = hotels.find((item) => item.hotelId === hotelId);
  if (!hotel) {
    return res.status(400).json({ error: "Hotel not found." });
  }

  const nights = Math.max(
    1,
    Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))
  );
  const totalPrice = nights * hotel.pricePerNight;

  const bookingId = bookings.length + 1;
  const newBooking = {
    bookingId,
    hotelId,
    guestName,
    nationality,
    roomType,
    checkIn,
    checkOut,
    totalPrice,
    status: "pending",
  };

  bookings.push(newBooking);
  res.status(201).json(newBooking);
});

module.exports = router;
