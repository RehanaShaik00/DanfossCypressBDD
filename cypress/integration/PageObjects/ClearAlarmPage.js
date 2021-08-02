class ClearAlarmPage
{
getclickonclear()
{
    return cy.get('#cleared')
}
getdevicename()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > [style="width: 122.429px; min-width: 120px; height: 33px;"]')
}
getDescription()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(4)')
}
getPoint()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > [style="width: 122.429px; min-width: 120px; height: 33px;"]')
}
getAddress()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > [style="width: 80px; max-width: 80px; height: 33px;"]')
}
getsetting()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(7)')
}
getcurrentvalue()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(8)')
}
getoccuredTime()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(5)')
}
getAcknowledgestatus()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(9)')
}
getclearedtime()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(6)')
}
getverifyclearedtime()
{
    return cy.get(':nth-child(8) > .col-sm-8')
}
getclear()
{
    return cy.get('app-alarmdetailmodal > .modal-header > .close')
}
}
export default ClearAlarmPage