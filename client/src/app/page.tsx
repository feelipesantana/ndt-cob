
import qs from 'qs'
import { Button } from '@/components/ui/button';
import { PlayCircle, Plus } from 'lucide-react';
import { NewsHighlight } from '@/components/NewsHighlight';
import { getPagesData } from '@/api/get-pages-data';

export default async function Home() {
  const query = qs.stringify({
    populate: {
      highlight_zone: {
        populate: {
          post: {
            populate: {
              image: {
                populate: true
              }
            }
          },
        }
      }
    }
  })

  const pageData = await getPagesData({ query: query })
  const highlightZoneAttributes = pageData?.data.find(res => res.attributes.title === "Home Page")

  return (
    <main className="h-full w-full">
      <div className='bg-neutral-20  pt-10 pb-20 '>
        <div className='w-full max-w-[1280px] mx-auto flex flex-col items-center justify-center'>
          {highlightZoneAttributes && <NewsHighlight data={highlightZoneAttributes?.attributes} />}
          <Button variant={'ghost'} className='flex items-center border-2 border-blue-default rounded-full mt-8 w-[272px] h-14 text-blue-default'>
            <span>MAIS NOTÍCIAS </span><Plus className='mb-1' />
          </Button>
        </div>
      </div>

      <div className=''>
        <h1 className='pt-32 mb-14 text-6xl leading-[83.2px] font-semibold text-center text-blue-default'>CANAL OLÍMPICO DO BRASIL</h1>
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
