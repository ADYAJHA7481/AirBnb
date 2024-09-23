const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listeningSchema =  new Schema({
    title :{
        type : String,
        required: true,
    }, 
    description : String,
    Image :{
        type : String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.airbnb.com%2Findia%2Fstays&psig=AOvVaw1YfVKZB1Cnlx1Y6B40O2Rb&ust=1725272025416000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjBtqPBoYgDFQAAAAAdAAAAABAE",
        set: (v) => v==="" ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.airbnb.com%2Findia%2Fstays&psig=AOvVaw1YfVKZB1Cnlx1Y6B40O2Rb&ust=1725272025416000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjBtqPBoYgDFQAAAAAdAAAAABAE " : v,
    }, 
    price : Number,
    location : String,
    country:  String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        },
    ]

});

listeningSchema.post("findOneAndDelete", async (listing) => {
    if(listing) {
        await Review.deleteMany({_id: {$in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing",listeningSchema);
module.exports = Listing;