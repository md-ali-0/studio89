import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuFacebook, LuInstagram, LuPhone, LuYoutube } from "react-icons/lu";

const Page = () => {
    return (
        <div className="max-w-4xl mx-auto  overflow-hidden space-y-8 my-5 px-4 lg:px-0">
            <div className="rounded-lg border p-4 sm:p-6">
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                        Welcome to Studio89
                    </h3>
                    <p className="text-sm leading-relaxed">
                        At Studio89, we believe in the power of creativity and
                        the endless possibilities it brings. Our state-of-the-
                        art studio is designed to be the perfect space for all
                        your multimedia needs, whether you&apos;re an aspiring
                        podcaster, a live streamer, an educator, or a content
                        creator..
                    </p>
                </div>
                <div className="py-1.5">
                    <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                    <p className="text-sm leading-relaxed">
                        Our mission is to provide a versatile and professional
                        environment where creators of all kinds can bring their
                        visions to life. We are dedicated to supporting
                        creativity, innovation, and learning through our
                        flexible and fully-equipped studio spaces.
                    </p>
                </div>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">
                        Why Choose Studio89?
                    </h3>
                    <ul className="list-disc list-inside text-sm">
                        <li>
                            State-of-the-Art Equipment: Our studio is outfitted
                            with the latest technology to ensure your content is
                            of the highest quality.
                        </li>
                        <li>
                            Flexible Rental Options: Whether you need the studio
                            for an hour, a day, or a week, we offer flexible
                            rental packages to fit your schedule and budget.
                        </li>
                        <li>
                            Extra Facilities: We provide rental space and
                            equipment. We also provide makeup room and changing
                            room facilities.
                        </li>
                        <li>
                            Expert Support: Our team of professionals is here to
                            assist you with any technical needs, offering
                            guidance and support to help you achieve your
                            creative goals.
                        </li>
                        <li>
                            ACreative Environment: Studio89 is more than just a
                            space; it&apos;s a community of creators. We foster
                            a collaborative and inspiring atmosphere where ideas
                            can flourish.
                        </li>
                    </ul>
                </div>
                <div className="py-5">
                    <h3 className="text-lg font-semibold mb-2">
                        What We Offer
                    </h3>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                        <div className="group">
                            <div className="h-[200px]  shadow-lg border rounded-lg p-2 flex   items-center flex-col justify-center text-center dark:group-hover:bg-slate-900 duration-300">
                                <h3 className="text-gray-900 dark:text-gray-300 text-xl py-1 font-semibold">
                                    {"Podcast Recording"}
                                </h3>
                                <p className="text-sm text-balance">
                                    Our soundproof studios are equipped with the
                                    latest audio and video technology, ensuring
                                    your podcast sounds professional and
                                    polished.
                                </p>
                            </div>
                        </div>
                        <div className="group">
                            <div className="h-[200px]  shadow-lg border rounded-lg p-2 flex   items-center flex-col justify-center text-center dark:group-hover:bg-slate-900 duration-300">
                                <h3 className="text-gray-900 dark:text-gray-300 text-xl py-1 font-semibold">
                                    {"Live Streaming"}
                                </h3>
                                <p className="text-sm text-balance">
                                    Stream live events with high-quality video
                                    and audio, reaching your audience in
                                    real-time with ease.
                                </p>
                            </div>
                        </div>
                        <div className="group">
                            <div className="h-[200px]  shadow-lg border rounded-lg p-2 flex   items-center flex-col justify-center text-center dark:group-hover:bg-slate-900 duration-300">
                                <h3 className="text-gray-900 dark:text-gray-300 text-xl py-1 font-semibold">
                                    {"Product Video Content"}
                                </h3>
                                <p className="text-sm text-balance">
                                    Showcase your products in the best light
                                    with our professional video equipment and
                                    expert guidance.
                                </p>
                            </div>
                        </div>
                        <div className="group">
                            <div className="h-[200px]  shadow-lg border rounded-lg p-2 flex   items-center flex-col justify-center text-center dark:group-hover:bg-slate-900 duration-300">
                                <h3 className="text-gray-900 dark:text-gray-300 text-xl py-1 font-semibold">
                                    {"EdTech Classroom"}
                                </h3>
                                <p className="text-sm text-balance">
                                    Conduct virtual classes or record
                                    educational content in our tech-savvy
                                    classrooms, designed to enhance the learning
                                    experience.
                                </p>
                            </div>
                        </div>
                        <div className="group">
                            <div className="h-[200px]  shadow-lg border rounded-lg p-2 flex   items-center flex-col justify-center text-center dark:group-hover:bg-slate-900 duration-300">
                                <h3 className="text-gray-900 dark:text-gray-300 text-xl py-1 font-semibold">
                                    {"Social Media Content"}
                                </h3>
                                <p className="text-sm text-balance">
                                    Create eye-catching content for your social
                                    media channels with our cutting-edge
                                    facilities and creative support.
                                </p>
                            </div>
                        </div>
                        <div className="group">
                            <div className="h-[200px]  shadow-lg border rounded-lg p-2 flex   items-center flex-col justify-center text-center dark:group-hover:bg-slate-900 duration-300">
                                <h3 className="text-gray-900 dark:text-gray-300 text-xl py-1 font-semibold">
                                    {"Photoshoots"}
                                </h3>
                                <p className="text-sm text-balance">
                                    Capture beautiful images in our
                                    well-equipped photoshoot area. Whether it’s
                                    for fashion, products, or portraits, our
                                    studio offers the perfect backdrop and
                                    lighting to make your photos shine.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-1.5">
                    <h3 className="text-lg font-semibold mb-2">
                        Join Our Community
                    </h3>
                    <p className="text-sm leading-relaxed">
                        Studio89 is more than just a place to work—it&apos;s a
                        place to grow, learn, and connect. We invite you to join
                        our community of creators and see what you can achieve.
                        Whether you’re launching a new podcast, streaming your
                        next live event, or developing educational content,
                        Studio89 is here to help you every step of the way.
                    </p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl border rounded-lg font-[sans-serif]">
                <div>
                    <h1 className="text-gray-800 dark:text-gray-300 text-3xl font-extrabold">
                        Let&apos;s Talk
                    </h1>
                    <p className="text-sm text-gray-500 mt-4">
                        Ready to book your studio time or have questions? Reach
                        out to us at +8801711605618 or visit us at 2/2, Pollobi,
                        Mirpur 11.5, Dhaka (beside Setara Convention Hall). We
                        look forward to working with you!
                    </p>
                    <div className="mt-12">
                        <h2 className="dark:text-gray-300 text-base font-bold">
                            Phone
                        </h2>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <div className="bg-[#e6e6e6cf] dark:bg-slate-800 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <LuPhone size={20} />
                                </div>
                                <a
                                    href="#"
                                    className="dark:text-gray-300 text-sm ml-4"
                                >
                                    <small className="block">Phone</small>
                                    <strong>+8801711605618</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-gray-800 dark:text-gray-300 text-base font-bold">
                            Socials
                        </h2>
                        <ul className="flex mt-4 space-x-4">
                            <li className="bg-[#e6e6e6cf] dark:bg-slate-800  h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <Link
                                    target="_blank"
                                    href="https://www.facebook.com/profile.php?id=61557020607639"
                                >
                                    <LuFacebook />
                                </Link>
                            </li>
                            <li className="bg-[#e6e6e6cf] dark:bg-slate-800 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <Link
                                    target="_blank"
                                    href="https://www.instagram.com/studio89bd"
                                >
                                    <LuInstagram />
                                </Link>
                            </li>
                            <li className="bg-[#e6e6e6cf] dark:bg-slate-800 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <Link
                                    target="_blank"
                                    href="https://www.youtube.com/@Studio89bd"
                                >
                                    <LuYoutube />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <form className="ml-auto space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full rounded-md py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-md py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full rounded-md py-3 px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                    />
                    <textarea
                        placeholder="Message"
                        rows={6}
                        className="w-full rounded-md px-4 bg-gray-100 dark:bg-gray-800 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
                        defaultValue={""}
                    />
                    <Button variant="default" className="w-full">
                        Send
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Page;
