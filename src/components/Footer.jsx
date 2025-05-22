import ArrowIcon from '../assets/ArrowIcon.png'
import FooterLogo from '../assets/FooterLogo.png'

export default function Footer(props) {
    return(
        <>
            <div>
                <div className="hidden md:block mt-[100px]">
                    <div className='bg-[#000000] px-[183px] py-[100px] flex justify-between gap-x-[143px] text-white'>
                        <div className=' w-1/2 flex gap-x-[71px] justify-between'>
                            <div className='w-1/2'>
                                <img src={FooterLogo} alt="FooterLogo" className='max-w-max' />
                            </div>
                            <div className='w-1/2'>
                                <div className='text-[24px]'>
                                    {props.lg === 'ru' && "Республика Казахстан, г.Алатау"}
                                    {props.lg === 'kz' && "Қазақстан Республикасы, Алатау қаласы"}
                                    {props.lg === 'en' && "Republic of Kazakhstan, Alatau city"}
                                </div>
                                <div className='text-[14px] mt-[89px]'>
                                    <a href="tel:+772738-4356">72738-4356</a>
                                </div>
                                <div className='mt-[26px] text-[14px]'>
                                    <a href="mailto:@AlatauMiddleCoridor">@AlatauMiddleCoridor</a>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2 flex flex-col justify-between'>
                            <div className='flex justify-between gap-x-[82px]'>
                                <div className='text-[12px] flex flex-col w-1/2'>
                                    <button>
                                        {props.lg == 'ru' && 'О проекте'}
                                        {props.lg == 'kz' && 'Жоба туралы'}
                                        {props.lg == 'en' && 'About the project'}
                                    </button>
                                    <button className='mt-[15px]'>
                                        {props.lg === 'ru' && "Комплекс"}
                                        {props.lg === 'kz' && "Комплекс"}
                                        {props.lg === 'en' && "Complex"}
                                    </button>
                                    <button className='mt-[15px]'>
                                        {props.lg === 'ru' && 'Этапы'}
                                        {props.lg === 'kz' && "Кезеңдер"}
                                        {props.lg === 'en' && "Stages"}
                                    </button>
                                    <button className='mt-[15px]'>
                                        {props.lg === 'ru' && "Контакты"}
                                        {props.lg === 'kz' && "Байланыстар"}
                                        {props.lg === 'en' && "Contacts"}
                                    </button>
                                </div>
                                <div className='text-[12px] w-1/2 flex flex-col'>
                                    <a href="http://" target="_blank">Facebook</a>
                                    <a href="http://" target="_blank" className='mt-[15px]'>Linkedin</a>
                                    <a href="http://" target="_blank" className='mt-[15px]'>Instagram</a>
                                </div>
                            </div>
                            <div className='text-[12px]'>
                                © 2025 Все права принадлежат ALATAU Middle Coridor
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}