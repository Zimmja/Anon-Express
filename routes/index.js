const express = require("express");
const router = express.Router();

let roomData = [
  {
    roomID: f670ffew,
    startDate: "2022-01-12",
    endDate: "2022-01-15",
    friendCount: 3,
    roomFormsRatings: [[], [], []],
  },
  {
    roomID: ptn4c593,
    startDate: "2022-01-12",
    endDate: "2022-01-18",
    friendCount: 4,
    roomFormsRatings: [[], [], [], []],
  },
];

// =====================
// MISC FUNCTIONS
// =====================
const codeArray = [];

const generateCode = () => Math.random().toString(36).slice(2);

const randomCode = () => {
  let newCode = generateCode();
  if (codeArray.includes(newCode)) newCode = generateCode();
  codeArray.push(newCode);
  return newCode;
};

// ========================
// ROUTER HELPER FUNCTIONS
// ========================
const addRoom = (par) => {
  const newRoom = {
    roomID: randomCode(),
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

// =====================
// ROUTER FUNCTIONS
// =====================
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
