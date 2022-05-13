const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
    views: { type: Number, default: 0 },
    likes: [{ type: ObjectId, ref: "User" }],
    brand:{
        type:String,
        

    },
    modelName:{type:String},
    size:{
        type:String,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image: {
        public_id: "",
        url: "",
      },
    

  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
