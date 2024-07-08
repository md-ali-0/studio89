const Map = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.8782235489866!2d90.36416!3d23.822929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1001fb7f453%3A0x84b64c254c2cfbb0!2sStudio%2089!5e0!3m2!1sen!2sbd!4v1720033199727!5m2!1sen!2sbd"
            className="w-full h-80 lg:w-[680px] lg:h-[510px]"
            style={{border: "0", borderRadius: '10px'}}
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );
};

export default Map;
