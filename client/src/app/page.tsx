import React, { useRef, useState } from 'react';

import { getHeaderData } from "@/api/get-header-data";
import Image from "next/image";
import { Slider } from '@/components/Slider';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

export default async function Home() {

  return (
    <main className="h-full w-full  bg-neutral-20">
      <div>
        TEste
      </div>
      <div>
        <h1 className='mt-32 mb-14 text-6xl leading-[83.2px] font-semibold text-center text-blue-default'>CANAL OLÍMPICO DO BRASIL</h1>
        <div className='h-[880px] w-full bg-olympic-channel text-white flex items-center justify-center'>
          <div className='max-w-[1280px] w-full mx-auto pt-[11.2px] pb-[67px]'>
            <div className='max-w-[773px]'>
              <h1 className='text-[56px]  font-semibold leading-[67.2px]'>
                GANGWON 2024 | Esquenta para os Jogos Olímpicos de Inverno da Juventude
              </h1>
              <h5 className='mt-4'>Desejo a todos os membros e torcedores um Natal repleto de alegria, paz e momentos especiais. Que este seja um período de confraternização, amor e união para todos. Boas festas!</h5>
              <Button className='bg-green-special mt-8 rounded-full px-2 py-1 text-slate-900 flex items-center gap-2'><PlayCircle /> Assita agora</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
