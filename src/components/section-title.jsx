const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="flex flex-wrap pt-10">
            <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                    <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                        {heading}
                    </h2>
                    <p className="text-base text-slate-500 dark:text-dark-6">
                        {subheading}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SectionTitle;
