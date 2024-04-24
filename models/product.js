import { Schema, model, models } from "mongoose";
const ProductSchema = new Schema({
  sellar: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  productname: {
    type: String,
    required: [true, "Product Name is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  // tag: {
  //   type: String,
  //   required: [true, "Tag is required"],
  // },
  condition: {
    type: String,
    required: [true, "Product Condition is required"],
  },
  productimage: {
    type: String,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  instagramHandle: {
    type: String,
    
  },
});
const Product = models.Product || model("Product", ProductSchema);
export default Product;
