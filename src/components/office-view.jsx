
import photo1 from "@/assets/gallery/photo_1.jpg";
import photo2 from "@/assets/gallery/photo_2.jpg";
import photo3 from "@/assets/gallery/photo_3.jpg";
import photo4 from "@/assets/gallery/photo_4.jpg";
import photo5 from "@/assets/gallery/photo_5.jpg";
import photo6 from "@/assets/gallery/photo_6.jpg";
import Image from "next/image";
import Map from "./map";
import Container from "./ui/container";

const OfficeView = () => {
    return (
        <Container>
            <div className="py-6 m-5 lg:py-5">
                <h2 className="text-4xl uppercase font-bold text-center my-6">
                    Office View
                </h2>
                <div className="lg:flex justify-around items-center gap-8">
                    <div className="md:w-3/5  rounded-lg">
                        <Map></Map>
                    </div>
                    <div className="md:w-2/5 rounded-lg mt-5 lg:mt-0">
                        <div className="grid grid-cols-2 gap-2 lg:gap-8">
                            <Image
                                src={photo1}
                                className="md:w-72 rounded-md shadow-xl"
                                alt="gallery"
                            ></Image>
                            <Image
                                src={photo2}
                                className="md:w-72 rounded-md shadow-xl"
                                alt="gallery"
                            ></Image>
                            <Image
                                src={photo3}
                                className="md:w-72 rounded-md shadow-xl"
                                alt="gallery"
                            ></Image>
                            <Image
                                src={photo4}
                                className="md:w-72 rounded-md shadow-xl"
                                alt="gallery"
                            ></Image>
                            <Image
                                src={photo5}
                                className="md:w-72 rounded-md shadow-xl"
                                alt="gallery"
                            ></Image>
                            <Image
                                src={photo6}
                                className="md:w-72 rounded-md shadow-xl"
                                alt="gallery"
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default OfficeView;
