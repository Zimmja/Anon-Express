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

const updateRoomArr = (params) => {
  const newArr = roomData.slice();
  const roomIndex = newArr.findIndex((room) => room.roomID == params.roomID);
  if (params.startDate) newArr[roomIndex].startDate = params.startDate;
  if (params.endDate) newArr[roomIndex].endDate = params.endDate;
  if (params.friendCount) newArr[roomIndex].friendCount = params.friendCount;
  if (params.roomFormsRatings)
    newArr[roomIndex].roomFormsRatings = params.roomFormsRatings;
  return newArr;
};

router.get("/", function (req, res) {
  res.send(roomData);
});

router.put("/", function (req, res) {
  const newArr = updateRoomArr(req.body);
  roomData = newArr;
  res.send(roomData);
});

module.exports = router;

// router.get("/notes", (req, res) => {
//   res.send(JSON.stringify(roomData);
// });

// router.post("/", function (req, res) {
//   const retrieving = req.body.retrieve,
//     roomID = req.body.roomID,
//     startDate = req.body.startDate,
//     endDate = req.body.endDate,
//     friendCount = req.body.friendCount,
//     roomFormsRatings = req.body.roomFormsRatings;
//   if (!retrieving) {
//     if (startDate) setStartDate(friendCount, roomID);
//     if (endDate) setEndDate(friendCount, roomID);
//     if (friendCount) setFriendCount(friendCount, roomID);
//     if (roomFormsRatings) setRatings(friendCount, roomID);
//   }
//   res.send(getRoom(roomID));
// });
