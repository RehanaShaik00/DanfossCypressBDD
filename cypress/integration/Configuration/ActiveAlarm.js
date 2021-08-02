import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import ActiveAlarmPage from '../PageObjects/ActiveAlarmPage'
import AcknowledgeAlarmPage from '../PageObjects/AcknowledgeAlarmPage'

const ActiveAlarm = new ActiveAlarmPage()
const Acknowledgealarm = new AcknowledgeAlarmPage()
Given('I click on Alarms Section of svb5 System Manager', function() {
    ActiveAlarm.getclickonalarm().click()
    cy.wait(20000)
})
When('I click on Device AK-SM880A in Active Alarms', function() {
    ActiveAlarm.getclickonDevicename().click()
})
Then('I verify the Description as Test Alarm in Information window of Active Alarm', function() {
    ActiveAlarm.getDescription().then(function($elem) {
        this.Description=($elem.text())
    ActiveAlarm.getlbldescriptionval().should('contain',this.Description)
})
})
And('I verify the Point as AK-SM880A in Information window of Active Alarm', function() {
    ActiveAlarm.getpoint().then(function($elem) {
        this.Point=($elem.text())
    ActiveAlarm.getlblpointval().should('contain',this.Point)
})
})
And('I verify the Address as 0 in Information window of Active Alarm', function() {
    ActiveAlarm.getaddress().then(function($elem) {
        this.Address=($elem.text())
    ActiveAlarm.getlbladdressval().should('contain',this.Address)
})
})
And('I verify the Setting as Alarm if ON in Information window of Active Alarm', function() {
    ActiveAlarm.getsetting().then(function($elem) {
        this.Setting=($elem.text())
    ActiveAlarm.getlblsettingval().should('contain',this.Setting)
})
})
And('I verify the Current Value as Trip in Information window of Active Alarm', function() {
    ActiveAlarm.getcurrentvalue().then(function($elem) {
        this.CurrentValue=($elem.text())
    ActiveAlarm.getlblcurrentvalueval().should('contain',this.CurrentValue)
})
})
And('I verify the Occured Time in Information window of Active Alarm', function() {
    ActiveAlarm.getoccuredtime().then(function($elem) {
        this.Occured=($elem.text())
    ActiveAlarm.getlbloccuredval().should('contain',this.Occured)
})
})
And('I verify the Acknowledge Status as No in Information window of Active Alarm', function() {
    ActiveAlarm.getacknowledgestatus().then(function($elem) {
        this.Acknowledge=($elem.text())
    ActiveAlarm.getlblackval().should('contain',this.Acknowledge)
})
})
And('I verify the AlarmLevel as Critical in Information window of Active Alarm',function() {
    Acknowledgealarm.getalarmlevel().should('contain',this.svb5data.Alarmlevel)
})
And('I verify the AlarmAction as 1 in Information window of Active Alarm',function() {
    Acknowledgealarm.getalarmaction().should('contain',this.svb5data.AlarmAction)
})
Then('I click on Acknowledge the Alarm in Information window of Active Alarm', function(){
    ActiveAlarm.getacknowledalarm().click()
   
})