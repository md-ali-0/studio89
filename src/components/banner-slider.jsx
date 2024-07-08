import bannerBd1 from "@/assets/banners/main/1.jpg";
import bannerBd2 from "@/assets/banners/main/2.jpg";
import bannerBd3 from "@/assets/banners/main/3.jpg";
import CommonSlider from "./common-slider";

const BannerSlider = () => {
    const ImageData = [
        { image: bannerBd1 },
        { image: bannerBd2 },
        { image: bannerBd3 }
    ];
    return (
        <div className="lg:m-3.5 m-1.5 my-2.5">
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
        </div>
    );
};

export default BannerSlider;
