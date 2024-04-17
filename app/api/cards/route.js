import { NextResponse } from "next/server"
import Product from "@/models/product";
import { ConnectToDatabase } from "@/utils/database";
export async function GET(req,res){
   try{
      await ConnectToDatabase();
      const data=await Product.find().populate('sellar');
      
      return NextResponse.json(data,{status: 200});
   }
   catch(e){
      return NextResponse.json({message:"Failed to fetch the products"},{status: 500});
   }
   
}