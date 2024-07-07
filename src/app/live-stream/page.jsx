import CommonSlider from "@/components/common-slider";

const page = () => {
    return (
        <div>
            <CommonSlider>
                <div
                    style={{
                        backgroundImage: `url('${service.image}')`,
                    }}
                    className="keen-slider__slide bg-cover bg-no-repeat bg-center flex items-center justify-center text-white"
                ></div>
            </CommonSlider>
        </div>
    );
};

export default page;
