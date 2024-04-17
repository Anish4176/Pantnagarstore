import { NextResponse } from "next/server"
import Product from "@/models/product";
import { ConnectToDatabase } from "@/utils/database";
export async function GET(req,{params}){
   try{
    await ConnectToDatabase();
    const id= params.id;
    if(!id){
      return NextResponse.json({message:"ID required"},{status: 404})
    }
    const data=await Product.find({sellar:id}).populate('sellar');
    
    return NextResponse.json(data,{status: 200});
   }catch(err){
     return NextResponse.json({message:"Failed to fetch the profile products"},{status: 500})
   }
 
}