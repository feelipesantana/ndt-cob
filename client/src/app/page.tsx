
import qs from 'qs'
import { Button } from '@/components/ui/button';
import { PlayCircle, Plus } from 'lucide-react';
import { NewsHighlight } from '@/components/NewsHighlight';
import { getPagesData } from '@/api/get-pages-data';
import { CarouselChannel } from '@/components/Carousel/CarouselChennel';

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
      },
      channel: {
        populate: true
      }

    }
  })

  const pageData = await getPagesData({ query: query })
  const data = pageData?.data.find(res => res.attributes.title === "Home Page")
  const colorPage = data?.attributes.color_page

  return (
    <main className="h-full w-full">
      <div style={{ backgroundColor: colorPage }} className='bg-neutral-20  pt-10 pb-20 '>
        <div className='w-full max-w-[1280px] mx-auto flex flex-col items-center justify-center'>
          {data && <NewsHighlight data={data?.attributes} />}
          <Button variant={'ghost'} className='flex items-center border-2 border-blue-default rounded-full mt-8 w-[272px] h-14 text-blue-default'>
            <span>MAIS NOTÍCIAS </span><Plus className='mb-1' />
          </Button>
        </div>
      </div>

      <div className=''>
        <h1 className='pt-32 mb-14 text-6xl leading-[83.2px] font-semibold text-center text-blue-default'>{data?.attributes.channel.title}</h1>
        <div className='h-[880px] w-full bg-olympic-channel text-white flex items-center justify-center'>
          <div className='max-w-[1280px] w-full mx-auto pt-[11.2px] pb-[67px]'>
            <div className='max-w-[773px]'>
              <h1 className='text-[56px]  font-semibold leading-[67.2px]'>
                {data?.attributes.channel.info}
              </h1>
              <h5 className='mt-4'>{data?.attributes.channel.description_info}</h5>
              <Button className='bg-green-special mt-8 rounded-full px-2 py-1 text-slate-900 flex items-center gap-2'><PlayCircle /> Assita agora</Button>

            </div>
            <div className='mt-14'>
              <h3 className='mb-6 ml-1'>Destaques</h3>
              <CarouselChannel />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
