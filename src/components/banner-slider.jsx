"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Container from "./ui/container";

const BannerSlider = () => {
    
    const serviceData = [
        {
            id: "01",
            name: "Live Streaming",
            description:
                "Broadcast live events or presentations to a remote audience in real-time.",
            category: "services",
            image: "https://i.ibb.co/2Krc9Pr/learning-education-ideas-insight-intelligence-study-concept-min.jpg",
        },
        {
            id: "02",
            name: "Podcast",
            description:
                "Create and distribute audio programs for listeners to subscribe and enjoy on-demand.",
            category: "services",
            image: "https://i.ibb.co/YtqRZgV/pexels-sander-dalhuisen-1332691-2566035-min.jpg",
        },
        {
            id: "03",
            name: "Social Media Content",
            description:
                "Develop engaging content (text, images, videos) for promoting your brand or message on social media platforms.",
            category: "services",
            image: "https://i.ibb.co/FhsCCs7/popular-internet-streamer-answering-public-question-live-chat-while-broadcasting-video-young-digital.jpg",
        },
        {
            id: "04",
            name: "EdTech Classroom",
            description:
                "Leverage educational technology tools and platforms to enhance the learning experience in a classroom setting.",
            category: "services",
            image: "https://i.ibb.co/82s8LWk/pretty-young-woman-recording-video-her-hair-beauty-blog-home-min.jpg",
        },
    ];

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
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
                });
                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);
            },
        ]
    );

    return (
        <div className="lg:m-3.5 m-1.5">
            <Container>
                <>
                    <div
                        ref={sliderRef}
                        className="keen-slider rounded-xl h-[490px]"
                    >
                        {serviceData.map((service) => (
                            <div
                                key={service.id}
                                style={{
                                    backgroundImage: `url('${service.image}')`,
                                }}
                                className="keen-slider__slide bg-cover bg-no-repeat bg-center"
                            >
                            </div>
                        ))}
                    </div>
                </>
            </Container>
        </div>
    );
};

export default BannerSlider;
