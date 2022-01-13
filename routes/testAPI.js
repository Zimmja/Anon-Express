const express = require("express");
const router = express.Router();

let roomData = [
  {
    roomID: 0,
    startDate: "2022-01-12",
    endDate: "2022-01-15",
    friendCount: 3,
    roomFormsRatings: [[], [], []],
  },
  {
    roomID: 1,
    startDate: "2022-01-12",
    endDate: "2022-01-18",
    friendCount: 4,
    roomFormsRatings: [[], [], [], []],
  },
];

const addRoom = (par) => {
  const newRoom = {
    roomID: roomData.length,
    startDate: par.startDate,
    endDate: par.endDate,
    friendCount: par.friendCount,
    roomFormsRatings: par.roomFormsRatings,
  };
  const newArr = roomData.slice();
  newArr.push(newRoom);
  return newArr;
};

const updateRoomArr = (par) => {
  const newArr = roomData.slice();
  const roomIndex = newArr.findIndex((room) => room.roomID == par.roomID);
  if (par.startDate) newArr[roomIndex].startDate = par.startDate;
  if (par.endDate) newArr[roomIndex].endDate = par.endDate;
  if (par.friendCount) newArr[roomIndex].friendCount = par.friendCount;
  if (par.roomFormsRatings)
    newArr[roomIndex].roomFormsRatings = par.roomFormsRatings;
  return newArr;
};

router.get("/", function (req, res) {
  console.log(roomData);
  res.send(roomData);
});

router.post("/", function (req, res) {
  const newArr = addRoom(req.body);
  roomData = newArr;
  console.log(roomData);
  res.send(roomData);
});

router.put("/", function (req, res) {
  const newArr = updateRoomArr(req.body);
  roomData = newArr;
  console.log(roomData);
  res.send(roomData);
});

module.exports = router;
