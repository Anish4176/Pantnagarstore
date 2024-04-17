import { ConnectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";
import Product from "@/models/product";

export async function GET(req, res) {

  const url= new URL(req.url)
  const searchparams= new URLSearchParams(url.searchParams);
  const id=searchparams.get('Productid');
 
  if (!id) {
    return NextResponse.json({ message: "Product id is required" }, { status: 400 });
  }
  try{
    console.log(id);
    await ConnectToDatabase();
    const data = await Product.findById(id).populate('sellar');
    return NextResponse.json({data}, { status: 200});
  }
    catch(e){
       return NextResponse.json({ message: "Product id is not found in the database" }, { status: 404 });
    }
  
}
