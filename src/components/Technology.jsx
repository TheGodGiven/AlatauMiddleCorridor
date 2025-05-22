import TechnologyImage1 from '../assets/TechnologyImage1.png'
import TechnologyImage2 from '../assets/TechnologyImage2.png'

export default function Technology(props) {
    return(
        <>
            <div>
                <div className='hidden md:block mt-[50px]'>
                    <div className='px-[95px] py-[50px] text-white'>
                        <div className='text-[32px] font-bold uppercase text-center'>
                            {props.lg === 'ru' && "Передовые технологии"}
                            {props.lg === 'kz' && "Жетілдірілген технологиялар"}
                            {props.lg === 'en' && "Advanced technologies"}
                        </div>
                        <div className='mt-[12px] text-center text-[18px]'>
                            {props.lg === 'ru' && "На всех этапах будут активно применяться передовые технологии"}
                            {props.lg === 'kz' && "Барлық кезеңде озық технологиялар белсенді түрде қолданылатын болады."}
                            {props.lg === 'en' && "Advanced technologies will be actively used at all stages."}
                        </div>
                        <div className='mt-[70px]'>
                            <div className='flex justify-between gap-x-[48px]'>
                                <div className='w-1/2'>
                                    <img src={TechnologyImage2} alt="TechnologyImage2" className='max-w-100%'/>
                                </div>
                                <div className='w-1/2 border-[1px] border-[#6868681A] bg-[#FFFFFF1A] px-[32px] py-auto'>
                                    <div className='text-[24px] font-medium'>
                                        {props.lg === 'ru' && "Строительная фаза"}
                                        {props.lg === 'kz' && "Құрылыс кезеңі"}
                                        {props.lg === 'en' && "Construction phase"}   
                                    </div>
                                    <div className='mt-[16px] text-[18px] font-medium'>
                                        {props.lg === 'ru' && "Внедрение  технологии BIM (Building Information Modeling) - обеспечит цифровое управление проектированием, строительством и эксплуатацией"}
                                        {props.lg === 'kz' && "BIM (Building Information Modeling) технологиясын енгізу жобалау, салу және пайдалануды цифрлық басқаруды қамтамасыз етеді"}
                                        {props.lg === 'en' && "Implementation of BIM (Building Information Modeling) technology will ensure digital management of design, construction and operation"}   
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between gap-x-[48px] mt-[48px]'>
                                <div className='w-1/2 border-[1px] border-[#6868681A] bg-[#FFFFFF1A] px-[32px]'>
                                    <div className='mt-[112px] text-[24px] font-medium'>
                                        {props.lg === 'ru' && "Запуск узла фаза"}
                                        {props.lg === 'kz' && "Түйінді іске қосу кезеңі"}
                                        {props.lg === 'en' && "Node Launch Phase"}   
                                    </div>
                                    <div className='mt-[16px] text-[18px] font-medium'>
                                        {props.lg === 'ru' && "Формирование цифрового логистического пространства на базе ИИ, обеспечит автоматизацию процессов эксплуатации путем создания интелектуально-цифровой платформы управления"}
                                        {props.lg === 'kz' && "AI негізіндегі цифрлық логистикалық кеңістікті қалыптастыру интеллектуалды цифрлық басқару платформасын құру арқылы операциялық процестерді автоматтандыруды қамтамасыз етеді."}
                                        {props.lg === 'en' && "The formation of a digital logistics space based on AI will ensure the automation of operational processes by creating an intelligent digital management platform"}   
                                    </div>
                                </div>
                                <div className='w-1/2'>
                                    <img src={TechnologyImage1} alt="TechnologyImage1" className='max-w-100%'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='block md:hidden mt-[25px]'>
                    <div className='px-25px py-[25px] text-white'>
                        <div className='text-24px font-bold uppercase text-center'>
                            {props.lg === 'ru' && "Передовые технологии"}
                            {props.lg === 'kz' && "Жетілдірілген технологиялар"}
                            {props.lg === 'en' && "Advanced technologies"}
                        </div>
                        <div className='mt-[6px] text-center text-[14px]'>
                            {props.lg === 'ru' && "На всех этапах будут активно применяться передовые технологии"}
                            {props.lg === 'kz' && "Барлық кезеңде озық технологиялар белсенді түрде қолданылатын болады."}
                            {props.lg === 'en' && "Advanced technologies will be actively used at all stages."}
                        </div>
                        <div className='w-2/3 mt-[12px] mx-auto'>
                            <img src={TechnologyImage2} alt="TechnologyImage2 max-w-max"/>
                        </div>
                        <div className='w-2/3 border-[1px] border-[#6868681A] bg-[#FFFFFF1A] mx-auto mt-[10px] px-[16px]'>
                            <div className='mt-[40px] text-[18px]'>
                                {props.lg === 'ru' && "Строительная фаза"}
                                {props.lg === 'kz' && "Құрылыс кезеңі"}
                                {props.lg === 'en' && "Construction phase"}   
                            </div>
                            <div className='mt-8px text-[14px] mb-[40px]'>
                                {props.lg === 'ru' && "Внедрение  технологии BIM (Building Information Modeling) - обеспечит цифровое управление проектированием, строительством и эксплуатацией"}
                                {props.lg === 'kz' && "BIM (Building Information Modeling) технологиясын енгізу жобалау, салу және пайдалануды цифрлық басқаруды қамтамасыз етеді"}
                                {props.lg === 'en' && "Implementation of BIM (Building Information Modeling) technology will ensure digital management of design, construction and operation"}
                            </div>
                        </div>
                        <div className='w-2/3 mt-[15px] mx-auto'>
                            <img src={TechnologyImage1} alt="TechnologyImage1 max-w-max"/>
                        </div>
                        <div className='w-2/3 border-[1px] border-[#6868681A] bg-[#FFFFFF1A] mx-auto mt-[10px] px-[16px]'>
                            <div className='mt-[40px] text-[18px]'>
                                {props.lg === 'ru' && "Запуск узла фаза"}
                                {props.lg === 'kz' && "Түйінді іске қосу кезеңі"}
                                {props.lg === 'en' && "Node Launch Phase"}   
                            </div>
                            <div className='mt-8px text-[14px] mb-[40px]'>
                                {props.lg === 'ru' && "Формирование цифрового логистического пространства на базе ИИ, обеспечит автоматизацию процессов эксплуатации путем создания интелектуально-цифровой платформы управления"}
                                {props.lg === 'kz' && "AI негізіндегі цифрлық логистикалық кеңістікті қалыптастыру интеллектуалды цифрлық басқару платформасын құру арқылы операциялық процестерді автоматтандыруды қамтамасыз етеді."}
                                {props.lg === 'en' && "The formation of a digital logistics space based on AI will ensure the automation of operational processes by creating an intelligent digital management platform"}   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}