import BannerSlider from "@/components/banner-slider";
import CalendarDatePicker from "@/components/calender-picker";
import OfficeView from "@/components/office-view";
import PackageSlider from "@/components/package-slider";
import ServiceCards from "@/components/service-cards";

export default function Home() {
    return (
        <main>
            <BannerSlider />
            <ServiceCards/>
            <CalendarDatePicker/>
            <PackageSlider/>
            <OfficeView/>
        </main>
    );
}
