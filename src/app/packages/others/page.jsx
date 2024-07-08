import EquipmentCard from "@/components/equipment-card";
import PricingCard from "@/components/ui/pricing-card";

const List = ({ children }) => {
    return (
        <li className="text-base text-slate-500 dark:text-gray-300 doted">{children}</li>
    );
};

const page = () => {
    const services = [
        { name: "Extra Studio Time", price: "1,000/- BDT per hour" },
        {
            name: "Full Video Editing Services",
            price: "Starting at 3,000/- BDT per project",
        },
        {
            name: "Professional Editing Suite",
            price: "Starting at 2,000/- BDT per hour",
        },
        { name: "Technical Support", price: "2,000/- BDT per hour" },
        { name: "Makeup Artist", price: "Contact us for a quote" },
    ];
    return (
        <section className="relative z-10 overflow-hidden pb-5 pt-8">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            <h2 className="text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                Others Packages
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <PricingCard
                        type="EdTech Package"
                        price="2,500/- BDT"
                        description="Tailored for educators and institutions."
                        buttonText="Choose EdTech"
                    >
                        <List>2 hours of studio time</List>
                        <List>
                            Access to interactive whiteboards and presentation
                            tools
                        </List>
                        <List>Professional audio and video equipment</List>
                        <List>
                            Technical support for live streaming or recording
                            classes
                        </List>
                    </PricingCard>
                    <PricingCard
                        type="Custom Package"
                        price="Contact us"
                        description="Customizable options to suit specific needs."
                        buttonText="Contact Us"
                    >
                        <List>Flexible studio time based on your needs</List>
                        <List>
                            Access to all available equipment and facilities
                        </List>
                        <List>Personalized technical support</List>
                        <List>Full post-production services</List>
                        <List>
                            Additional services upon request (e.g., makeup
                            artist, set design)
                        </List>
                    </PricingCard>
                </div>
            </div>
            <EquipmentCard />
            <div className="max-w-6xl mx-auto overflow-hidden">
                <div className="border shadow-md rounded-lg px-6 py-4">
                    <h2 className="text-2xl text-center font-bold mb-4">
                        Additional Services
                    </h2>
                    <div className="table w-full">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="table-row-group border-t border-gray-200 py-2"
                            >
                                <div className="table-row">
                                    <div className="table-cell text-left font-medium py-2">
                                        {service.name}
                                    </div>
                                    <div className="table-cell text-right py-2">
                                        {service.price}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
