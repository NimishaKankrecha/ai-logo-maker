"use client";

import React, { useContext, useEffect, useState } from 'react';
import { UserDetailContext } from '../_context/UserDetailContext';
import Prompt from '../_data/Prompt';
import axios from 'axios';
import Image from 'next/image';



function GenerateLogo() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [FormData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const [logoImage, setLogoimage] = useState();

  useEffect(() => {
    if (typeof window !== undefined && userDetail?.email) {
      const storage = localStorage.getItem('FormData');
      if (storage) {
        setFormData(JSON.parse(storage));
      }
    }
  }, [userDetail]);

  useEffect(() => {
    if (FormData?.title) {
      GenerateAILogo();
    }
  }, [FormData]);

  const GenerateAILogo = async () => {
    setLoading(true);
    const PROMPT = Prompt.LOGO_PROMPT
      .replace('{logoTitle}', FormData?.title)
      .replace('{logoDesc}', FormData?.desc)
      .replace('{logoPrompt}', FormData?.design?.prompt)
      .replace('{logoColor}', FormData?.pallete)
      .replace('{logoDesign}', FormData?.design?.title);

    console.log(PROMPT);

    const result = await axios.post('/api/AILogomodel', {
      prompt: PROMPT,
      email: userDetail?.email,
      title: FormData?.title,
      desc: FormData?.desc,
    });
    console.log(result.data);
    setLogoimage(result.data?.image);
    setLoading(false);
  };

  return (
    <div className="relative h-auto w-auto bg-inherit  flex justify-center items-center bg-cover  mt-8 mb-11" style={{background:"url(/bgimage.jpg)"}}>
      <div className="relative flex flex-col items-center justify-center w-1/2 rounded-lg shadow-lg p-8 z-10">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4">
      {loading ? 'Generating Logo...' : 'Generated Logo'}
        </h2>

        {!loading && logoImage ? (
          <div className="w-48 h-48 mb-4 rounded-lg overflow-hidden shadow-lg border-s-fuchsia-400">
            <Image 
              src={logoImage} 
              alt="Generated logo" 
              width={200} 
              height={200} 
              className="object-contain w-full h-full" 
            />
          </div>
        ) : (
          <div className="loading-container  justify-center items-center space-x-4 ">
            <div className="loading-lines mb-10 mt-10 w-96 ">
              {/* Colorful straight lines */}
              <div className="line-animation"></div>
              <div className="line-animation delay-200"></div>
              <div className="line-animation delay-400"></div>
              <div className="line-animation delay-600"></div>
            </div>

            {/* Clock Animation */}
            <div >
            <div className="clock-animation relative w-96 h-96 border-4 border-red-200  rounded-full flex items-center justify-center">
              <div className="absolute w-1/2 h-1/2 bg-gradient-to-r from-pink-500 via-yellow-500 to-teal-500 rounded-full animate-ping"></div>
              <div className="absolute w-1/4 h-1/4 bg-transparent border-t-4 border-l-4 border-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 animate-spin"></div>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GenerateLogo;
