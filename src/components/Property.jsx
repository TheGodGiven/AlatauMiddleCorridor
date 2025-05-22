import EconomyIconEn from '../assets/EconomyIconEn.png'
import EconomyIconKz from '../assets/EconomyIconKz.png'
import EconomyIconRu from '../assets/EconomyIconRu.png'
import GDPIconEn from '../assets/GDPIconEn.png'
import GDPIconKz from '../assets/GDPIconKz.png'
import GDPIconRu from '../assets/GDPIconRu.png'
import WorkIconEn from '../assets/WorkIconEn.png'
import WorkIconKz from '../assets/WorkIconKz.png'
import WorkIconRu from '../assets/workIconRu.png'
import PropertyBlockImage from '../assets/PropertyBlockImage.png'

export default function Property(props) {
    return(
        <>
            <div>
                <div className="hidden md:block mt-[50px]">
                    <div className="px-[95px] py-[50px] text-white text-[18px]">
                        <div className="text-center text-[32px] font-bold uppercase ">
                            {props.lg === 'ru' && "Влияние проекта"}
                            {props.lg === 'kz' && "Жобаның әсері"}
                            {props.lg === 'en' && "Impact of the project"}
                        </div>
                        <div className="mt-[50px] flex justify-between gap-x-[38px]">
                            <div className='w-1/2'>
                                <div className='font-medium'>
                                    {props.lg === 'ru' && "После завершения строительства проект ALATAU Middle Corridor будет способствовать:"}
                                    {props.lg === 'kz' && "Аяқталғаннан кейін ALATAU орта дәлізі жобасы мыналарға ықпал етеді:"}
                                    {props.lg === 'en' && "Once completed, the ALATAU Middle Corridor project will contribute to:"}
                                </div>
                                <div className='mt-[81px] flex justify-between gap-x-[41px]'>
                                    <div>
                                        {props.lg === 'ru' && <img src={EconomyIconRu} alt='EconomyiconRu' className='max-w-100%'/>}
                                        {props.lg === 'kz' && <img src={EconomyIconKz} alt='EconomyiconKz' className='max-w-100%'/>}
                                        {props.lg === 'en' && <img src={EconomyIconEn} alt='EconomyiconEn' className='max-w-100%'/>}
                                    </div>
                                    <div>
                                        {props.lg === 'ru' && <img src={GDPIconRu} alt='GDPiconRu' className='max-w-100%'/>}
                                        {props.lg === 'kz' && <img src={GDPIconKz} alt='GDPiconKz' className='max-w-100%'/>}
                                        {props.lg === 'en' && <img src={GDPIconEn} alt='GDPiconEn' className='max-w-100%'/>}
                                    </div>
                                    <div>
                                        {props.lg === 'ru' && <img src={WorkIconRu} alt='WorkiconRu' className='max-w-100%'/>}
                                        {props.lg === 'kz' && <img src={WorkIconKz} alt='WorkiconKz' className='max-w-100%'/>}
                                        {props.lg === 'en' && <img src={WorkIconEn} alt='WorkiconEn' className='max-w-100%'/>}
                                    </div>
                                </div>
                                <div className='mt-[50px]'>
                                    {props.lg === 'ru' && (
                                        <>
                                            <p className='mb-4 flex items-start'>
                                                <span className='mr-2 text-lg'>•</span>
                                                Развитию региональной экономики
                                            </p>
                                            <p className='mb-4 flex items-start'>
                                                <span className='mr-2 text-lg'>•</span>
                                                Увеличению ВВП
                                            </p>
                                            <p className='flex items-start'>
                                                <span className='mr-2 text-lg'>•</span>
                                                Созданию порядка 200 000 рабочих мест
                                            </p>
                                        </>
                                    )}
                                    {props.lg === 'kz' && (
                                        <>
                                            <p className='mb-4 flex items-start'>
                                                <span className='mr-2 text-lg'>•</span>
                                                Аймақтық экономиканың дамуына
                                            </p>
                                            <p className='mb-4 flex items-start'>
                                                <span className='mr-2 text-lg'>•</span>
                                                ЖІӨ-нің өсуіне
                                            </p>
                                            <p className='flex items-start'>
                                                <span className='mr-2 text-lg'>•</span>
                                                200 000-ға жуық жұмыс орнын құру
                                            </p>
                                        </>
                                    )}
                                    {props.lg === 'en' && (
                                        <>
                                            <p className='mb-4 flex items-start'>
                                                <span className='mr-2 text-lg'>•</span>
                                                Regional economy development
                                            </p>
                                            <p className='mb-4 flex items-start'>
                                                <span className='mr-2 text-lg'>•</span>
                                                GDP growth
                                            </p>
                                            <p className='flex items-start'>
                                                <span className='mr-2 text-lg'>•</span>
                                                Creation of about 200,000 jobs
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <img src={PropertyBlockImage} alt="PropertyBLockImage" className='max-w-100%' />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}

/*
{props.lg === 'ru' && ""}
{props.lg === 'kz' && ""}
{props.lg === 'en' && ""}
*/ 