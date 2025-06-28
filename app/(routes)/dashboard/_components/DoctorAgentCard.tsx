import React from 'react';
import Image from 'next/image'; // ✅ Required import
import { Button } from '@/components/ui/button';
import {  ArrowRight } from 'lucide-react';

type DoctorAgent = {
  id: number;
  specialist: string;
  description: string;
  image: string;
  agentPrompt: string;
};

type Props = {
  doctorAgent: DoctorAgent;
};

function DoctorAgentCard({ doctorAgent }: Props) {
  return (
    <div>
       <Image src={doctorAgent.image} 
     alt={doctorAgent.specialist}
     width={200}
     height={300}
     className='w-full h-[250px] object-cover rounded-xl '
     />
     <h2 className='font-bold mt-1'>{doctorAgent.specialist}</h2>
     <p className='line-clamp-2 mt-1 text-sm text-gray-500'>{doctorAgent.description}</p>
    <Button className='w-full mt-2'>Start Consultation <ArrowRight/> </Button>
    </div>
  );
}

export default DoctorAgentCard;
