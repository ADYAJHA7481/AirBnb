const express =  require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js")
const {isLoggedIn, isOwner, validatelisting} = require("../middleware.js");


//Index Route
router.get("/", wrapAsync( async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}));

//New Route
router.get("/new",isLoggedIn,(req,res)=> {
    res.render("listings/new.ejs")
});

//Show Route
router.get("/:id", wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({
        path: "reviews", 
        populate: {
        path: "author",
    },
    })
    .populate("owner");
    if(!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    // console.log(listing);
    res.render("Listings/show.ejs",{listing});
}));

//Create Route
router.post("/",validatelisting, isLoggedIn, wrapAsync(async (req, res, next)=>
    {
        // if(!req.body.listing){
        //     throw new ExpressError(400, "Send valid data for listing");
        // }
        const newListing = new Listing(req.body.listing);
        // console.log(req.user);
        newListing.owner = req.user._id;
        await newListing.save();
        req.flash("success", "New Listing Created Successfully!!");
        res.redirect("/listings");
    }
));

//Edit Route
router.get("/:id/edit",isLoggedIn, isOwner, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    res.render("listings/edit.ejs",{listing});
}));

//Update Route
router.put("/:id",validatelisting,isLoggedIn, isOwner, wrapAsync(async (req,res)=>{
    // if(!req.body.listing){
    //     throw new ExpressError(404, "Send valid data for listing");
    // }
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
}));

//Delete Route
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect(`/listings`);
}));


module.exports = router;