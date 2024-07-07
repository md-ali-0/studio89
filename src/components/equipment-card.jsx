"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import sliderBG1 from "@/assets/equipment/1.jpg";
import sliderBG2 from "@/assets/equipment/2.jpg";
import sliderBG3 from "@/assets/equipment/3.jpg";
import sliderBG4 from "@/assets/equipment/4.jpg";
import sliderBG5 from "@/assets/equipment/5.jpg";
import sliderBG6 from "@/assets/equipment/6.jpg";
import Image from "next/image";

const carousel = (slider) => {
    const z = 300;
    function rotate() {
        const deg = 360 * slider.track.details.progress;
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length;
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${
                deg * idx
            }deg) translateZ(${z}px)`;
        });
        rotate();
    });
    slider.on("detailsChanged", rotate);
};

const EquipmentCard = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    );

    const equipmentList = [
        "SONY FX30",
        "SONY A7C",
        "SONY 24mm, FE1.4, GM",
        "SONY 24-70mm, FE 2.8, GM ii",
        "DJI WIRELESS 2",
        "RODE PODCAST MICROPHONE",
        "ATEM MINI PRO",
        "GODOX LC500R",
        "GODOX SL60 ii Bi",
        "PHOTTIX RAJA 85cm",
        "PHOTTIX RAJA 105cm",
    ];

    return (
        <div className="mx-auto max-w-6xl px-4 md:px-0 my-5 mt-10">
            <div className="flex flex-col md:flex-row items-center border rounded-xl shadow-md overflow-hidden gap-5">
                <div className="md:w-2/5">
                    <div className="md:flex">
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-xl font-semibold">
                                Equipment List
                            </div>
                            <ul className="mt-2 text-gray-500 dark:text-gray-300 list-disc list-inside">
                                {equipmentList.map((item, index) => (
                                    <li className="doted" key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:w-3/5">
                    <div className="scene">
                        <div className="carousel keen-slider" ref={sliderRef}>
                            <div
                                className="carousel__cell"
                            >
                                <Image src={sliderBG1.src} alt="" width={625} height={375}/>
                            </div>
                            <div
                                className="carousel__cell"
                            >
                                <Image src={sliderBG2.src} alt="" width={625} height={375}/>
                            </div>
                            <div
                                className="carousel__cell"
                            >
                                <Image src={sliderBG3.src} alt="" width={625} height={375}/>
                            </div>
                            <div
                                className="carousel__cell"
                            >
                                <Image src={sliderBG4.src} alt="" width={625} height={375}/>
                            </div>
                            <div
                                className="carousel__cell"
                            >
                                <Image src={sliderBG5.src} alt="" width={625} height={375}/>
                            </div>
                            <div
                                className="carousel__cell"
                            >
                                <Image src={sliderBG6.src} alt="" width={625} height={375}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;
