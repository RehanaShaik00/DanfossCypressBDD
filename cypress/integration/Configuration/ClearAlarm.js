import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import ClearAlarmPage from '../PageObjects/ClearAlarmPage'
import ActiveAlarmPage from '../PageObjects/ActiveAlarmPage'
import AcknowledgeAlarmPage from '../PageObjects/AcknowledgeAlarmPage'

const ActiveAlarm = new ActiveAlarmPage()
const Acknowledgealarm = new AcknowledgeAlarmPage()
const ClearAlarm = new ClearAlarmPage()
Given('I click on Cleared Alarm Section Section of svb5 System Manager', function() {
    ActiveAlarm.getclickonalarm().click()
    cy.wait(50000)
    ClearAlarm.getclickonclear().click()
    cy.wait(15000)
})
When('I click Device AK-SM880A in Cleared Alarm', function() {
    ClearAlarm.getdevicename().click()
})
Then('I verify Description as Test Alarm in Information window of Cleared Alarm',function() {
    ClearAlarm.getDescription().then(function($elem) {
        this.Description=($elem.text())
    ActiveAlarm.getlbldescriptionval().should('contain',this.Description)
    })
})
And('I verify Point as AK-SM880A in Information window of Cleared Alarm',function() {
    ClearAlarm.getPoint().then(function($elem) {
        this.Point=($elem.text())
    ActiveAlarm.getlblpointval().should('contain',this.Point)
    })
})
And('I verify Address as 0 in Information window of Cleared Alarm',function() {
    ClearAlarm.getAddress().then(function($elem) {
        this.Address=($elem.text())
    ActiveAlarm.getlbladdressval().should('contain',this.Address)
    })
})
And('I verify Setting as Alarm if ON in Information window of Cleared Alarm',function() {
    ClearAlarm.getsetting().then(function($elem) {
        this.Setting=($elem.text())
    ActiveAlarm.getlblsettingval().should('contain',this.Setting)
    })
})
And('I verify Current Value as Trip in Information window of Cleared Alarm',function() {
    ClearAlarm.getcurrentvalue().then(function($elem) {
        this.CurrentValue=($elem.text())
    ActiveAlarm.getlblcurrentvalueval().should('contain',this.CurrentValue)
    })
})
And('I verify Occured Time in Information window of Cleared Alarm',function() {
    ClearAlarm.getoccuredTime().then(function($elem) {
        this.Occured=($elem.text())
    ActiveAlarm.getlbloccuredval().should('contain',this.Occured)
    })
})
And('I verify Acknowledge Status as Yes in Information window of Cleared Alarm',function() {
    ClearAlarm.getAcknowledgestatus().then(function($elem) {
        this.Acknowledge=($elem.text())
    ActiveAlarm.getlblackval().should('contain',this.Acknowledge)
    })
})
And('I verify the ClearedTime in Information window of Cleared Alarm',function() {
    ClearAlarm.getclearedtime().then(function($elem) {
        this.ClearedTime=($elem.text())
    ClearAlarm.getverifyclearedtime().should('contain',this.ClearedTime)
    })
})
And('I verify the AlarmLevel as Critical in Information window of Cleared Alarm',function() {
    Acknowledgealarm.getalarmlevel().should('contain',this.svb5data.Alarmlevel)
})
And('I verify the AlarmAction as 1 in Information window of Cleared Alarm',function() {
    Acknowledgealarm.getalarmaction().should('contain',this.svb5data.AlarmAction)
})
Then('I click on close button in Information window of Cleared Alarm',function() {
    ClearAlarm.getclear().click()
})