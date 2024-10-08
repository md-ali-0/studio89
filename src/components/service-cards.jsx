import educationClassRoomIcon from "@/assets/icons/education.png";
import liveStreamIcon from "@/assets/icons/live-stream.png";
import photoShootIcon from "@/assets/icons/photo-shoot.png";
import podCastIcon from "@/assets/icons/pod-cast.png";
import socialMediaIcon from "@/assets/icons/social-media.png";
import videoContentIcon from "@/assets/icons/video-content.png";
import Image from "next/image";
import Link from "next/link";

const ServiceCards = () => {
    return (
        <section className="relative z-10 overflow-hidden pb-5 pt-8">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            <h2 className="mb-3 text-3xl font-bold leading-[1.208] sm:text-4xl md:text-[40px]">
                                Our Services
                            </h2>
                            {/* <p className="text-base text-slate-500 dark:text-dark-6">
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration in some form.
                            </p> */}
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                    <div className="group">
                        <Link href={'/service/live-stream'} className="h-[200px]  shadow-lg border rounded-lg p-2 flex   items-center flex-col justify-center text-center dark:group-hover:bg-slate-900 duration-300">
                            <Image
                                src={liveStreamIcon}
                                alt="category image"
                                className="size-20 group-hover:scale-110"
                            />

                            <h3 className="text-gray-900 dark:text-gray-300 text-lg py-1 font-semibold">
                                {"Live Stream"}
                            </h3>
                        </Link>
                    </div>
                    <div className="group ">
                        <Link href={'/service/podcast'} className="h-[200px]  shadow-lg border rounded-lg p-2 flex   items-center flex-col justify-center text-center dark:group-hover:bg-slate-900 duration-300">
                            <Image
                                src={podCastIcon}
                                alt="category image"
                                className="size-20 group-hover:scale-110"
                            />
                            <h3 className="text-gray-900 dark:text-gray-300 text-lg py-1 font-semibold">
                                {"PodCast"}
                            </h3>
                        </Link>
                    </div>
                    <div className="group">
                        <Link href={'/service/video-content'} className="h-[200px]  shadow-lg border rounded-lg p-2 flex   items-center flex-col justify-center text-center dark:group-hover:bg-slate-900 duration-300">
                            <Image
                                src={videoContentIcon}
                                alt="category image"
                                className="size-20 group-hover:scale-110"
                            />
                            <h3 className="text-gray-900 dark:text-gray-300 text-lg py-1 font-semibold">
                                {"Video Content"}
                            </h3>
                        </Link>
                    </div>
                    <div className="group ">
                        <Link href={'/service/social-media-content'} className="h-[200px]  shadow-lg border rounded-lg p-2 flex   items-center flex-col justify-center text-center dark:group-hover:bg-slate-900 duration-300">
                            <Image
                                src={socialMediaIcon}
                                alt="category image"
                                className="size-20 group-hover:scale-110"
                            />
                            <h3 className="text-gray-900 dark:text-gray-300 text-lg py-1 font-semibold">
                                {"Social Media Content"}
                            </h3>
                        </Link>
                    </div>
                    <div className="group ">
                        <Link
                            href={"/service/edTech-classroom"}
                            className="h-[200px]  shadow-lg border rounded-lg p-2 flex   items-center flex-col justify-center text-center dark:group-hover:bg-slate-900 duration-300"
                        >
                            <Image
                                src={educationClassRoomIcon}
                                alt="category image"
                                className="size-20 group-hover:scale-110"
                            />
                            <h3 className="text-gray-900 dark:text-gray-300 text-lg py-1 font-semibold">
                                {"EdTech Classroom"}
                            </h3>
                        </Link>
                    </div>
                    <div className="group ">
                        <Link href={'/service/photo-shoot'} className="h-[200px]  shadow-lg border rounded-lg p-2 flex   items-center flex-col justify-center text-center dark:group-hover:bg-slate-900 duration-300">
                            <Image
                                src={photoShootIcon}
                                alt="category image"
                                className="size-20 group-hover:scale-110"
                            />
                            <h3 className="text-gray-900 dark:text-gray-300 text-lg py-1 font-semibold">
                                {"Photo Shoot"}
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceCards;
