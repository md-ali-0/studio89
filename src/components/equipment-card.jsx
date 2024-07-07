"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import sliderBG1 from "@/assets/equipment/1.jpg";
import sliderBG2 from "@/assets/equipment/2.jpg";
import sliderBG3 from "@/assets/equipment/3.jpg";
import sliderBG4 from "@/assets/equipment/4.jpg";
import sliderBG5 from "@/assets/equipment/5.jpg";
import sliderBG6 from "@/assets/equipment/6.jpg";

const carousel = (slider) => {
    let timeout;
    let mouseOver = false;

    function clearNextTimeout() {
        clearTimeout(timeout);
    }

    function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
            slider.next();
        }, 2000);
    }
    const z = 300;
    function rotate() {
        const deg = 360 * slider.track.details.progress;
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
    }
    slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
        });
        nextTimeout();
        
        const deg = 360 / slider.slides.length;
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${
                deg * idx
            }deg) translateZ(${z}px)`;
        });
        rotate();
    });
    slider.on("detailsChanged", rotate);
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
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
            <div className="flex flex-col md:flex-row items-center border rounded-xl shadow-md overflow-hidden gap-5 px-10 py-8">
                <div className="md:w-1/2">
                    <div className="uppercase tracking-wide text-xl font-semibold">
                        Equipment List
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-5">
                        <ul className="mt-2 text-gray-500 dark:text-gray-300 list-disc list-inside">
                            <li className="doted">SONY FX30</li>
                            <li className="doted">SONY A7C</li>
                            <li className="doted">SONY 24mm, FE1.4, GM</li>
                            <li className="doted">
                                SONY 24-70mm, FE 2.8, GM ii
                            </li>
                            <li className="doted">DJI WIRELESS 2</li>
                            <li className="doted">RODE PODCAST MICROPHONE</li>
                        </ul>
                        <ul className="text-gray-500 dark:text-gray-300 list-disc list-inside">
                            <li className="doted">ATEM MINI PRO</li>
                            <li className="doted">GODOX LC500R</li>
                            <li className="doted">GODOX SL60 ii Bi</li>
                            <li className="doted">PHOTTIX RAJA 85cm</li>
                            <li className="doted">PHOTTIX RAJA 105cm</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center md:w-1/2">
                    <div className="scene">
                        <div className="carousel keen-slider" ref={sliderRef}>
                            <div
                                className="carousel__cell"
                                style={{
                                    backgroundImage: `url('${sliderBG1.src}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                            <div
                                className="carousel__cell"
                                style={{
                                    backgroundImage: `url('${sliderBG2.src}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                            <div
                                className="carousel__cell"
                                style={{
                                    backgroundImage: `url('${sliderBG3.src}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                            <div
                                className="carousel__cell"
                                style={{
                                    backgroundImage: `url('${sliderBG4.src}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                            <div
                                className="carousel__cell"
                                style={{
                                    backgroundImage: `url('${sliderBG5.src}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                            <div
                                className="carousel__cell"
                                style={{
                                    backgroundImage: `url('${sliderBG6.src}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;
