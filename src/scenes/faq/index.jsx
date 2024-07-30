import { Box } from "@mui/material";

// custom
import Headers from "../../components/Headers";
import CustomAccordion from "./components/CustomAccordion";

const FAQ = () => {
    return (
        <Box m="20px 20px 0 20px" >
            <Headers title="FAQ" subtitle="Frequently asked question!" />

            <Box height="69vh" overflow="auto">
                <CustomAccordion
                    summary="What is your return policy?"
                    details="Our return policy allows returns within 30 days of purchase. The item must be in its original condition and packaging. Please contact our support team to initiate a return."
                />

                <CustomAccordion
                    summary="How can I track my order?"
                    details="Once your order has shipped, you will receive an email with a tracking number and a link to track your package. You can also track your order from your account on our website."
                />

                <CustomAccordion
                    summary="Do you offer international shipping?"
                    details="Yes, we offer international shipping to many countries. Shipping costs and delivery times vary depending on the destination. Please check our shipping policy for more details."
                />

                <CustomAccordion
                    summary="How can I contact customer support?"
                    details="You can contact our customer support team via email at support@example.com or call us at (123) 456-7890. Our support team is available Monday through Friday, 9 AM to 5 PM."
                />
            </Box>
        </Box>
    );
};

export default FAQ;
