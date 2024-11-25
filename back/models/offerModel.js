import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: [String], required: true },
    offer: { type: String, required: true },
    rating: { type: Number, required: true },
    deliveryTime: { type: String, required: true },
    location: { type: String, required: true },
});

const offerModel = mongoose.models.user || mongoose.model("offer", offerSchema);

export default offerModel;

