import bannerBd1 from "@/assets/banners/podcast/1.jpg";
import bannerBd2 from "@/assets/banners/podcast/2.jpg";
import bannerBd3 from "@/assets/banners/podcast/3.jpg";
import bannerBd4 from "@/assets/banners/podcast/4.jpg";
import bannerBd5 from "@/assets/banners/podcast/5.jpg";
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
        { image: bannerBd5 },
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
                    heading={"Podcast Recording"}
                    subheading={`Our soundproof studios are equipped with the latest audio and video technology, ensuring your podcast sounds professional and polished.`}
                />
                <WhyChooseUs />
                <EquipmentCard />
            </div>
        </div>
    );
};

export default page;
