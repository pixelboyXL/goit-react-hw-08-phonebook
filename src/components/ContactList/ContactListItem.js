import PropTypes from 'prop-types';
import { ContactWrapper, ContactNumber, ButtonForDelete } from "components/ContactList/ContactList.styled";
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations/contactsOperations';

export const ContactItemEntrails = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return (
        <ContactWrapper>
            <ContactNumber>{name}: {number}</ContactNumber>
            <ButtonForDelete type="button" onClick={() => dispatch(deleteContact(id))}>Delete</ButtonForDelete>
        </ContactWrapper>
    );
};

ContactItemEntrails.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};