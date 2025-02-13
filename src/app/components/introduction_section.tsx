
import buttonStyles from '@/styles/button.module.css';
import typography from '@/styles/typography.module.css';
import Image from 'next/image';

const IntroductionSection = () => {
    return (
        <div className='flex flex-col items-center gap-[12px] mt-[24px] md:mt-[64px] mb-[12px]'>
            <Image className='mr-[8px]'
                src="/rocket.png"
                alt='Rocket Icon'
                width={44}
                height={32}
            />
            <p className={typography.display + ' mt-[12px]'}>
                Build and Launch Reliable and Market-Ready Products
            </p>
            <p className={typography.textSmall + ' px-[36] mt-[12] max-w-[1140]'}>
                This 2025, Aique DANG aims to optimize internal structures and processes, ensuring enhanced reliability, integrity, and efficiency, ultimately driving increased profitability for its clients.
            </p>
            <button className={buttonStyles.filledButton + " min-h-[48px] mt-[12px]"}>
                <div className='flex flex-row'>
                    <Image className='mr-[8px]'
                        src="/rocket-outlined.svg"
                        alt='Rocket Icon Outlined'
                        width={16}
                        height={18}
                    />
                    <p>Check our solutions</p>
                </div>
            </button>
        </div>
    );
};

export default IntroductionSection;