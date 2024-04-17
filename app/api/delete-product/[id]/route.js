import { NextResponse } from "next/server"
import Product from "@/models/product";
import { ConnectToDatabase } from "@/utils/database";

export async function DELETE(req,{params}){
   try{
    await ConnectToDatabase();
    const id= params.id;
    if(!id){
      return NextResponse.json({message:"ID required to delete post"},{status: 404})
    }
    await Product.findByIdAndDelete({_id:id});
    
    return NextResponse.json({message:'Deleted Successfully'},{status: 200});
   }catch(err){
     return NextResponse.json({message:"Failed to DELETE the profile products"},{status: 500})
   }
 
}