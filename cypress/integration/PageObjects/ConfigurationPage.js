class ConfigurationPage
{
getNavigatetoConfiguration()
{
    return cy.get(':nth-child(10) > .submenu-toggle > .menu-text')
}
getnavigatetoAlarm()
{
    return cy.get('.nav > :nth-child(5) > a')
}
getnavigatetoServices()
{
    return cy.get('.nav-tabs-horizontal > .nav > :nth-child(2) > a')
}
getAlarmRange()
{
    return cy.get(':nth-child(1) > td.spaceAdj')
}
getselectalarm()
{
    return cy.get('#selected')
}
getok()
{
    return cy.get('form.ng-valid > .modal-footer > :nth-child(2)')
}
getgenerateAlarm()
{
    return cy.get(':nth-child(3) > td.ng-star-inserted')
}
}
export default ConfigurationPage