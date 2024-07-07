import { GiFlexibleStar } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { RiAedLine, RiApps2Line, RiXrpFill } from "react-icons/ri";
import { SiProtools } from "react-icons/si";

const WhyChooseUs = () => {
    return (
        <div className="mx-auto max-w-6xl px-4 md:px-0">
            <ul className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
                <li className="rounded-xl border px-6 py-8 shadow-sm">
                    <SiProtools className="mx-auto" size={30} />
                    <h3 className="my-3 font-medium">
                        State-of-the-Art Equipment
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                        Our studio is outfitted with the latest technology to
                        ensure your content is of the highest quality.
                    </p>
                </li>
                <li className="rounded-xl border px-6 py-8 shadow-sm">
                    <GiFlexibleStar className="mx-auto" size={30} />
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
                    <RiAedLine className="mx-auto" size={30} />
                    <h3 className="my-3 font-medium">Extra Facilities</h3>
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                        We provide rental space and equipment. We also provide
                        makeup room and changing room facilities.
                    </p>
                </li>
                <li className="rounded-xl border px-6 py-8 shadow-sm">
                    <MdSupportAgent className="mx-auto" size={30} />
                    <h3 className="my-3 font-medium group-hover:text-primary-500">
                        Expert Support
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                        Our team of professionals is here to assist you with any
                        technical needs, offering guidance and support to help
                        you achieve your creative goals.
                    </p>
                </li>
                <li className="rounded-xl border px-6 py-8 shadow-sm">
                    <RiApps2Line className="mx-auto" size={30} />
                    <h3 className="my-3 font-medium group-hover:text-primary-500">
                        Creative Environment
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                        Studio89 is more than just a space; it&apos;s a
                        community of creators. We foster a collaborative and
                        inspiring atmosphere where ideas can flourish.
                    </p>
                </li>
                <li className="rounded-xl border px-6 py-8 shadow-sm">
                    <RiXrpFill className="mx-auto" size={30} />
                    <h3 className="my-3 font-medium group-hover:text-primary-500">
                        Use Anywhere
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                        Our product is compatible with multiple platforms
                        including Web, Chrome, Windows and Mac, you can use
                        MagickPen anywhere.
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default WhyChooseUs;
