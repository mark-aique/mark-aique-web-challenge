import ContactDetails from "./contact_details";
import ContactUsForm from "./contact_us_form";

const ContactUsSection = () => {
    return (
        <div className="flex flex-wrap gap-y-[12px] items-start justify-between">
            <ContactDetails></ContactDetails>
            <ContactUsForm></ContactUsForm>
        </div>
    );
}

export default ContactUsSection