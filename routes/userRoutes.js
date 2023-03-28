const express = require("express");
const { authorize } = require("../middlewares/auth");

const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");

const router = express.Router();


router.get("/_healthz",(req,res)=>{
  res.send({status:"success",message:"server is up"});
})
router.route("/").post(registerUser).get(authorize, allUsers);
router.post("/login", authUser);

module.exports = router;
