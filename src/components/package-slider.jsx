"use client"

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import PricingCard from "./ui/pricing-card";

const List = ({ children }) => {
    return (
        <p className="text-base text-slate-500 dark:text-dark-6">{children}</p>
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
        <section className="relative z-10 overflow-hidden bg-white pb-5 pt-8 dark:bg-[#020817]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                Our Pricing Plan
                            </h2>
                            <p className="text-base text-slate-500 dark:text-dark-6">
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="keen-slider" ref={sliderRef}>
                    <div className="keen-slider__slide">
                        <PricingCard
                            type="Bronze"
                            price="$256"
                            subscription="year"
                            description="A hard alloy of copper and tin, often used in sculptures and tools."
                            buttonText="Choose Bronze"
                        >
                            <List>Unlimited User</List>
                            <List>All UI components</List>
                            <List>Lifetime access</List>
                            <List>Free updates</List>
                        </PricingCard>
                    </div>
                    <div className="keen-slider__slide">
                        <PricingCard
                            type="Silver"
                            price="$59"
                            subscription="year"
                            description="A shiny white precious metal often used in jewelry and tableware."
                            buttonText="Choose Silver"
                        >
                            <List>1 User</List>
                            <List>All UI components</List>
                            <List>Lifetime access</List>
                            <List>Free updates</List>
                        </PricingCard>
                    </div>
                    <div className="keen-slider__slide">
                        <PricingCard
                            type="Gold"
                            price="$199"
                            subscription="year"
                            description="A soft, yellow precious metal often used in jewelry, coins, and electronics."
                            buttonText="Choose Gold"
                        >
                            <List>5 User</List>
                            <List>All UI components</List>
                            <List>Lifetime access</List>
                            <List>Free updates</List>
                        </PricingCard>
                    </div>
                    <div className="keen-slider__slide">
                        <PricingCard
                            type="Diamond"
                            price="$256"
                            subscription="year"
                            description="The hardest naturally occurring substance known, often used as a gemstone."
                            buttonText="Choose Diamond"
                        >
                            <List>Unlimited User</List>
                            <List>All UI components</List>
                            <List>Lifetime access</List>
                            <List>Free updates</List>
                        </PricingCard>
                    </div>
                    <div className="keen-slider__slide">
                        <PricingCard
                            type="Platinum"
                            price="$256"
                            subscription="year"
                            description="A dense, white precious metal often used in jewelry and industrial applications."
                            buttonText="Choose Platinum"
                        >
                            <List>Unlimited User</List>
                            <List>All UI components</List>
                            <List>Lifetime access</List>
                            <List>Free updates</List>
                        </PricingCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PackageSlider;
