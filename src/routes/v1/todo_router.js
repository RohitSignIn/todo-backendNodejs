const router = require("express").Router();

function a() {
  return 1;
}

// GET ALL TODOS
router.get("/", a);

// CREATE TODO
router.post("/", a);

// DELETE TODO
router.get("/", a);

// UPDATE TODOS
router.patch("/", a);

module.exports = router;
