import bannerBd1 from "@/assets/banners/photo-shoot/1.jpg";
import bannerBd2 from "@/assets/banners/photo-shoot/2.jpg";
import bannerBd3 from "@/assets/banners/photo-shoot/3.jpg";
import CommonSlider from "@/components/common-slider";
import EquipmentCard from "@/components/equipment-card";
import SectionTitle from "@/components/section-title";
import WhyChooseUs from "@/components/why-choose-us";

const page = () => {
    const ImageData = [
        { image: bannerBd1 },
        { image: bannerBd2 },
        { image: bannerBd3 },
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
                    heading={"Photo Shoots"}
                    subheading={`Capture beautiful images in our well-equipped Photo shoot area. Whether it’s for fashion, products, or portraits, our studio offers the perfect backdrop and lighting to make your photos shine.`}
                />
                <WhyChooseUs />
                <EquipmentCard />
            </div>
        </div>
    );
};

export default page;
