class AcknowledgeAlarmPage
{
getclickonAlaram()
{
    return cy.get(':nth-child(4) > .submenu-toggle > .menu-text')
}
getclickonacknowledge()
{
    return cy.get('#acknowledged')
}
getalarmlevel()
{
    return cy.get(':nth-child(9) > .col-sm-8')
}
getalarmaction()
{
    return cy.get(':nth-child(10) > .col-sm-8')
}
getclose()
{
    return cy.get('app-alarmdetailmodal > .modal-header > .close')
}
}
export default AcknowledgeAlarmPage