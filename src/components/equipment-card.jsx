const EquipmentCard = () => {
    const equipmentList = [
        "SONY FX30",
        "SONY A7C",
        "SONY 24mm, FE1.4, GM",
        "SONY 24-70mm, FE 2.8, GM ii",
        "DJI WIRELESS 2",
        "RODE PODCAST MICROPHONE",
        "ATEM MINI PRO",
        "GODOX LC500R",
        "GODOX SL60 ii Bi",
        "PHOTTIX RAJA 85cm",
        "PHOTTIX RAJA 105cm",
    ];

    return (
        <div className="mx-auto max-w-6xl px-4 md:px-0 my-5 mt-10">
            <div className="border rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-xl font-semibold">
                            Equipment List
                        </div>
                        <ul className="mt-2 text-gray-500 dark:text-gray-300">
                            {equipmentList.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;
