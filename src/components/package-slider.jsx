"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Container from "./ui/container";
import PricingCard from "./ui/pricing-card";

const List = ({ children }) => {
    return (
        <li className="text-base text-slate-500 dark:text-gray-300 doted">
            {children}
        </li>
    );
};

const PackageSlider = () => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 15,
        },
        breakpoints: {
            "(max-width: 1024px)": {
                slides: {
                    perView: 2,
                    spacing: 10,
                },
            },
            "(max-width: 640px)": {
                slides: {
                    perView: 1,
                    spacing: 5,
                },
            },
        },
    });

    return (
        <section className="relative z-10 overflow-hidden pb-5 pt-8">
            <Container>
                <div className="flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            <h2 className="mb-3 text-3xl font-bold leading-[1.208] sm:text-4xl md:text-[40px]">
                                Our Pricing Plan
                            </h2>
                            {/* <p className="text-base text-slate-500 dark:text-dark-6">
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration in some form.
                            </p> */}
                        </div>
                    </div>
                </div>

                <div className="keen-slider" ref={sliderRef}>
                    <div className="keen-slider__slide">
                        <PricingCard
                            type="Live Stream"
                            price="2,500/- BDT"
                            description="Ideal for regular content creators who need more flexibility"
                            buttonText="Choose Live Stream"
                        >
                            <List>1 hours of studio time</List>
                            <List>
                                Access to high-quality video and audio recording
                                equipment
                            </List>
                            <List>Professional lighting setup</List>
                            <List>On-site technical support</List>
                        </PricingCard>
                    </div>
                    <div className="keen-slider__slide">
                        <PricingCard
                            type="Package 1"
                            price="2,000/- BDT"
                            description="Ideal for regular content creators who need more flexibility"
                            buttonText="Choose Package"
                        >
                            <List>1 hours of studio time</List>
                            <List>
                                Access to high-quality video and audio recording
                                equipment
                            </List>
                            <List>Professional lighting setup</List>
                            <List>On-site technical support</List>
                        </PricingCard>
                    </div>
                    <div className="keen-slider__slide">
                        <PricingCard
                            type="Podcast"
                            price="2,500/- BDT"
                            description="Perfect for beginners and small projects."
                            buttonText="Choose Podcast"
                        >
                            <List>1 hours of studio time</List>
                            <List>Two persons podcast season</List>
                            <List>
                                Access to high-quality video and audio recording
                                equipment
                            </List>
                            <List>High-quality lighting setup</List>
                            <List>On-site technical support</List>
                        </PricingCard>
                    </div>
                    <div className="keen-slider__slide">
                        <PricingCard
                            type="EdTech Package"
                            price="2,500/- BDT"
                            description="Tailored for educators and institutions."
                            buttonText="Choose EdTech"
                            link="/packages/others"
                        >
                            <List>2 hours of studio time</List>
                            <List>
                                Access to interactive whiteboards and
                                presentation tools
                            </List>
                            <List>Professional audio and video equipment</List>
                            <List>
                                Technical support for live streaming or
                                recording classes
                            </List>
                        </PricingCard>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PackageSlider;
