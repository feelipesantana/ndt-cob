
import qs from 'qs'
import { Button } from '@/components/ui/button';

import { NewsHighlight } from '@/components/NewsHighlight';
import { getPagesData } from '@/api/get-pages-data';

import { Channel } from '@/components/Channel';
import { Plus } from 'lucide-react';

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
      <Channel />

    </main>
  );
}
