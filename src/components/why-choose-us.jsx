import Image from "next/image";

const WhyChooseUs = () => {
    return (
        <div className="mx-auto max-w-6xl px-4 md:px-0">
            <ul className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
                <li className="rounded-xl border px-6 py-8 shadow-sm">
                    <Image
                        src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
                        alt=""
                        width={40}
                        height={40}
                        className="mx-auto h-10 w-10"
                    />
                    <h3 className="my-3 font-medium">
                        State-of-the-Art Equipment
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                        Our studio is outfitted with the latest technology to
                        ensure your content is of the highest quality.
                    </p>
                </li>
                <li className="rounded-xl border px-6 py-8 shadow-sm">
                    <Image
                        src="https://www.svgrepo.com/show/530442/port-detection.svg"
                        alt=""
                        width={40}
                        height={40}
                        className="mx-auto h-10 w-10"
                    />
                    <h3 className="my-3 font-medium">
                        Flexible Rental Options
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                        Whether you need the studio for an hour, a day, or a
                        week, we offer flexible rental packages to fit your
                        schedule and budget.
                    </p>
                </li>
                <li className="rounded-xl border px-6 py-8 shadow-sm">
                    <Image
                        src="https://www.svgrepo.com/show/530444/availability.svg"
                        alt=""
                        width={40}
                        height={40}
                        className="mx-auto h-10 w-10"
                    />
                    <h3 className="my-3 font-medium">Extra Facilities</h3>
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                        We provide rental space and equipment. We also provide
                        makeup room and changing room facilities.
                    </p>
                </li>
                <li className="rounded-xl border px-6 py-8 shadow-sm">
                    <a href="/pricing" className="group">
                        <Image
                            src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                            alt=""
                            width={40}
                            height={40}
                            className="mx-auto h-10 w-10"
                        />
                        <h3 className="my-3 font-medium group-hover:text-primary-500">
                            Expert Support
                        </h3>
                        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                            Our team of professionals is here to assist you with
                            any technical needs, offering guidance and support
                            to help you achieve your creative goals.
                        </p>
                    </a>
                </li>
                <li className="rounded-xl border px-6 py-8 shadow-sm">
                    <a href="/templates" className="group">
                        <Image
                            src="https://www.svgrepo.com/show/530450/page-analysis.svg"
                            alt=""
                            width={40}
                            height={40}
                            className="mx-auto h-10 w-10"
                        />
                        <h3 className="my-3 font-medium group-hover:text-primary-500">
                            Creative Environment
                        </h3>
                        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                            Studio89 is more than just a space; it&apos;s a
                            community of creators. We foster a collaborative and
                            inspiring atmosphere where ideas can flourish.
                        </p>
                    </a>
                </li>
                <li className="rounded-xl border px-6 py-8 shadow-sm">
                    <a href="/download" className="group">
                        <Image
                            src="https://www.svgrepo.com/show/530453/mail-reception.svg"
                            alt=""
                            width={40}
                            height={40}
                            className="mx-auto h-10 w-10"
                        />
                        <h3 className="my-3 font-medium group-hover:text-primary-500">
                            Use Anywhere
                        </h3>
                        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                            Our product is compatible with multiple platforms
                            including Web, Chrome, Windows and Mac, you can use
                            MagickPen anywhere.
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default WhyChooseUs;
