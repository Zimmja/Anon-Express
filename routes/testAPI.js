const express = require("express");
const router = express.Router();

let roomData = [
  {
    roomID: 1,
    startDate: "2022-01-12",
    endDate: "2022-01-15",
    friendCount: 3,
    roomFormsRatings: [[], [], []],
  },
  {
    roomID: 2,
    startDate: "2022-01-12",
    endDate: "2022-01-18",
    friendCount: 4,
    roomFormsRatings: [[], [], [], []],
  },
];

const getRoom = (roomID) => roomData.find((room) => (room.roomID = roomID));

const setFriendCount = (int, id = 1) => (getRoom(id).friendCount = int);

const setStartDate = (date, id = 1) => (getRoom(id).startDate = date);

const setEndDate = (date, id = 1) => (getRoom(id).endDate = date);

const setRatings = (rArr, id = 1) => (getRoom(id).roomFormsRatings = rArr);

// ================
// RESPONSES
// ================

router.post("/", function (req, res) {
  const retrieving = req.body.retrieve,
    roomID = req.body.roomID,
    startDate = req.body.startDate,
    endDate = req.body.endDate,
    friendCount = req.body.friendCount,
    roomFormsRatings = req.body.roomFormsRatings;
  if (!retrieving) {
    if (startDate) setStartDate(friendCount, roomID);
    if (endDate) setEndDate(friendCount, roomID);
    if (friendCount) setFriendCount(friendCount, roomID);
    if (roomFormsRatings) setRatings(friendCount, roomID);
  }
  res.send(getRoom(roomID));
});

module.exports = router;
