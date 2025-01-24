"use client"
import React, { useState, useEffect } from 'react'
import LogoTitle from './_comonents/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Logodesc from './_comonents/Logodesc'
import LogoColorpallete from './_comonents/LogoColorpallete'
import LogoDesign from './_comonents/LogoDesign'
import Logoidea from './_comonents/Logoidea'
import PricingModel from './_comonents/PricingModel'

function CreateLogo() {
  const [step, setStep] = useState(1);
  const [FormData, setFormData] = useState({});

  // Handle form input changes
  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  // UseEffect to persist FormData to localStorage
  useEffect(() => {
    if (Object.keys(FormData).length > 0) {
      localStorage.setItem('FormData', JSON.stringify(FormData));
    }
  }, [FormData]);

  return (
    <div className='mt-28 p-10 border rounded-xl 3xl:mx-72'>
      {step === 1 ? (
        <LogoTitle onHandleInputChange={(v) => onHandleInputChange('title', v)} FormData={FormData} />
      ) : step === 2 ? (
        <Logodesc onHandleInputChange={(v) => onHandleInputChange('desc', v)} FormData={FormData} />
      ) : step === 3 ? (
        <LogoColorpallete onHandleInputChange={(v) => onHandleInputChange('pallete', v)} FormData={FormData} />
      ) : step === 4 ? (
        <LogoDesign onHandleInputChange={(v) => onHandleInputChange('design', v)} FormData={FormData} />
      ) : step === 5 ? (
        <Logoidea onHandleInputChange={(v) => onHandleInputChange('idea', v)} FormData={FormData} />
      ) : step === 6 ? (
        <PricingModel onHandleInputChange={(v) => onHandleInputChange('pricing', v)} FormData={FormData} />
      ) : null}

      <div className='flex justify-between items-center'>
        {step !== 1 && (
          <Button variant='outline' onClick={() => setStep(step - 1)}>
            <ArrowLeft /> Previous
          </Button>
        )}
        <Button onClick={() => setStep(step + 1)}>
          <ArrowRight /> Continue
        </Button>
      </div>
    </div>
  );
}

export default CreateLogo;
