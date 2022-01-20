const express = require("express");
const router = express.Router();

const defaultData = [
  {
    roomID: "xxxxxxxxxxj",
    startDate: "2022-01-12",
    endDate: "2022-01-15",
    friendCount: 3,
    roomFormsRatings: [[], [], []],
  },
];

let roomData = defaultData;

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

const updateOneForm = (userID, serverFormsList, editedFormsList) => {
  const formsArr = serverFormsList.slice();
  formsArr[userID] = editedFormsList[userID];
  return formsArr;
};

const updateRoomArr = (par) => {
  const newArr = roomData.slice(),
    roomID = par.roomID.substr(0, 11),
    userID = par.roomID.substr(11);

  const roomIndex = newArr.findIndex((room) => room.roomID == roomID);
  if (par.startDate) newArr[roomIndex].startDate = par.startDate;
  if (par.endDate) newArr[roomIndex].endDate = par.endDate;
  if (par.friendCount) newArr[roomIndex].friendCount = par.friendCount;
  if (par.roomFormsRatings)
    if (!userID) {
      newArr[roomIndex].roomFormsRatings = par.roomFormsRatings;
    } else {
      newArr[roomIndex].roomFormsRatings = updateOneForm(
        userID,
        newArr[roomIndex].roomFormsRatings,
        par.roomFormsRatings
      );
    }
  return newArr;
};

// =====================
// ROUTER FUNCTIONS
// =====================
router.get("/", function (req, res) {
  res.send(roomData);
});

router.post("/", function (req, res) {
  const newArr = addRoom(req.body);
  roomData = newArr;
  res.send(roomData);
});

router.put("/", function (req, res) {
  const newArr = updateRoomArr(req.body);
  roomData = newArr;
  res.send(roomData);
});

router.delete("/", function (req, res) {
  roomData = defaultData;
  res.send(roomData);
});

module.exports = router;
