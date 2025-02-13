import button from '@/styles/button.module.css';
import typography from '@/styles/typography.module.css';
import Image from 'next/image';
export type CarouselItemParams = { imageUrl: string, alt: string, title: string, content: string };


function CarouselItem({ imageUrl, alt, title, content }: CarouselItemParams) {

    return (
        <div className="flex-col min-w-[370px] h-[513px] rounded-[8px] shadow-[0px_1px_3px_0px_#A6AFC366] overflow-clip">
            <Image
                src={imageUrl}
                alt={alt}
                width={370}
                height={230}
                style={{
                    objectFit: 'cover',
                    height: 230,
                }}

            ></Image>
            <div className='h-[283px] flex flex-col items-center'>
                <div className='px-[35px] pt-[32px] pb-[28px]'>
                    <p className={typography.textLarge + ' mb-[15px]'}>
                        {title}
                    </p>
                    <p className={typography.textBase + ' text-[#637381] line-clamp-[3] flex-1'}>
                        {content}
                    </p>
                </div>
                <button className={button.outlinedButton}>
                    View Details
                </button>
            </div>
        </div >
    );
}

export default CarouselItem