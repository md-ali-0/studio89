import bannerBd1 from "@/assets/banners/live-streaming/1.jpg";
import bannerBd2 from "@/assets/banners/live-streaming/2.jpg";
import bannerBd3 from "@/assets/banners/live-streaming/3.jpg";
import bannerBd4 from "@/assets/banners/live-streaming/4.jpg";
import CommonSlider from "@/components/common-slider";
import EquipmentCard from "@/components/equipment-card";
import SectionTitle from "@/components/section-title";
import WhyChooseUs from "@/components/why-choose-us";

const page = () => {
    const ImageData = [
        { image: bannerBd1 },
        { image: bannerBd2 },
        { image: bannerBd3 },
        { image: bannerBd4 },
    ];
    return (
        <div>
            <CommonSlider>
                {ImageData.map((item, idx) => (
                    <div
                        key={idx}
                        style={{
                            backgroundImage: `url('${item.image.src}')`,
                        }}
                        className="keen-slider__slide bg-cover bg-no-repeat bg-center"
                    >
                    </div>
                ))}
            </CommonSlider>
            <div>
                <SectionTitle
                    heading={"Live Streaming"}
                    subheading={`Stream live events with high-quality video and
                                audio, reaching your audience in real-time with
                                ease.`}
                />
                <WhyChooseUs />
                <EquipmentCard/>
            </div>
        </div>
    );
};

export default page;
