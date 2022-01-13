public with sharing class AccountsController {
    @AuraEnabled( cacheable = true )
    public static List< Account > fetchAccounts() {
     
        return [ SELECT Id, Name, Industry, ParentId FROM Account LIMIT 10 ];
         
    }
}
