import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import AcknowledgeAlarmPage from '../PageObjects/AcknowledgeAlarmPage'
import ActiveAlarmPage from '../PageObjects/ActiveAlarmPage'


const Acknowledgealarm = new AcknowledgeAlarmPage()
const ActiveAlarm = new ActiveAlarmPage()
Given('I click on Acknowledge Alarm Section of svb5 System Manager', function() {
    Acknowledgealarm.getclickonAlaram().click()
    Acknowledgealarm.getclickonacknowledge().click()
    cy.wait(5000)
})
When('I click on Device AK-SM880A in Acknowledge Alarm', function() {
    ActiveAlarm.getclickonDevicename().click()
})
When('I verify the Description as Test Alarm in Information window of Acknowledge Alarm', function() {
    ActiveAlarm.getDescription().then(function($elem) {
        this.Description=($elem.text())
    ActiveAlarm.getlbldescriptionval().should('contain',this.Description)
})
})
When('I verify the Point as AK-SM880A in Information window of Acknowledge Alarm', function() {
    ActiveAlarm.getpoint().then(function($elem) {
        this.Point=($elem.text())
    ActiveAlarm.getlblpointval().should('contain',this.Point)
})
})
When('I verify the Address as 0 in Information window of Acknowledge Alarm', function() {
    ActiveAlarm.getaddress().then(function($elem) {
        this.Address=($elem.text())
    ActiveAlarm.getlbladdressval().should('contain',this.Address)
})
})
When('I verify the Setting as Alarm if ON in Information window of Acknowledge Alarm', function() {
    ActiveAlarm.getsetting().then(function($elem) {
        this.Setting=($elem.text())
    ActiveAlarm.getlblsettingval().should('contain',this.Setting)
})
})
When('I verify the Current Value as Trip in Information window of Acknowledge Alarm', function() {
    ActiveAlarm.getcurrentvalue().then(function($elem) {
        this.CurrentValue=($elem.text())
    ActiveAlarm.getlblcurrentvalueval().should('contain',this.CurrentValue)
})
})
When('I verify the Occured Time in Information window of Acknowledge Alarm', function() {
    ActiveAlarm.getoccuredtime().then(function($elem) {
        this.Occured=($elem.text())
    ActiveAlarm.getlbloccuredval().should('contain',this.Occured)
})
})
When('I verify the Acknowledge Status as Yes in Information window of Acknowledge Alarm', function() {
    ActiveAlarm.getacknowledgestatus().then(function($elem) {
        this.Acknowledge=($elem.text())
    ActiveAlarm.getlblackval().should('contain',this.Acknowledge)
    
})
})
And('I verify the AlarmLevel as Critical in Information window of Acknowledge Alarm',function() {
    Acknowledgealarm.getalarmlevel().should('contain',this.svb5data.Alarmlevel)
})
And('I verify the AlarmAction as 1 in Information window of Acknowledge Alarm',function() {
    Acknowledgealarm.getalarmaction().should('contain',this.svb5data.AlarmAction)
})
Then('I click on close button in Information window of Acknowledge Alarm', function(){
    Acknowledgealarm.getclose().click()
})