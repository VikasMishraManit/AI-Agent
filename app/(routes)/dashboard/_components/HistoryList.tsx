"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

function HistoryList() {
  const [historyList , setHistoryList] = useState([]);
  return (
    <div className='mt-10'>
       {historyList.length==0?
       <div className='flex flex-col items-center justify-between p-7 border border-dashed rounded-2xl border-2'>
        <img
              src="/images/medical-assistance.png"
              alt="empty"
              height={200}
              width={200}
            />
            <h2 className='font-bold text-xl mt-2'>No Recent Consultations</h2>
            <p>It looks like you haven't consulted with any doctors yet.</p>
            <Button className='mt-3'>+ Start a Consultation</Button>
       </div>
       :
       <div>
        List
       </div>
      }
    </div>
  )
}

export default HistoryList
