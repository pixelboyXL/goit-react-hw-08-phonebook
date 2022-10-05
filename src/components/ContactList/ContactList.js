import { ContactItemEntrails } from 'components/ContactList/ContactListItem';
import { ContactListStyle, ContactItem } from "components/ContactList/ContactList.styled";
import { selectFilteredContacts, selectAuth } from 'redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export const ContactList = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(selectAuth);
    const filteredContacts = useSelector(selectFilteredContacts);
    
    useEffect(() => {
        if (isLoggedIn === true) {
            dispatch(fetchContacts());
        };
    }, [isLoggedIn, dispatch]);

    return (
        <ContactListStyle>
            {filteredContacts.map(({id, name, number}) => {
                return (
                    <ContactItem key={id}>
                        <ContactItemEntrails id={id} name={name} number={number} />
                    </ContactItem>
                );
            })}
        </ContactListStyle>
    );
};