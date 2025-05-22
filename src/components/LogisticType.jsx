import { useState } from 'react'
import FlyIcon from '../assets/FlyIcon.png'
import AutoIcon from '../assets/AutoIcon.png'
import TrainIcon from '../assets/TrainIcon.png'
import FlyImage from '../assets/FlyImage.png'
import AutoIconEn from '../assets/AutoIconEn.png'
import TrainIconEn from '../assets/TrainIconEn.png'
import FlyIconEn from '../assets/FlyIconEn.png'
import AutoIconKz from '../assets/AutoIconKz.png'
import TrainIconKz from '../assets/TrainIconKz.png'
import FlyIconKz from '../assets/FlyIconKz.png'
import TruckImage from '../assets/TruckImage.png'
import TrainImage from '../assets/TrainImage.png'

export default function LogisticType(props) {
    const [image, setImage] = useState(1)
    const [fade, setFade] = useState(false)

    const handleChangeImage = (newImage) => {
        setFade(true) // Включаем анимацию исчезновения
        setTimeout(() => {
            setImage(newImage) // Меняем изображение
            setFade(false) // Включаем анимацию появления
        }, 300) // Длительность совпадает с CSS-анимацией
    }

    return (
        <div>
            <div className="hidden md:block mt-[50px]">
                <div className="px-[95px] py-[50px] text-white">
                    <div className="font-bold text-[32px] text-center">
                        ALATAU Middle Corridor
                    </div>
                    <div className="mt-[16px] text-[18px] text-center">
                        {props.lg === 'ru' && 'Узел станет первым в Казахстане мультимодального транспортного экономического кластера'}
                        {props.lg === 'kz' && 'Хаб Қазақстандағы мультимодальды көліктік экономикалық кластердің алғашқысы болады'}
                        {props.lg === 'en' && 'The hub will become the first in Kazakhstan of a multimodal transport economic cluster'}
                    </div>
                    <div className="mt-[66px] flex items-center justify-between gap-x-[38px]">
                        <div className="w-1/2">
                            <div className={`transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                                {image === 1 && <img src={FlyImage} alt="FlyImage" className="max-w-100%" />}
                                {image === 2 && <img src={TrainImage} alt="TrainImage" className="max-w-100%" />}
                                {image === 3 && <img src={TruckImage} alt="TruckImage" className="max-w-100%" />}
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="text-[18px]">
                                {props.lg === 'ru' && 'Используя географические преимущества проект направлен на создание интегрированного мультимодального транспортного узла, объединяющего:'}
                                {props.lg === 'kz' && 'Географиялық артықшылықтарды пайдалана отырып, жоба біріктірілген мультимодальды көлік хабын құруға бағытталған:'}
                                {props.lg === 'en' && 'Using geographical advantages, the project aims to create an integrated multimodal transport hub that unites:'}
                            </div>
                            <div className="mt-[51px] flex justify-between gap-x-[15px]">
                                <button onClick={() => handleChangeImage(1)}>
                                    {props.lg === 'ru' && <img src={FlyIcon} alt="FlyIcon" className="max-w-100%" />}
                                    {props.lg === 'kz' && <img src={FlyIconKz} alt="FlyIconKz" className="max-w-100%" />}
                                    {props.lg === 'en' && <img src={FlyIconEn} alt="FlyIconEn" className="max-w-100%" />}
                                </button>
                                <button onClick={() => handleChangeImage(2)}>
                                    {props.lg === 'ru' && <img src={TrainIcon} alt="TrainIcon" className="max-w-100%" />}
                                    {props.lg === 'kz' && <img src={TrainIconKz} alt="TrainIconKz" className="max-w-100%" />}
                                    {props.lg === 'en' && <img src={TrainIconEn} alt="TrainIconEn" className="max-w-100%" />}
                                </button>
                                <button onClick={() => handleChangeImage(3)}>
                                    {props.lg === 'ru' && <img src={AutoIcon} alt="AutoIcon" className="max-w-100%" />}
                                    {props.lg === 'kz' && <img src={AutoIconKz} alt="AutoIconKz" className="max-w-100%" />}
                                    {props.lg === 'en' && <img src={AutoIconEn} alt="AutoIconEn" className="max-w-100%" />}
                                </button>
                            </div>
                            <div className="mt-[51px] text-[18px]">
                                {props.lg === 'ru' && 'Это позволит реализовать новую модель Синергитичсекого развития города и логистического комплекса'}
                                {props.lg === 'kz' && 'Бұл қала мен логистикалық кешеннің синергетикалық дамуының жаңа моделін жүзеге асыруға мүмкіндік береді.'}
                                {props.lg === 'en' && 'This will allow the implementation of a new model of synergistic development of the city and logistics complex.'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='block md:hidden mt-[25px]'>
                <div className='px-25px py-[25px] text-white text-[14px] text-center'>
                    <div className='text-[20px] font-bold'>ALATAU Middle Corridor</div>
                    <div className='mt-[8px]'>
                        {props.lg === 'ru' && 'Узел станет первым в Казахстане мультимодального транспортного экономического кластера'}
                        {props.lg === 'kz' && 'Хаб Қазақстандағы мультимодальды көліктік экономикалық кластердің алғашқысы болады'}
                        {props.lg === 'en' && 'The hub will become the first in Kazakhstan of a multimodal transport economic cluster'}
                    </div>
                    <div className='mt-[12px]'>
                        {props.lg === 'ru' && 'Используя географические преимущества проект направлен на создание интегрированного мультимодального транспортного узла, объединяющего:'}
                        {props.lg === 'kz' && 'Географиялық артықшылықтарды пайдалана отырып, жоба біріктірілген мультимодальды көлік хабын құруға бағытталған:'}
                        {props.lg === 'en' && 'Using geographical advantages, the project aims to create an integrated multimodal transport hub that unites:'}
                    </div>
                    <div
                        className={`mt-[8px] w-1/2 mx-auto transition-opacity duration-300 ${
                            fade ? 'opacity-0' : 'opacity-100'
                        }`}
                    >
                        {image === 1 && <img src={FlyImage} alt="FlyImage" className="max-w-100%" />}
                        {image === 2 && <img src={TrainImage} alt="TrainImage" className="max-w-100%" />}
                        {image === 3 && <img src={TruckImage} alt="TruckImage" className="max-w-100%" />}
                    </div>
                    <div className='mt-[10px] flex justify-between gap-x-[8px] mx-[60px]'>
                        <button onClick={() => handleChangeImage(1)}>
                            {props.lg === 'ru' && <img src={FlyIcon} alt="FlyIcon" className="max-w-100%" />}
                            {props.lg === 'kz' && <img src={FlyIconKz} alt="FlyIconKz" className="max-w-100%" />}
                            {props.lg === 'en' && <img src={FlyIconEn} alt="FlyIconEn" className="max-w-100%" />}
                        </button>
                        <button onClick={() => handleChangeImage(2)}>
                            {props.lg === 'ru' && <img src={TrainIcon} alt="TrainIcon" className="max-w-100%" />}
                            {props.lg === 'kz' && <img src={TrainIconKz} alt="TrainIconKz" className="max-w-100%" />}
                            {props.lg === 'en' && <img src={TrainIconEn} alt="TrainIconEn" className="max-w-100%" />}
                        </button>
                        <button onClick={() => handleChangeImage(3)}>
                            {props.lg === 'ru' && <img src={AutoIcon} alt="AutoIcon" className="max-w-100%" />}
                            {props.lg === 'kz' && <img src={AutoIconKz} alt="AutoIconKz" className="max-w-100%" />}
                            {props.lg === 'en' && <img src={AutoIconEn} alt="AutoIconEn" className="max-w-100%" />}
                        </button>
                    </div>
                    <div className='mt-[10px]'>
                        {props.lg === 'ru' && 'Это позволит реализовать новую модель Синергитичсекого развития города и логистического комплекса'}
                        {props.lg === 'kz' && 'Бұл қала мен логистикалық кешеннің синергетикалық дамуының жаңа моделін жүзеге асыруға мүмкіндік береді.'}
                        {props.lg === 'en' && 'This will allow the implementation of a new model of synergistic development of the city and logistics complex.'}
                    </div>
                </div>
            </div>
        </div>
    )
}