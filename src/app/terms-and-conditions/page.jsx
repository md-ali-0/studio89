const Page = () => {
    return (
        <div className="max-w-4xl mx-auto  overflow-hidden space-y-8 my-5 px-4 lg:px-0">
            <div className="rounded-lg border p-4 sm:p-6">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Introduction</h3>
                    <p className="text-sm leading-relaxed">
                        Welcome to Studio89. These Terms and Conditions govern
                        your use of our facilities and services. By accessing or
                        using our studio, you agree to comply with and be bound
                        by these Terms and Conditions. If you do not agree with
                        any part of these terms, you must not use our services.
                    </p>
                </div>
                <div className="py-1.5 space-y-5">
                    <h3 className="text-xl font-semibold mb-2">
                        1. Booking and Payment
                    </h3>
                    <div className="ml-3.5">
                        <h3 className="text-lg font-semibold mb-2">
                            1.1 Booking Process:
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Our mission is to provide a versatile and
                            professional environment where creators of all kinds
                            can bring their visions to life. We are dedicated to
                            supporting creativity, innovation, and learning
                            through our flexible and fully-equipped studio
                            spaces.
                        </p>
                    </div>
                    <div className="ml-3.5">
                        <h3 className="text-lg font-semibold mb-2">
                            1.2 Payment Terms:
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Payment must be made in full at the time of booking
                            unless otherwise agreed upon in writing. We accept
                            various forms of payment (Bank Transfer, Cash,
                            Mobile Banking).
                        </p>
                    </div>
                    <div className="ml-3.5">
                        <h3 className="text-lg font-semibold mb-2">
                            1.3 Cancellations and Refunds:
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Cancellations made at least 48 hours in advance will
                            receive a full refund. Cancellations made within 48
                            hours of the booking will not be refunded.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
