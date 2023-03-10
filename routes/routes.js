const { Router } = require("express");
const passport = require("passport");
const {
  inscription,
  connexion,
  resetPassword,
  send_email,
  resetUsername,
  resetPasswordFromApp,
} = require("../controllers/ctrl");

const {
  getUser,
  addHistory,
  getHistoryList,
  clearAllHistory,
  addFavorite,
  getFavoriteList,
  removeFavorite,
  isFavorite,
  updateAvatar,
  getAvatar,
  getPoints,
  updatePoints,
} = require("../controllers/profileController");
const { getStore, getArticle } = require("../controllers/storeController");

const router = Router();

router.post("/inscription", inscription);
router.post("/connexion", connexion);

router.post("/resetUsername", resetUsername);

router.post("/send-email", send_email);
router.post("/resetPassword", resetPassword);

// Reset password from app :
router.post(
  "/resetPassword",
  passport.authenticate("jwt", { session: false }),
  resetPasswordFromApp
);

router.use(passport.authenticate("jwt", { session: false }));
router.get("/", (req, res) => {
  res.send("Route Protégé");
});

router.post(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  getUser
);

router.post(
  "/addHistory",
  passport.authenticate("jwt", { session: false }),
  addHistory
);

router.post(
  "/history",
  passport.authenticate("jwt", { session: false }),
  getHistoryList
);

router.post(
  "/clearHistory",
  passport.authenticate("jwt", { session: false }),
  clearAllHistory
);

router.post(
  "/addFavorite",
  passport.authenticate("jwt", { session: false }),
  addFavorite
);

router.post(
  "/favorite",
  passport.authenticate("jwt", { session: false }),
  getFavoriteList
);

router.post(
  "/removeFavorite",
  passport.authenticate("jwt", { session: false }),
  removeFavorite
);

router.post(
  "/isFavorite",
  passport.authenticate("jwt", { session: false }),
  isFavorite
);

router.post(
  "/avatar",
  passport.authenticate("jwt", { session: false }),
  updateAvatar
);

router.post(
  "/getAvatar",
  passport.authenticate("jwt", { session: false }),
  getAvatar
);

router.post(
  "/getPoints",
  passport.authenticate("jwt", { session: false }),
  getPoints
);

router.post(
  "/updatePoints",
  passport.authenticate("jwt", { session: false }),
  updatePoints
);

router.post(
  "/store",
  passport.authenticate("jwt", { session: false }),
  getStore
);

router.post(
  "/article",
  passport.authenticate("jwt", { session: false }),
  getArticle
);

module.exports = router;
