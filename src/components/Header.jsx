import HeaderBG from '../assets/HeaderBG.png'
import Logo from '../assets/Logo.png'

export default function Header(props) {
    return(
        <header
            className='text-white'
            style={{
                backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0) 28.72%, rgba(0, 0, 0, 0.66) 99.06%), url(${HeaderBG})`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
            }}
        >
            <div className='px-4 sm:px-[95px] pt-4 sm:pt-[17px] pb-10 sm:pb-[171px]'>
                <div className='md:flex justify-between items-center pb-5 sm:pb-[20px]'>
                    <div>
                        <img src={Logo} alt="Logo" className='w-[50px] sm:w-[73px]'/>
                    </div>
                    <div className='hidden md:flex gap-x-[60px] justify-between font-semibold text-[12px] sm:text-[14px] items-center'>
                        <div className='flex justify-between gap-x-[62px] font-semibold text-[12px] sm:text-[14px]'>
                            <button>
                                {props.lg === "ru" && "О проекте"}
                                {props.lg === "kz" && "Жоба туралы"}
                                {props.lg === "en" && "About the project"}
                            </button>
                            <button>
                                {props.lg === 'ru' && "Комплекс"}
                                {props.lg === 'kz' && "Комплекс"}
                                {props.lg == 'en' && "Complex"}
                            </button>
                            <button>
                                {props.lg === 'ru' && "Этапы"}
                                {props.lg === 'kz' && "Кезеңдер"}
                                {props.lg == 'en' && "Stages"} 
                            </button>
                            <button>
                                {props.lg === 'ru' && "Контакты"}
                                {props.lg === 'kz' && "Байланыстар"}
                                {props.lg === 'en' && "Contacts"}
                            </button>
                        </div>
                        <div>
                            <select
                            name="Lang"
                            className='bg-[#0A69C4] p-2 rounded-2xl text-[12px] sm:text-[14px]'
                            onChange={(event) => {
                                props.change(event.target.value)
                            }}
                            >
                                <option value="ru">ru</option>
                                <option value="kz">kz</option>
                                <option value="en">en</option>
                            </select>
                        </div>
                    </div>
                    <div className='md:hidden flex flex-col gap-y-4'>
                        <div className='flex flex-col gap-y-2'>
                            <button>
                                {props.lg === "ru" && "О проекте"}
                                {props.lg === "kz" && "Жоба туралы"}
                                {props.lg === "en" && "About the project"}
                            </button>
                            <button>
                                {props.lg === 'ru' && "Комплекс"}
                                {props.lg === 'kz' && "Комплекс"}
                                {props.lg == 'en' && "Complex"}
                            </button>
                            <button>
                                {props.lg === 'ru' && "Этапы"}
                                {props.lg === 'kz' && "Кезеңдер"}
                                {props.lg == 'en' && "Stages"} 
                            </button>
                            <button>
                                {props.lg === 'ru' && "Контакты"}
                                {props.lg === 'kz' && "Байланыстар"}
                                {props.lg === 'en' && "Contacts"}
                            </button>
                        </div>
                        <div>
                            <select
                            name="Lang"
                            className='bg-[#0A69C4] p-2 rounded-2xl text-[12px] sm:text-[14px]'
                            onChange={(event) => {
                                props.change(event.target.value)
                            }}
                            >
                                <option value="ru">ru</option>
                                <option value="kz">kz</option>
                                <option value="en">en</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='mt-[50px] sm:mt-[119px]'>
                    <div className='text-[24px] sm:text-[48px] font-bold w-full sm:w-[70%]'>
                        {props.lg === 'ru' && (<><span className='block'>Алатауский мультимодальный логистический узел</span> <span className='text-[#0A69C4]'>"Срединный коридор"</span></>)}
                        {props.lg === 'kz' && (<><span className='block'>Алатау мультимодальды логистикалық хабы</span> <span className='text-[#0A69C4]'>"Орта дәліз"</span></>)}
                        {props.lg === 'en' && (<><span className='block'>Alatau multimodal logistics hub</span> <span className='text-[#0A69C4]'>"Middle corridor"</span></>)}
                    </div>
                    <div className='mt-4 sm:mt-[18px] text-[14px] sm:text-[22px] font-medium w-full sm:w-[35%]'>
                        {props.lg === 'ru' && "Первый в Казахстане мультимодальный транспортно - экономический кластер"}
                        {props.lg === 'kz' && "Қазақстандағы алғашқы мультимодальды көліктік-экономикалық кластер"}
                        {props.lg === 'en' && "The first multimodal transport and economic cluster in Kazakhstan"}
                    </div>
                    <div className='mt-6 sm:mt-[36px]'>
                        <button className='px-6 sm:px-[75px] py-2 sm:py-[8px] bg-[#0A69C4] rounded-[4px] text-[12px] sm:text-[14px]'>
                            {props.lg === 'ru' && "Смотреть ролик"}
                            {props.lg === 'kz' && "Бейнені көру"}
                            {props.lg === 'en' && "Watch the video"}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}