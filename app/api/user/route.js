import { NextResponse } from "next/server"
import User from "@/models/user";
import { ConnectToDatabase } from "@/utils/database";
export async function GET(req,res){
   try{
      await ConnectToDatabase();
      const data=await User.find();
      
      return NextResponse.json(data,{status: 200});
   }
   catch(e){
      return NextResponse.json({message:"Failed to fetch the user"},{status: 500});
   }
   
}