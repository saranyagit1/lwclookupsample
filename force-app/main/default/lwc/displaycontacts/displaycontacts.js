import { LightningElement, wire } from 'lwc';
import fetchContacts from '@salesforce/apex/ContactsController.fetchContacts';

import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';

export default class displaycontacts extends LightningElement {

    records;
    wiredRecords;
    error;
    fields = [ FIRSTNAME_FIELD, LASTNAME_FIELD, ACCOUNT_FIELD ];

    @wire( fetchContacts )  
    wiredContact( value ) {

        this.wiredRecords = value;
        const { data, error } = value;

        if ( data ) {
                            
            this.records = data;
            this.error = undefined;
            return refreshApex(this.conlist);

        } else if ( error ) {

            this.error = error;
            this.records = undefined;

        }

    }  

}