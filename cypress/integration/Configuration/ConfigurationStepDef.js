import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import ConfigurationPage from '../PageObjects/ConfigurationPage'


const Configuration = new ConfigurationPage()
Given('I click on Configuration Section of svb5 System Manager', function() {
    //cy.visit('http://118.185.187.242:6031/MCXWeb.html')
    Configuration.getNavigatetoConfiguration().click()
    cy.wait(25000)
})
When('I navigate to Alarm in Configuration Section', function() {
    Configuration.getnavigatetoAlarm().click()
    cy.wait(5000)
})
Then('I navigate to Service in Alarm Section of Configuration', function() {
    Configuration.getnavigatetoServices().click()
    cy.wait(5000)
})
And('I set Alarm Range as Critical', function() {
    Configuration.getAlarmRange().dblclick()
    Configuration.getselectalarm().select('Critical')
    Configuration.getok().click()
})
And('I generate the Test Alarm', function() {
    Configuration.getgenerateAlarm().dblclick()
    cy.wait(5000)
})