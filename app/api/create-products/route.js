import Product from "@/models/product";
import { ConnectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  try {
    const data=await req.json();

    await ConnectToDatabase();    //database connection
    const Productdetails = new Product({   //saving product details document in db 
      sellar: data.sellarId,
      productname: data.productname.trim(),
      category: data.category,
      price:data.price.trim(),
      tag: data.tag.trim(),
      condition: data.condition,
      productimage: data.productimage,
      description:data.description.trim(),
      instagramHandle: data.instagramHandle.trim()
    });
 ;
    const result=await Productdetails.save();

    return NextResponse.json({ message: "Product details saved successfully" });
  } catch (err) {
    return NextResponse.json({ message: "Failed to save Product details" });
  }
}
  