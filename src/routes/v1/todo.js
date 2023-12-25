const router = require("express").Router();

function a() {
  return 1;
}

// GET ALL TODOS
router.get("/", (req, res) => {
  res.json({
    req: "Working Correctly",
  });
});

// CREATE TODO
router.post("/", a);

// DELETE TODO
router.get("/", a);

// UPDATE TODOS
router.patch("/", a);

module.exports = router;
