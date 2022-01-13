public with sharing class ContactsController {
    @AuraEnabled( cacheable = true )
    public static List< Contact > fetchContacts() {
        return [SELECT Id, FirstName, LastName, AccountId from Contact where Department = 'Change Account'];
    }
}



