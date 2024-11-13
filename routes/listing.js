const express =  require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js")
const {isLoggedIn, isOwner, validatelisting} = require("../middleware.js");

const listingController = require("../controllers/listings.js");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.route("/")
.get(wrapAsync(listingController.index))
// .post(isLoggedIn, validatelisting,  wrapAsync(listingController.createListing));
.post( upload.single('listing[Image]'), (req, res) => {
    res.send(req.file);
});

//New Route
router.get("/new",isLoggedIn, listingController.renderNewform);

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(validatelisting,isLoggedIn, isOwner, wrapAsync(listingController.updateListing))
.delete(isLoggedIn, isOwner, wrapAsync(listingController.distroyListing));

//Edit Route
router.get("/:id/edit",isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;