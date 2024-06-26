import {v2 as cloudinary} from 'cloudinary';
import { NextResponse } from 'next/server';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME , 
  api_key: process.env.CLOUDINARY_KEY , 
  api_secret:process.env.CLOUDINARY_SECRET 
});

export async function POST(req){
    const {path}= await req.json();
   
    if(!path){
        return NextResponse.json({message: 'Image path is required'}, {status: 400});
    }

    try{
        const options = {
            use_filename: true,
            unique_filename: false,
            overwrite: true,
            transformation:[
                {width: 1000, height: 700, crop: "limit", format: "auto", quality: "auto"}
            ]

          };
        const result = await cloudinary.uploader.upload(path, options);
        return NextResponse.json(result, {status: 200});
    }catch(e){
        return NextResponse.json({message: e.message}, {status: 500});
    }
}