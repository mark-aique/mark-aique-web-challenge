import button from "@/styles/button.module.css";
import style from "@/styles/styles.module.css";
import TextField from "./text_field";
const ContactUsForm = () => {
    return <div className={"p-[24px] m-[24px] blur-[17] bg-[#D4CBFF66] rounded-[12] max-h-[426] max-w-[686] w-[100%] gap-[12px] flex flex-col " + style.form}>
        <p className="pb-[24px]">Send us a message</p>
        <TextField label="Full name" hintText="John Doe" />
        <TextField label="E-mail" hintText="johndoe@gmail.com" />
        <TextField label="Phone" prefix="+63" />
        <TextField label="Message" hintText="Type your message here" />
        <button
            className={button.filledButton + ' md:w-[96px] w-full min-h-[48px] mt-[12px]'}
            style={{
                borderRadius: '50px',
                alignSelf: 'end'
            }}>
            Send
        </button>
    </div >;
}

export default ContactUsForm
