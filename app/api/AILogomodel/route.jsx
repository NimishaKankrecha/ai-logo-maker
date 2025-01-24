import { AILogo } from "@/config/AI-modal";
import { db } from "@/config/FirebaseConfig";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore/lite";
import { NextResponse } from "next/server";

export async function POST(req) {
    
    const {prompt,email,title,desc}=await req.json();
    try {
        
        const AIresultprompt=await AILogo.sendMessage(prompt);
        console.log(JSON.parse(AIresultprompt.response.text()));
        const AIprompt=JSON.parse(AIresultprompt.response.text()).prompt;

        const response = await axios.post(
            "https://api-inference.huggingface.co/models/strangerzonehf/Flux-Midjourney-Mix2-LoRA",
            AIprompt,
            {
                headers: {
                    Authorization: "Bearer "+process.env.HUGGING_FACE_API_KEY,
                    "Content-Type": "application/json",
                },
                responseType:"arraybuffer"
            }
            )

            const buffer=Buffer.from(response.data,"binary");
            const base64Image=buffer.toString("base64");

            const base64ImagewithMime=`data:image/png;base64,${base64Image}`;
            console.log(base64ImagewithMime);


            try {
                await setDoc(doc(db,"users",email,"logos",Date.now().toString()),{
                  image:base64ImagewithMime,
                  title:title,
                  desc:desc,
                })
                
              } catch (error) {
                
              }

        return NextResponse.json({image:base64ImagewithMime});


        
    } catch (error) {
            return NextResponse.json({error:e})
    }
}