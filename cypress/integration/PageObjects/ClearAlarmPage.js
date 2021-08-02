class ClearAlarmPage
{
getclickonclear()
{
    return cy.get('#cleared')
}
getdevicename()
{
   // return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > [style="width: 122.429px; min-width: 120px; height: 33px;"]')
    return cy.get('#app-main > div > app-alarms > section > div > div > div > div > div.datatable-wrapper.ng-star-inserted > datatable > ngx-datatable > div > datatable-body > datatable-selection > datatable-scroller > datatable-row-wrapper:nth-child(1) > datatable-body-row > div.datatable-row-center.datatable-row-group.ng-star-inserted > datatable-body-cell:nth-child(2)')
}
getDescription()
{
    return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(4)')
}
getPoint()
{
    return cy.get('#app-main > div > app-alarms > section > div > div > div > div > div.datatable-wrapper.ng-star-inserted > datatable > ngx-datatable > div > datatable-body > datatable-selection > datatable-scroller > datatable-row-wrapper:nth-child(1) > datatable-body-row > div.datatable-row-center.datatable-row-group.ng-star-inserted > datatable-body-cell:nth-child(2)')

    //return cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > [style="width: 122.429px; min-width: 120px; height: 33px;"]')
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
