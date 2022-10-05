import { Box } from "components/Box";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Loading } from "components/Loading";
import { MainTitle, ContactsTitle, } from "components/GlobalStyles";
import { useSelector } from "react-redux";
import { selectIsLoading } from "redux/selector";

export const Phonebook = () => {
    const loading = useSelector(selectIsLoading);

    return (
        <>
            <Box as="section" mb={5}>
                <MainTitle>Phonebook</MainTitle>
                <ContactForm />
            </Box>
            <Box as="section">
                <ContactsTitle>Contacts</ContactsTitle>
                    <Filter />
                    {loading === true && <Loading />}
                    <ContactList />
                {/* : loading === true
        ? <Loading />
        : <WarningMessage>Looks like you don`t have any contacts yet or just clear them all. Please add new contact🤔</WarningMessage>} */}
            </Box>
        </>
    );
};